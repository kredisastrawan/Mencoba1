/**
 * ============================================================================
 * GOOGLE APPS SCRIPT: BACKEND SISTEM PENDAFTARAN BALI YOUTH EVOLUTION (BYE)
 * ============================================================================
 * Spreadsheet ID : 13rAI3aYfLfsfPYY0FoJe9AGqJlJv8HT3lWP1fK8JfNo
 * Admin WhatsApp : 081997841103 (6281997841103)
 * Status Awal    : "Baru"
 * 
 * PANDUAN DEPLOYMENT:
 * 1. Buka spreadsheet Google Sheets Anda (ID di atas)
 * 2. Klik menu "Ekstensi" > "Apps Script" (Extensions > Apps Script)
 * 3. Hapus kode default, tempel (paste) seluruh isi kode ini ke Code.gs
 * 4. Klik tombol "Simpan" (ikon disket)
 * 5. Jalankan fungsi "setupSheet()" sekali untuk memformat header & dropdown
 * 6. Klik tombol "Deploy" (Terapkan) > "New deployment" (Deployment baru)
 * 7. Pilih jenis "Web app" (Aplikasi web)
 * 8. Konfigurasi:
 *    - Description: "BYE Registration Webhook v1"
 *    - Execute as: "Me" (Saya / akun pemilik spreadsheet)
 *    - Who has access: "Anyone" (Siapa saja)  <-- WAJIB agar form website bisa mengirim data
 * 9. Klik "Deploy", izinkan hak akses (Authorize access)
 * 10. Salin "Web App URL" (akhiran /exec) dan masukkan ke file .env website:
 *     VITE_BYE_REGISTRATION_API_URL="https://script.google.com/macros/s/.../exec"
 * ============================================================================
 */

var SPREADSHEET_ID = "13rAI3aYfLfsfPYY0FoJe9AGqJlJv8HT3lWP1fK8JfNo";

// Definisi Struktur Kolom Standar BYE
var STANDARD_HEADERS = [
  "Timestamp",
  "ID Pendaftar",
  "Nama Lengkap",
  "Kategori Profil",
  "Nomor WhatsApp",
  "Minat / Harapan Bergabung",
  "Status Pendaftaran",
  "Catatan Admin"
];

var STATUS_OPTIONS = [
  "Baru",
  "Sedang Ditinjau",
  "Dihubungi",
  "Diterima",
  "Ditolak"
];

/**
 * Handle GET Request (untuk tes endpoint di browser)
 */
function doGet(e) {
  return createJsonResponse({
    success: true,
    status: "online",
    service: "Bali Youth Evolution (BYE) Registration API",
    spreadsheetId: SPREADSHEET_ID,
    timestamp: new Date().toISOString()
  });
}

