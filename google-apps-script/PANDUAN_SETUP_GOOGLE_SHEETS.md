# PANDUAN INTEGRASI GOOGLE APPS SCRIPT KE GOOGLE SHEETS BYE

Spreadsheet Target:
- **ID Spreadsheet**: `13rAI3aYfLfsfPYY0FoJe9AGqJlJv8HT3lWP1fK8JfNo`
- **Nomor Admin WhatsApp**: `081997841103` (`6281997841103`)

---

## Langkah 1: Pasang Script di Google Sheets

1. Buka spreadsheet Anda di browser:
   `https://docs.google.com/spreadsheets/d/13rAI3aYfLfsfPYY0FoJe9AGqJlJv8HT3lWP1fK8JfNo/edit`
2. Pada menu atas, klik **Extensions** (Ekstensi) > **Apps Script**.
3. Di editor Apps Script, buka file `Code.gs`.
4. Hapus isi bawaan, lalu salin (**copy**) seluruh kode dari file `google-apps-script/Code.gs` dan tempel (**paste**) ke editor.
5. Klik ikon **Save** (Disket) atau tekan `Ctrl + S` / `Cmd + S`.

---

## Langkah 2: Format & Persiapan Kolom (Sekali Saja)

1. Pada dropdown fungsi di bagian atas editor Apps Script, pilih fungsi `setupSheet`.
2. Klik tombol **Run** (Jalankan).
3. Jika muncul dialog perizinan:
   - Klik **Review permissions** (Tinjau izin).
   - Pilih akun Google Anda.
   - Klik **Advanced** (Lanjutan) di kiri bawah.
   - Klik **Go to Untitled project (unsafe)** / Buka project.
   - Klik **Allow** (Izinkan).
4. Selesai! Spreadsheet Anda otomatis memiliki:
   - Header beku (*freeze row 1*) dengan warna biru resmi BYE.
   - Dropdown otomatis pada kolom *Status Pendaftaran* (`Baru`, `Sedang Ditinjau`, `Dihubungi`, `Diterima`, `Ditolak`).
   - Format teks pada nomor WhatsApp agar angka 0 di depan tidak hilang.

---

## Langkah 3: Deploy sebagai Web App (PENTING!)

1. Di pojok kanan atas editor Apps Script, klik tombol biru **Deploy** (Terapkan) > **New deployment** (Deployment baru).
2. Di sebelah kiri (ikon roda gigi), pilih jenis **Web app** (Aplikasi web).
3. Isi konfigurasi berikut:
   - **Description**: `BYE Registration Webhook v1`
   - **Execute as**: `Me (email Anda)`
   - **Who has access**: `Anyone` (Siapa saja)  *(WAJIB dipilih Anyone agar website dapat mengirim data)*
4. Klik tombol **Deploy**.
5. Salin **Web app URL** yang muncul (formatnya: `https://script.google.com/macros/s/AKfycb.../exec`).

---

## Langkah 4: Hubungkan ke Website BYE

1. Buka file `.env` di project website (atau atur di Environment Variables Vercel):
   ```env
   VITE_BYE_REGISTRATION_API_URL="https://script.google.com/macros/s/AKfycb.../exec"
   ```
2. Ganti URL di atas dengan Web app URL hasil deployment Anda di Langkah 3.
3. Simpan dan publish/redeploy website!