/**
 * Handle POST Request (Menerima data pendaftaran dari website)
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Cegah race condition antar request konkuren (tunggu max 10 detik)
  var hasLock = lock.tryLock(10000);

  try {
    if (!hasLock) {
      return createJsonResponse({
        success: false,
        error: "Server sedang sibuk memproses pendaftaran lain. Silakan coba beberapa detik lagi."
      });
    }

    // 1. Ekstraksi Data (Mendukung JSON Body & URL-encoded Form)
    var payload = {};
    if (e && e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (err) {
        payload = e.parameter || {};
      }
    } else if (e && e.parameter) {
      payload = e.parameter;
    }

    // 2. Cek apakah ini permintaan Inquiry (Partnership / Collaboration)
    if (payload.action === 'inquiry' || payload.type === 'inquiry' || payload.inquiryType) {
      var inqType = cleanString(payload.inquiryType || "Inquiry");
      var inqName = cleanString(payload.name || payload.nama);
      var inqEmail = cleanString(payload.email);
      var inqDetail = cleanString(payload.detail || payload.institution || payload.collabType || "-");
      var inqMessage = cleanString(payload.message || payload.pesan || "-");

      try {
        MailApp.sendEmail({
          to: "baliyouthevolution@gmail.com",
          replyTo: inqEmail,
          subject: "[BYE " + inqType + "] Pesan dari " + inqName + " (" + inqEmail + ")",
          body: "Halo Admin Bali Youth Evolution,\n\nTerdapat inquiry baru dari website:\n\n" +
                "Kategori: " + inqType + "\n" +
                "Nama: " + inqName + "\n" +
                "Email: " + inqEmail + "\n" +
                "Instansi / Keterangan: " + inqDetail + "\n\n" +
                "Pesan:\n" + inqMessage + "\n\n" +
                "--\nDikirim otomatis dari formulir website Bali Youth Evolution."
        });
      } catch (mailErr) {
        // MailApp mungkin memerlukan izin atau kuota
      }

      return createJsonResponse({
        success: true,
        message: "Inquiry berhasil diproses dan dikirim ke baliyouthevolution@gmail.com"
      });
    }

    // 3. Sanitasi & Validasi Input Pendaftaran Wajib
    var name = cleanString(payload.name || payload.nama);
    var whatsapp = cleanString(payload.whatsapp || payload.noHp || payload.phone);
    var role = cleanString(payload.role || payload.kategori || "Pelajar / Mahasiswa");
    var interest = cleanString(payload.interest || payload.minat || "");

    if (!name || name.length < 2) {
      return createJsonResponse({
        success: false,
        error: "Nama lengkap wajib diisi minimal 2 karakter."
      });
    }

    if (!whatsapp || whatsapp.length < 8) {
      return createJsonResponse({
        success: false,
        error: "Nomor WhatsApp wajib diisi dengan benar."
      });
    }

    // Standarisasi format nomor WhatsApp Indonesia (contoh: 0812... atau 62812...)
    var cleanPhone = whatsapp.replace(/[^0-9]/g, "");
    if (cleanPhone.startsWith("62")) {
      cleanPhone = "0" + cleanPhone.substring(2);
    }
    // Pastikan diawali tanda kutip (') agar Google Sheets menyimpannya sebagai teks murni (angka 0 tidak hilang)
    var formattedPhoneForSheet = "'" + cleanPhone;

    // 3. Akses Google Sheet
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheets()[0]; // Gunakan sheet pertama

    // Periksa dan sesuaikan struktur kolom sheet bila diperlukan
    ensureHeadersAndFormatting(sheet);

    // 4. Deteksi Spam / Duplikasi Cepat (Nomor sama dalam 60 detik terakhir)
    if (isRecentDuplicate(sheet, cleanPhone)) {
      return createJsonResponse({
        success: false,
        error: "Nomor WhatsApp ini baru saja didaftarkan. Harap tunggu beberapa saat atau hubungi admin via WhatsApp."
      });
    }

    // 5. Generate Metadata Pendaftaran
    var now = new Date();
    var timestampStr = Utilities.formatDate(now, "Asia/Makassar", "yyyy-MM-dd HH:mm:ss");
    var dateCode = Utilities.formatDate(now, "Asia/Makassar", "yyyyMMdd");
    var randomCode = Math.random().toString(36).substring(2, 6).toUpperCase();
    var registrationId = "BYE-" + dateCode + "-" + randomCode;

    // 6. Pemetaan Baris Berdasarkan Kolom yang Ada
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var newRow = mapDataToHeaders(headers, {
      timestamp: timestampStr,
      id: registrationId,
      name: name,
      role: role,
      whatsapp: formattedPhoneForSheet,
      interest: interest,
      status: "Baru",
      notes: ""
    });

    // 7. Simpan Baris Baru ke Spreadsheet (Append)
    sheet.appendRow(newRow);

    // Pastikan format cell nomor WhatsApp adalah Text murni
    var lastRowIndex = sheet.getLastRow();
    var phoneColIndex = findColumnIndex(headers, ["Nomor WhatsApp", "No HP", "No. HP", "WhatsApp", "Telepon"]);
    if (phoneColIndex > 0) {
      sheet.getRange(lastRowIndex, phoneColIndex).setNumberFormat("@");
    }

    // 8. Beri respons sukses
    return createJsonResponse({
      success: true,
      message: "Pendaftaran berhasil disimpan ke Google Sheets.",
      data: {
        registrationId: registrationId,
        timestamp: timestampStr,
        name: name,
        role: role,
        whatsapp: cleanPhone,
        status: "Baru"
      }
    });

  } catch (error) {
    return createJsonResponse({
      success: false,
      error: "Terjadi kesalahan saat menyimpan data: " + error.toString()
    });
  } finally {
    if (hasLock) {
      lock.releaseLock();
    }
  }
}

/**
 * Menyiapkan format header, freeze row, dan dropdown status pendaftaran
 * Fungsi ini bisa dijalankan manual di editor Apps Script
 */
function setupSheet() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheets()[0];
  ensureHeadersAndFormatting(sheet, true);
  Logger.log("Setup spreadsheet selesai!");
}

/**
 * Memastikan header & validasi dropdown terpasang dengan rapi tanpa merusak data lama
 */
function ensureHeadersAndFormatting(sheet, forceUpgrade) {
  var lastCol = sheet.getLastColumn();
  
  // Jika sheet benar-benar kosong, buat header standar
  if (lastCol === 0) {
    sheet.appendRow(STANDARD_HEADERS);
    formatHeaderRow(sheet);
    applyStatusDropdown(sheet, 7);
    return;
  }

  var existingHeaders = sheet.getRange(1, 1, 1, lastCol).getValues()[0];

  // Jika sheet memiliki header lama seperti "Kategori, Nama, No HP, Minat",
  // kita tambahkan kolom pelengkap di sebelahnya jika belum ada
  if (forceUpgrade || !hasHeader(existingHeaders, "ID Pendaftar")) {
    var missingHeaders = [];
    if (!hasHeader(existingHeaders, "Timestamp")) missingHeaders.push("Timestamp");
    if (!hasHeader(existingHeaders, "ID Pendaftar")) missingHeaders.push("ID Pendaftar");
    if (!hasHeader(existingHeaders, "Status Pendaftaran")) missingHeaders.push("Status Pendaftaran");
    if (!hasHeader(existingHeaders, "Catatan Admin")) missingHeaders.push("Catatan Admin");

    if (missingHeaders.length > 0) {
      for (var i = 0; i < missingHeaders.length; i++) {
        sheet.getRange(1, lastCol + 1 + i).setValue(missingHeaders[i]);
      }
    }
  }

  // Refresh headers setelah upgrade
  lastCol = sheet.getLastColumn();
  var updatedHeaders = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  formatHeaderRow(sheet);

  // Pasang Dropdown Status Pendaftaran
  var statusColIndex = findColumnIndex(updatedHeaders, ["Status Pendaftaran", "Status"]);
  if (statusColIndex > 0) {
    applyStatusDropdown(sheet, statusColIndex);
  }

  // Format kolom nomor WhatsApp sebagai teks
  var phoneColIndex = findColumnIndex(updatedHeaders, ["Nomor WhatsApp", "No HP", "No. HP", "WhatsApp", "Telepon"]);
  if (phoneColIndex > 0 && sheet.getMaxRows() > 1) {
    sheet.getRange(2, phoneColIndex, sheet.getMaxRows() - 1, 1).setNumberFormat("@");
  }
}

/**
 * Format baris header (freeze baris 1, bold, background biru BYE)
 */
function formatHeaderRow(sheet) {
  sheet.setFrozenRows(1);
  var headerRange = sheet.getRange(1, 1, 1, sheet.getLastColumn());
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#0284c7");
  headerRange.setFontColor("#ffffff");
  headerRange.setHorizontalAlignment("center");
}

/**
 * Pasang validasi dropdown Status Pendaftaran
 */
function applyStatusDropdown(sheet, colIndex) {
  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(STATUS_OPTIONS, true)
    .setAllowInvalid(false)
    .build();

  // Terapkan mulai dari baris 2 sampai baris 1000
  var maxRows = Math.max(sheet.getMaxRows(), 100);
  sheet.getRange(2, colIndex, maxRows - 1, 1).setDataValidation(rule);
}

/**
 * Petakan nilai data input ke urutan kolom yang ada di spreadsheet
 */
function mapDataToHeaders(headers, data) {
  var row = [];
  for (var i = 0; i < headers.length; i++) {
    var h = headers[i].toString().trim().toLowerCase();

    if (h.indexOf("time") >= 0 || h.indexOf("waktu") >= 0 || h.indexOf("tanggal") >= 0) {
      row.push(data.timestamp);
    } else if (h.indexOf("id") >= 0) {
      row.push(data.id);
    } else if (h.indexOf("nama") >= 0) {
      row.push(data.name);
    } else if (h.indexOf("kategori") >= 0 || h.indexOf("profil") >= 0 || h.indexOf("role") >= 0) {
      row.push(data.role);
    } else if (h.indexOf("hp") >= 0 || h.indexOf("wa") >= 0 || h.indexOf("telepon") >= 0 || h.indexOf("phone") >= 0) {
      row.push(data.whatsapp);
    } else if (h.indexOf("minat") >= 0 || h.indexOf("harapan") >= 0 || h.indexOf("pesan") >= 0) {
      row.push(data.interest);
    } else if (h.indexOf("status") >= 0) {
      row.push(data.status);
    } else if (h.indexOf("catatan") >= 0 || h.indexOf("admin") >= 0 || h.indexOf("notes") >= 0) {
      row.push(data.notes);
    } else {
      row.push(""); // Kolom lain yang mungkin ada dibiarkan kosong
    }
  }
  return row;
}

/**
 * Cari index kolom berdasarkan kemungkinan nama header
 */
function findColumnIndex(headers, candidates) {
  for (var i = 0; i < headers.length; i++) {
    var h = headers[i].toString().trim().toLowerCase();
    for (var j = 0; j < candidates.length; j++) {
      if (h === candidates[j].toLowerCase() || h.indexOf(candidates[j].toLowerCase()) >= 0) {
        return i + 1; // 1-indexed
      }
    }
  }
  return -1;
}

function hasHeader(headers, name) {
  return findColumnIndex(headers, [name]) > 0;
}

/**
 * Cek duplikasi pendaftaran dari nomor yang sama dalam waktu 60 detik terakhir
 */
function isRecentDuplicate(sheet, rawPhone) {
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return false;

  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var phoneCol = findColumnIndex(headers, ["Nomor WhatsApp", "No HP", "No. HP", "WhatsApp"]);
  if (phoneCol < 1) return false;

  // Cek 5 baris terakhir saja untuk efisiensi
  var checkCount = Math.min(5, lastRow - 1);
  var startRow = lastRow - checkCount + 1;
  var recentPhones = sheet.getRange(startRow, phoneCol, checkCount, 1).getValues();

  for (var i = 0; i < recentPhones.length; i++) {
    var p = recentPhones[i][0].toString().replace(/[^0-9]/g, "");
    if (p.endsWith(rawPhone.slice(-8))) {
      return true;
    }
  }
  return false;
}

function cleanString(val) {
  if (!val) return "";
  return val.toString().trim();
}

function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
