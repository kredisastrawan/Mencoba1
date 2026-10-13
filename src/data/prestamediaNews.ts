export interface NewsPhoto {
  file: string;
  caption: string;
  after: number;
}

// Bentuk akhir yang dibaca halaman Prestamedia (jangan diubah)
export interface NewsItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  dateline: string;
  excerpt: string;
  cover: string;
  coverCaption: string;
  body: string[];
  photos: NewsPhoto[];
}

// Bentuk yang kamu isi. Pakai `text` (paling gampang), atau `body` + `photos` (gaya lama)
export interface NewsEntry {
  slug: string;         // unik, huruf kecil, tanpa spasi (pakai tanda -)
  title: string;
  category: string;     // contoh: Prestasi
  date: string;         // format YYYY-MM-DD
  author: string;
  dateline: string;     // contoh: DENPASAR, PRESTAMEDIA
  excerpt: string;      // ringkasan 1-2 kalimat untuk kartu
  cover: string;        // nama file foto sampul atau link url langsung
  coverCaption: string; // keterangan foto sampul
  text?: string;        // isi berita, paragraf dipisah baris kosong
  body?: string[];
  photos?: NewsPhoto[];
}

export const newsImg = (file: string) => {
  if (!file) return '';
  const trimmed = file.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:')) {
    return trimmed;
  }
  return encodeURI('/' + trimmed.replace(/^\//, ''));
};

/*
  ============================================================
  CARA MENAMBAH BERITA (tanpa prompt)
  ============================================================
  1. Upload foto ke project, nama file TANPA spasi (contoh: berita-budi-1.webp)
  2. Salin template di bawah, tempel di PALING ATAS daftar NEWS, lalu isi.
  3. Klik Publish lagi supaya website yang live ikut berubah.

  TEMPLATE (salin dari tanda { sampai }, ):

  {
    slug: 'judul-singkat-tanpa-spasi',
    title: 'Judul Berita',
    category: 'Prestasi',
    date: '2026-10-15',
    author: 'Redaksi Prestamedia',
    dateline: 'DENPASAR, PRESTAMEDIA',
    excerpt: 'Ringkasan satu atau dua kalimat untuk kartu berita.',
    cover: 'berita-budi-1.webp',
    coverCaption: 'Keterangan foto sampul.',
    text: `
Paragraf pertama. Tempel teks beritanya di sini.

Paragraf kedua. Pisahkan tiap paragraf dengan SATU BARIS KOSONG.

[foto: berita-budi-2.webp | Keterangan foto kedua]

Paragraf ketiga muncul setelah foto di atas.
`,
  },

  ATURAN: teks boleh memuat tanda ' dan " dengan bebas.
  Jangan menulis tanda ` (backtick) di dalam teks berita.
  Baris [foto: nama-file | keterangan] otomatis jadi foto di tempat itu,
  tepat setelah paragraf di atasnya.
*/
const NEWS: NewsEntry[] = [
  {
    slug: 'mulyana-sman-2-tumijajar-tembus-parlemen-remaja-2026-dpr-ri',
    title: 'Mulyana, Siswa SMAN 2 Tumijajar Tembus Parlemen Remaja 2026 dan Siap Bawa Suara Lampung ke Tingkat Nasional',
    category: 'Pendidikan & Kepemudaan',
    date: '2026-10-13',
    author: 'Redaksi Prestamedia',
    dateline: 'TUMIJAJAR, PRESTAMEDIA',
    excerpt: 'Berhasil menyisihkan belasan ribu pendaftar, Mulyana dari SMAN 2 Tumijajar resmi terpilih sebagai delegasi Provinsi Lampung dalam ajang Parlemen Remaja 2026 yang diselenggarakan oleh DPR RI.',
    cover: 'https://i.ibb.co.com/8n7K2H24/Screenshot-2026-10-13-at-14-23-50.png',
    coverCaption: 'Mulyana mengenakan selempang Parlemen Remaja DPR RI 2026 mewakili Dapil Lampung II di dalam ruang rapat Senayan[cite: 8].',
    text: `
Prestasi membanggakan kembali ditorehkan oleh pelajar asal Provinsi Lampung. Mulyana, siswa SMA Negeri 2 Tumijajar, sukses mencatatkan namanya sebagai delegasi resmi Provinsi Lampung dalam ajang bergengsi Parlemen Remaja 2026 yang diselenggarakan langsung oleh Dewan Perwakilan Rakyat Republik Indonesia (DPR RI).

Keberhasilan Mulyana menembus Senayan bukanlah hal yang mudah. Persaingan tahun ini terbilang sangat ketat dan sengit. Dari hampir 14.000 pelajar yang mendaftar dari seluruh penjuru Indonesia, hanya 200 putra-putri terbaik yang dinyatakan lolos kualifikasi. Mulyana berhasil membuktikan kapasitasnya dan mengamankan satu posisi berharga tersebut.

[foto: https://i.ibb.co.com/ZR4JWYdZ/Screenshot-2026-10-13-at-14-24-00.png | Mulyana bersama 200 delegasi Parlemen Remaja 2026 terpilih dari seluruh Indonesia berfoto di anak tangga Gedung Kura-Kura DPR/MPR RI[cite: 7].]

Parlemen Remaja sendiri merupakan agenda tahunan bergengsi dari Sekretariat Jenderal DPR RI. Program ini dirancang khusus sebagai wadah pembelajaran politik dan demokrasi yang komprehensif bagi generasi muda. Melalui kegiatan ini, para peserta diajak untuk terjun langsung memahami proses pembuatan undang-undang, menjalankan fungsi pengawasan, hingga merasakan atmosfer simulasi rapat kerja layaknya seorang Anggota DPR RI sungguhan.

Pencapaian Mulyana menjadi bukti nyata bahwa keterbatasan daerah sama sekali bukan penghalang untuk bersaing dan bersinar di panggung nasional. Keberaniannya dalam menyuarakan gagasan-gagasan kritis, dipadukan dengan kepedulian yang tinggi terhadap berbagai isu sosial, menjadi kunci utama yang membuatnya mampu menyisihkan belasan ribu pesaing lainnya.

Selamat untuk Mulyana dan SMAN 2 Tumijajar! Semoga pengalaman berharga di Parlemen Remaja 2026 ini menjadi pijakan awal yang kokoh untuk terus berkontribusi dalam menyuarakan aspirasi masyarakat, serta membawa kemajuan bagi bangsa, negara, dan daerah asalnya.
`,
  },
  {
    slug: 'tofan-ayul-putra-desa-busua-menuju-nasional-ekowisata-indonesia-2026',
    title: 'Tofan Ayul: Dari Desa Busua Menuju Panggung Nasional Putra Putri Ekowisata Indonesia 2026',
    category: 'Prestasi & Pariwisata',
    date: '2026-10-13',
    author: 'Redaksi Prestamedia',
    dateline: 'HALMAHERA SELATAN, PRESTAMEDIA',
    excerpt: 'Siswa SMA Negeri 1 Halmahera Selatan, Tofan Ayul, membuktikan bahwa pemuda dari desa mampu berprestasi di tingkat nasional dengan mewakili Maluku Utara di ajang Putra Putri Ekowisata Indonesia 2026.',
    cover: 'https://i.ibb.co.com/gZY8HyJ9/Screenshot-2026-10-13-at-14-19-25.png',
    coverCaption: 'Tofan Ayul, Putra Ekowisata Indonesia 2026 perwakilan Provinsi Maluku Utara.',
    text: `
Lahir dan tumbuh besar di Desa Busua, sebuah desa yang menyimpan banyak cerita dan harapan, tidak membuat Tofan Ayul membatasi mimpinya. Siswa yang kini menempuh pendidikan di SMA Negeri 1 Halmahera Selatan ini sukses membuktikan bahwa pemuda dari daerah pun mampu bersinar dan mengukir prestasi di tingkat nasional.

Sebagai anak kebanggaan dari pasangan Bapak Ayul Sehe dan Ibu Ani Arahman, Tofan dikenal sebagai sosok yang tekun dan memiliki semangat tinggi untuk terus belajar. Selama masa pendidikannya di bangku SMA, ia berhasil membuktikan dirinya sebagai siswa yang aktif, adaptif, dan sarat akan prestasi. 

[foto: https://i.ibb.co.com/b508BFXC/Screenshot-2026-10-13-at-14-19-34.png | Penampilan Tofan Ayul saat persiapan menuju ajang nasional di Bali.]

Puncak dari dedikasi serta kerja kerasnya terbayar lunas ketika ia secara resmi dinobatkan sebagai Putra Ekowisata Indonesia 2026 perwakilan Provinsi Maluku Utara. Pencapaian ini menjadi pembuktian bahwa potensi pemuda Halmahera Selatan mampu bersaing di kancah yang lebih luas. 

"Alhamdulillah, selama menempuh pendidikan di SMA saya bisa tumbuh dan berkembang sebagai siswa berprestasi. Sebuah kebanggaan yang luar biasa bisa terpilih mewakili Maluku Utara," ungkap Tofan dengan penuh rasa syukur.

Kini, tanggung jawab yang diemban Tofan semakin besar. Langkahnya tidak berhenti di tingkat provinsi. Ia tengah bersiap untuk melaju ke panggung nasional dalam ajang bergengsi pemilihan Putra Putri Ekowisata Indonesia 2026 yang akan diselenggarakan di Pulau Dewata, Bali. Kompetisi tingkat nasional tersebut dijadwalkan berlangsung pada tanggal 3 hingga 9 Desember 2026 mendatang.

Keberhasilannya menembus panggung nasional bukan hanya menjadi pencapaian gemilang secara pribadi, melainkan juga sebuah persembahan manis yang mengharumkan nama Provinsi Maluku Utara, khususnya Kabupaten Halmahera Selatan dan desa kelahirannya, Desa Busua. 

Melalui ajang Ekowisata Nasional ini, Tofan membawa misi untuk memperkenalkan potensi alam dan budaya daerahnya, sekaligus menjadi inspirasi bagi anak-anak muda lainnya di penjuru Maluku Utara bahwa dari desa mana pun mereka berasal, kesempatan untuk berprestasi selalu terbuka lebar.
`,
  },
  {
    slug: 'm-rafiel-zarin-arifin-bukti-nyata-aksi-pemuda',
    title:
      'M Rafiel Zarin Arifin: Bukti Nyata Aksi Pemuda, dari Edukasi Lingkungan hingga Forum Perdamaian Internasional',
    category: 'Prestasi & Kepemudaan',
    date: '2026-10-11',
    author: 'Redaksi Prestamedia',
    dateline: 'JAKARTA, PRESTAMEDIA',
    excerpt:
      'Masa muda adalah momentum emas untuk membawa perubahan, dan M Rafiel Zarin Arifin membuktikannya lewat advokasi lingkungan, Duta Kampus FEB Trisakti, hingga forum perdamaian internasional.',
    cover: 'https://i.ibb.co.com/PG5Zptr4/1-zarin-1.jpg',
    coverCaption:
      'M Rafiel Zarin Arifin: Runner Up 1 Putera Pendidikan Remaja Jakarta & Honourable Delegate Indonesia Korea Student Peace Summit.',
    text: `
Masa muda adalah momentum emas untuk membawa perubahan, dan M Rafiel Zarin Arifin telah membuktikan hal tersebut melalui rentetan dedikasinya yang mengesankan. Melangkah dengan visi yang tajam di bidang pendidikan, lingkungan, hingga diplomasi, Rafiel terus menorehkan prestasi yang menjadikannya salah satu figur muda paling inspiratif dan patut diperhitungkan saat ini.

Kepeduliannya yang mendalam terhadap kelestarian bumi membawanya sukses meraih posisi Runner Up 1 Putera Pendidikan Remaja Jakarta. Melalui ajang ini, Rafiel tidak sekadar berkompetisi untuk sebuah gelar, melainkan membawa advokasi nyata yang membumi: membangun kesadaran lingkungan lewat kebiasaan pemilahan sampah. Program kerja yang ia gagas ini menargetkan edukasi berkelanjutan mulai dari bangku Sekolah Dasar (SD) hingga Sekolah Menengah Atas (SMA), sebuah inisiatif krusial untuk membentuk karakter generasi peduli ekosistem sejak usia dini.

[foto: https://i.ibb.co.com/JRQ3jMD7/2-zarin-1.jpg | M Rafiel Zarin Arifin dalam dedikasi kepemudaan dan representasi aksi inspiratif pemuda Indonesia.]

Kapasitas kepemimpinan dan kecakapan komunikasi Rafiel juga bersinar terang di lingkungan akademis. Pada tahun 2025, ia dinobatkan sebagai Runner Up 2 Duta Kampus Fakultas Ekonomi dan Bisnis (FEB) Universitas Trisakti. Sebagai wajah representatif mahasiswa FEB, kontribusinya sangat terasa di dalam kampus. Ia kerap dipercaya menjadi motor penggerak dalam berbagai kegiatan mahasiswa, mulai dari memandu jalannya acara sebagai Master of Ceremony (MC) hingga terlibat langsung dalam berbagai perlombaan yang membawa nama baik fakultas.

Eksplorasi Rafiel terus meluas ke ranah kepemudaan daerah. Pada tahun 2026, ia berhasil menyisihkan banyak pesaing tangguh dan terpilih menjadi salah satu dari 90 peserta terbaik yang menyandang gelar Semifinalis Duta Pemuda dan Olahraga Jakarta. Capaian ini semakin mempertegas ketangguhannya dalam bursa pemuda-pemudi paling berprestasi di ibu kota.

Tidak hanya berjaya di kancah nasional, rekam jejak Rafiel telah menembus panggung global. Ia dianugerahi predikat Honourable Delegate dalam ajang bergengsi Indonesia Korea Student Peace Summit 2025 yang diselenggarakan oleh Studec International. Bertempat di Universitas Indonesia, program ini mempertemukan 80 pemimpin muda pilihan dari berbagai negara Asia. Di forum internasional tersebut, Rafiel bertukar gagasan strategis melalui Focus Group Discussion (FGD), konferensi pemuda, hingga merancang program inovasi kepemudaan yang berdampak luas.

Perjalanan M Rafiel Zarin Arifin adalah potret ideal seorang changemaker masa kini. Dari aksi turun tangan mengedukasi siswa sekolah tentang sampah hingga duduk berdiskusi merancang perdamaian bersama pemimpin muda Asia, langkah Rafiel bagi pembaca Prestamedia menjadi pengingat nyata bahwa anak muda Indonesia memiliki kapasitas tak terbatas untuk memimpin sebuah perubahan.
`,
  },
  {
    slug: 'asbar-buhari-pemuda-pinggiran-halmahera-ukir-prestasi',
    title: 'Asbar Buhari: Pemuda Pinggiran Halmahera yang Mengukir Prestasi Lewat Karya Tulis dan Gelar Duta',
    category: 'Tokoh & Inspirasi',
    date: '2026-10-12',
    author: 'Redaksi Prestamedia',
    dateline: 'HALMAHERA SELATAN, PRESTAMEDIA',
    excerpt: 'Berasal dari pinggiran kota di Halmahera Selatan, Asbar Buhari membuktikan bahwa keterbatasan bukanlah halangan. Berbekal doa orang tua, ia sukses meraih berbagai gelar duta hingga menerbitkan buku.',
    cover: 'https://i.ibb.co.com/j9xCjvMX/Buhari1.jpg',
    coverCaption: 'Asbar Buhari saat menerima piala dan penghargaan di atas panggung.',
    text: `
Lahir dan tumbuh sebagai anak muda dari pinggiran kota di Halmahera Selatan, Maluku Utara, tidak membuat langkah Asbar Buhari terhenti[cite: 5]. Ia justru membuktikan bahwa latar belakang bukanlah penentu batas kemampuan seseorang[cite: 5]. Baginya, terlahir di pinggiran bukan berarti selamanya terpojokkan, karena setiap orang memiliki kelebihan dan kekurangan masing-masing yang hanya perlu terus diasah[cite: 5].

Prinsip teguh itu tergambar jelas dalam moto hidup yang ia pegang: "Maju Dalam Berkarya, Mundur Tanpa Bertindak"[cite: 5]. Moto ini memiliki makna mendalam bagi Asbar; ia memilih untuk terus maju menggenggam prestasi ke dalam lebih jauh, daripada mundur ke belakang tanpa melakukan tindakan apa pun[cite: 5]. Namun, ia menyadari bahwa semua pencapaiannya bukanlah semata-mata karena kehebatannya sendiri[cite: 5]. "Semua ini bukan saya yang hebat, tetapi juga doa orang tua yang begitu hebat," ungkapnya dengan penuh rasa syukur[cite: 5].

Keberaniannya untuk maju telah membuahkan deretan prestasi membanggakan, khususnya di berbagai ajang pemilihan duta[cite: 5]. Asbar tercatat memperluas pengaruhnya sebagai Duta Inspirasi perwakilan Provinsi Maluku Utara dan Duta Desa Indonesia perwakilan Provinsi Maluku Utara[cite: 5]. Di lingkungan akademisnya, ia berhasil meraih gelar Duta Kampus Universitas Khairun (Unkhair) Ternate serta dinobatkan sebagai Liaison Officer (LO) Terfavorit PMM 3 Unkhair[cite: 5]. Jangkauan prestasinya bahkan melintasi pulau, dibuktikan dengan perannya sebagai Duta Kritis dan Inovatif Komunitas Titan Arun di Provinsi Jambi[cite: 5].

[foto: https://i.ibb.co.com/JFzgb5mQ/Buhari2.jpg | Asbar Buhari dengan deretan selempang penghargaan, piala, dan sertifikat yang menjadi bukti perjuangannya.]

Tidak hanya piawai dalam berorganisasi dan mempresentasikan diri sebagai duta, Asbar juga memiliki ketertarikan mendalam pada dunia literasi[cite: 5]. Ia aktif dalam dunia penulisan dan telah melahirkan sebuah karya buku pribadi yang berjudul "Titik Tinta, Tanpa Restu Aku Berpaling"[cite: 5].

Bagi Asbar, rentetan prestasi yang ia raih saat ini adalah sebuah proses panjang[cite: 5]. Ia menegaskan bahwa dari semua pencapaian ini, selempang yang ia kenakan bukanlah sekadar kain penghias, melainkan sebuah simbol perjuangan nyata[cite: 5]. Asbar terus melangkah maju bukan karena ingin mendapatkan semuanya, melainkan untuk membuktikan bahwa ketekunan, restu orang tua, dan tindakan nyata tidak akan pernah mengkhianati hasil[cite: 5].
`,
  },
  {
    slug: 'keysa-dari-cosplay-dan-puncak-gunung-menuju-puteri-bali-persahabatan-2025',
    title: 'Cerita Keysa: Dari Hobi Cosplay dan Menaklukkan Puncak Gunung Menuju Gelar Puteri Bali Persahabatan 2025',
    category: 'Tokoh & Inspirasi',
    date: '2026-10-12',
    author: 'Redaksi Prestamedia',
    dateline: 'DENPASAR, PRESTAMEDIA',
    excerpt: 'Berawal dari mendaftar diam-diam, Putu Ayu Suarni (Keysa) berhasil membuktikan keberaniannya dengan meraih gelar Puteri Bali Persahabatan 2025. Ia menggabungkan pesona dunia modeling dengan ketangguhan seorang pendaki.',
    cover: 'https://i.ibb.co.com/99P9yJsn/Suarni.png',
    coverCaption: 'Putu Ayu Suarni (Keysa) dengan deretan piala dan penghargaan yang diraihnya.',
    text: `
Nama lengkapnya Putu Ayu Suarni (18), siswi yang menyelesaikan studinya di SMK Kesehatan Bali Medika Denpasar dan kini melangkah ke ITEKES BALI. Namun, di berbagai kesempatan, hampir semua orang lebih akrab memanggilnya Keysa—sebuah nama yang lahir dari hobi *cosplay* yang sempat digelutinya, dan kini justru melekat erat menjadi bagian dari identitas dirinya.

"Lebih nyaman dipanggil Keysa, bahkan saat memperkenalkan diri, saya sebut nama Keysa," ujarnya sambil tersenyum kecil. Senyuman penuh percaya diri itu pulalah yang ia bawa hingga memukau panggung Putera Puteri Bali 2025.

Gadis kelahiran Denpasar, 8 Mei 2007 ini tumbuh dalam keluarga yang menjunjung tinggi kedisiplinan. Kedua orang tuanya, Ni Wayan Eka Wati dan I Nyoman Weda, selalu menanamkan rasa tanggung jawab sejak dini. Tumbuh di lingkungan yang dekat dengan bidang kesehatan membuat Keysa mantap memilih jalur pendidikan keperawatan. Ke depannya, ia berencana menuntaskan gelar sarjana keperawatan, dan menyimpan mimpi besar untuk menimba ilmu hingga ke Jepang.

Meski lekat dengan ilmu kesehatan, dunia Keysa nyatanya jauh lebih luas dari sekadar ruang kelas atau laboratorium praktik. Sejak SMP, ia sudah akrab dengan panggung *modeling*. Lewat dunia inilah ia banyak belajar tentang pembentukan karakter, membangun kepercayaan diri, dan cara merepresentasikan diri dengan elegan di hadapan publik. 

[foto: https://i.ibb.co.com/rR9LB0dw/SSuarni.png | Keysa berpose anggun saat dinobatkan meraih gelar Puteri Bali Persahabatan 2025.]

Di luar itu, Keysa adalah remaja dengan minat yang sangat beragam. Selain *modeling*, ia juga gemar menari (*dance*), *cosplay*, hingga mendaki gunung. Hobi mendaki ini mulai ia tekuni sejak duduk di bangku SMK. Ketangguhannya tak bisa diremehkan; hingga kini, sepuluh puncak gunung di Bali sudah berhasil ia taklukkan. 

"Saya suka mendaki karena bisa merasakan ketenangan sekaligus tantangan," ungkapnya. Dari hobinya menaklukkan puncak demi puncak, ia belajar filosofi hidup yang berharga: bahwa perjalanan menuju puncak membutuhkan kesabaran, langkah yang terukur, dan pantang menyerah di tengah jalan.

Di balik kehidupannya yang terstruktur, Keysa rupanya memiliki sisi spontan yang berani. Salah satunya adalah keputusannya mengikuti ajang Putera Puteri Bali 2025 secara diam-diam. Semua bermula dari ketidaksengajaan seorang guru yang melihat video perkenalan program kerja yang ia buat. Sang guru pun langsung mendorong Keysa untuk maju mewakili sekolah.

"Banyak yang kaget, biasanya saya orang yang terbuka. Tapi kali ini, sengaja diam-diam," ceritanya sambil tertawa. Keputusannya ini sempat memunculkan keraguan dari orang tuanya yang khawatir fokus belajarnya di kelas 12 saat itu akan terganggu. Namun, tekad Keysa sudah bulat. Ia merasa ada dorongan kuat untuk mencoba tantangan baru tersebut.

Ajang Putera Puteri Bali sendiri merupakan program bergengsi di bawah naungan NGID Organization, sebuah wadah pengembangan yang bertujuan melahirkan duta remaja cerdas, berani, berwawasan, dan berkarakter. Di ajang ini, peserta tidak hanya dinilai dari penampilan fisik, melainkan dari pengetahuan umum, wawasan budaya, hingga kemampuan komunikasi (*public speaking*) untuk mempromosikan pariwisata daerah.

Bagi Keysa, ajang ini adalah ruang eksplorasi yang luar biasa. Ia tidak hanya sekadar tampil, tetapi juga menyelami makna sejati dari peran seorang remaja, memperluas relasi, serta menemukan arti kepercayaan diri yang sesungguhnya. Prestasi ini juga menjadi lompatan bersejarah, karena ini adalah kali pertama ia mewakili sekolahnya dalam sebuah ajang kompetisi besar.

Keberaniannya berbuah manis. Pada malam *grand final* yang digelar Sabtu, 18 Oktober 2025 di Colony Plaza Renon, Keysa tak berharap banyak selain menikmati prosesnya. Namun, ketika namanya dipanggil sebagai peraih gelar Puteri Bali Persahabatan, ia tak mampu menahan air mata harunya. 

"Terharu banget waktu itu. Sama sekali nggak nyangka bisa sampai di tahap ini," ucapnya lirih. Baginya, kemenangan ini bukan sekadar tentang selempang kebanggaan, melainkan pembuktian atas keberaniannya mengambil risiko dan bertanggung jawab atas pilihan sendiri.

Kini, setelah gegap gempita ajang tersebut usai, Keysa kembali pada rutinitasnya sebagai pelajar. Ia tetap fokus menata masa depan akademiknya, sesekali menikmati *dance* atau *cosplay*, dan tentu saja, bersiap merencanakan pendakian ke gunung-gunung lain yang menunggu untuk ditaklukkan. 

"Saya ingin tetap jadi diri sendiri. Biar semua jalan beriringan, mulai dari belajar, modeling, maupun kegiatan lainnya," tegasnya.

Saat ditanya mengenai kehidupan pribadinya, khususnya urusan asmara, Keysa menutup obrolan dengan tawa yang lepas. "Saya belum punya pacar," ucapnya jujur. Lalu dengan nada bercanda ia menambahkan, "Tapi saya suka cowok berkacamata." Sebuah kalimat penutup yang manis, mengingatkan kita bahwa di balik ambisi, prestasi, dan kedisiplinannya, Keysa tetaplah seorang remaja yang tahu bagaimana cara menikmati masa mudanya dengan bahagia.
`,
  },
  {
    slug: 'sarah-faizah-inspirasi-muda-binawan-dengan-segudang-prestasi',
    title: 'Sarah Faizah: Inspirasi Muda dari Universitas Binawan dengan Segudang Prestasi',
    category: 'Tokoh & Inspirasi',
    date: '2026-10-12',
    author: 'Redaksi Prestamedia',
    dateline: 'JAKARTA, PRESTAMEDIA',
    excerpt: 'Mahasiswi Universitas Binawan, Sarah Faizah, membuktikan bahwa usia muda bukanlah halangan untuk berkarya dan berprestasi di berbagai bidang, mulai dari modeling, kepenulisan, hingga advokasi kepemudaan.',
    cover: 'https://i.ibb.co.com/fdpYtMzS/image.png',
    coverCaption: 'Sarah Faizah dengan berbagai selempang penghargaan dan sertifikat prestasinya.',
    text: `
Sarah Faizah, seorang mahasiswi penuh talenta dari Universitas Binawan, terus mengukir prestasi gemilang yang menginspirasi generasi muda. Perjalanannya membuktikan dedikasi yang tak kenal lelah dalam berbagai bidang, mulai dari dunia *modeling*, kepenulisan sastra, hingga perannya sebagai penggerak di komunitas kepemudaan dan pendidikan.

Langkah Sarah di dunia *modeling* dan *pageant* tak bisa dipandang sebelah mata. Ia telah menorehkan namanya sebagai Finalis Duta Hijab Independen (2021) dan Icon Hijab Modelling Bekasi (2021). Prestasinya terus melesat dengan meraih Juara 1 "Best Fashion" di ajang Model Muslimah Indonesia (2021) dan Juara 3 "Best Style" oleh One Face Model Indonesia pada tahun yang sama. Kiprahnya berlanjut sebagai Finalis Icon Top Model Indonesia (2023), Ladies Hijab Ramadhan (2023), Miss Beauty Fashion (2023), hingga menjadi Finalis Adult Icon Modelling Fashion dan model search Bekasi Cycle 14 pada 2024. 

[foto: https://i.ibb.co.com/Ng6VxjJz/Screenshot-2026-10-13-at-13-09-22.png | Sarah Faizah saat penganugerahan The V Modelling Jakarta Batch 4.]

Kecintaannya pada dunia *fashion* juga membawanya tampil di berbagai panggung *runway* bergengsi, termasuk Fashion Crafty Banten, Depok Fashion Festival, Jakarta Fashion Runway 2025, hingga panggung Nusantara Heritage dan Renny by Unique yang diselenggarakan oleh Eka Hospital. Ia juga aktif sebagai model katalog dan *makeup* untuk berbagai agensi ternama. Dedikasinya di dunia *modeling* semakin diakui dengan penganugerahan gelar Student Favorite The V Modelling Jakarta Batch 4-2025.

Selain bersinar di atas *catwalk*, Sarah juga memiliki ketajaman pena yang luar biasa. Ia adalah penulis produktif yang telah berkontribusi dalam berbagai buku antologi nasional. Karya-karyanya dapat ditemukan dalam buku "Jerat Memori" (2022), "Pandemic Story" (2022), "Coretan Tinta Kalbu" (2023), dan buku antologi Lomba Cipta Puisi Nasional (2023). Tak hanya berpartisipasi, ia dinobatkan sebagai Penulis Terbaik dalam buku "Find It" (2021) dan masuk dalam jajaran 500 Peserta Terbaik cipta puisi tingkat nasional (2023).

Jiwa kepemimpinan dan kepedulian sosial Sarah terwujud nyata dalam kiprahnya di bidang pendidikan dan kepemudaan. Ia mengemban amanah sebagai Puteri Pendidikan DKI Jakarta 2023 dan Duta Pendidikan Indonesia 2023. Perannya tak berhenti di situ; ia menjadi Founder "Generasi Muda Bergerak" (2024), Wakil Ketua Duta Kepemudaan Jakarta Batch 2 (2024), dan Duta Kepemudaan Indonesia Batch 2-2024. Saat ini, ia juga aktif sebagai Ketua Alumni dan Bendahara Putera Puteri Pendidikan DKI Jakarta, serta dipercaya menjadi juri dalam berbagai tahapan seleksi pemilihan tersebut untuk tahun 2026.

Kemampuannya berbicara di depan publik ( *public speaking*) menjadikannya sosok yang sering diundang sebagai pembicara dan moderator dalam berbagai forum pemuda inspiratif. Tema-tema yang ia bawakan sangat relevan dengan tantangan generasi saat ini, mulai dari mencintai diri sendiri, bahaya patriarki, pencegahan pelecehan seksual, gaya hidup sehat, hingga membedah peran komunitas bagi Gen-Z. 

Dengan terpilihnya ia sebagai salah satu mahasiswa terbaik untuk magang di RSPG Cisarua Bogor, serta langkahnya sebagai Finalis Duta Potensi Pemuda Indonesia Tahap 1 – 2025, Sarah Faizah membuktikan bahwa keseimbangan antara akademik, minat, dan kontribusi sosial adalah kunci untuk menjadi generasi penerus bangsa yang cemerlang.
`,
  },
    {
    slug: 'charlos-imanuel-titiahy-wakili-maluku-utara-duta-pariwisata-nasional',
    title: 'Charlos Imanuel Titiahy Siap Wakili Maluku Utara di Pemilihan Duta Pariwisata Nasional di Bali',
    category: 'Prestasi & Pariwisata',
    date: '2026-10-12',
    author: 'Redaksi Prestamedia',
    dateline: 'DENPASAR, PRESTAMEDIA',
    excerpt: 'Pelajar SMA Negeri 1 Halmahera Barat ini akan membawa nama Maluku Utara ke Pemilihan Duta Pariwisata Nasional di Bali, 4–8 November 2026, dengan bekal deretan prestasi dan pengalaman kepemimpinan.',
    cover: 'https://i.ibb.co.com/WWmrXVWj/image.png',
    coverCaption: 'Charlos Imanuel Titiahy, pelajar asal Halmahera Barat, Maluku Utara.',
    text: `
Charlos Imanuel Titiahy, pelajar SMA Negeri 1 Halmahera Barat asal Halmahera Barat, Provinsi Maluku Utara, akan mewakili Maluku Utara dalam Pemilihan Duta Pariwisata tingkat Nasional yang akan digelar di Bali pada 4–8 November 2026.

Kesempatan ini menjadi salah satu pencapaian penting dalam perjalanan Charlos di bidang kepemudaan, kegiatan duta, kepemimpinan, dan pengembangan potensi daerah. Sebelumnya, ia telah aktif mengikuti berbagai kompetisi dan kegiatan di tingkat kabupaten, provinsi, hingga nasional.

[foto: https://i.ibb.co.com/TMSXfKhX/image.png | Charlos Imanuel Titiahy dengan selempang Duta Pariwisata Maluku Utara.]

Di bidang kepemudaan, Charlos meraih Juara 2 Putra Duta Generasi Berencana (GenRe) tingkat Provinsi Maluku Utara pada 2025. Pada 2026, ia kembali menorehkan hasil dengan menjadi Juara 1 pemilihan FORPIS tingkat Provinsi Maluku Utara.

Di lingkungan Palang Merah Remaja (PMR), Charlos tercatat sebagai Juara 1 Temu Bhakti PMR tingkat Provinsi Maluku Utara pada 2026. Pada 2023, ia bersama tim PMR meraih Juara 3 Jumbara Nasional ke-IX, dan masuk lima besar (Top 5) lomba jurnalistik remaja tingkat nasional pada Jumbara PMR yang sama.

Prestasinya juga mencakup bidang akademik dan kreatif. Charlos menjadi Juara 1 lomba cerdas cermat tingkat SMP se-Kabupaten Halmahera Barat pada 2024, Juara 2 Lomba Cerdas Cermat (LCC) tingkat SD se-Kabupaten Halmahera Barat pada 2021, Juara 1 videografi tingkat SMA se-Provinsi Maluku Utara pada 2026, serta Juara 3 lomba pidato AHY Muda tingkat SMA se-Kabupaten Halmahera Barat pada 2026. Masih banyak prestasi lain yang melengkapi rekam jejaknya.

Selain berkompetisi, Charlos berpengalaman memimpin sebagai Ketua OSIS, Ketua PMR, Ketua Pusat Informasi dan Konseling Remaja (PIK-R), serta Koordinator FORPIS Provinsi Maluku Utara. Pengalaman tersebut menjadi bekal dalam membangun kemampuan komunikasi, kepemimpinan, kerja sama, dan keberanian untuk membawa nama daerah.

Rangkaian pencapaian itu menjadi bagian dari proses yang mengantarkan Charlos hingga dipercaya membawa nama Maluku Utara ke tingkat nasional. Melalui Pemilihan Duta Pariwisata Nasional di Bali pada 4–8 November 2026, ia tidak hanya hadir sebagai peserta, tetapi juga membawa identitas dan potensi Maluku Utara untuk diperkenalkan di panggung nasional.

Prestamedia mengucapkan semoga sukses untuk Charlos Imanuel Titiahy dalam membawa nama Maluku Utara di Bali.
`,
  },
    {
    slug: 'andi-aluna-mikaila-smpn-06-makassar-prestasi-bahasa-inggris-mun',
    title: 'Andi Aluna Mikaila, Pelajar SMPN 06 Makassar Berprestasi dari Lomba Bahasa Inggris hingga International MUN',
    category: 'Prestasi & Pendidikan',
    date: '2026-10-12',
    author: 'Redaksi Prestamedia',
    dateline: 'MAKASSAR, PRESTAMEDIA',
    excerpt: 'Di usia 13 tahun, pelajar SMPN 06 Makassar ini meraih medali perunggu lomba bahasa Inggris tingkat provinsi, honorable mention di International MUN, dan menjadi ambassador-nya.',
    cover: 'https://i.ibb.co.com/B586DQR7/image.png',
    coverCaption: 'Andi Aluna Mikaila, pelajar SMPN 06 Makassar.',
    text: `
Di usia yang baru 13 tahun, Andi Aluna Mikaila, pelajar SMPN 06 Makassar, sudah mengoleksi deretan prestasi di bidang bahasa Inggris, simulasi sidang Perserikatan Bangsa-Bangsa (Model United Nations/MUN), hingga seni suara.

Capaian itu antara lain medali perunggu pada lomba bahasa Inggris tingkat provinsi. Prestasi tersebut diabadikan dalam momen bersalaman dengan kepala sekolah.

[foto: https://i.ibb.co.com/YB21rN3x/image.png | Andi Aluna Mikaila]

Kemampuan berbahasa Inggrisnya juga terasah lewat story telling. Aluna kerap menjuarai lomba story telling bahasa Inggris, dengan raihan juara 1, 2, dan 3 di tingkat sekolah maupun provinsi. Di luar bahasa, ia juga sering mengikuti lomba vocal solo.


Panggung yang lebih besar ia jajal lewat International Model United Nations (MUN), ajang bertaraf internasional yang ia ikuti di Denpasar dan Yogyakarta. Di sana, Aluna meraih honorable mention dan menjadi ambassador International MUN.

Menariknya, seluruh perlombaan tersebut diikuti secara mandiri, bukan sebagai perwakilan sekolah, dan ketika usianya baru 13 tahun. Perjalanan ini menunjukkan bahwa inisiatif dan keberanian mencoba hal baru dapat membuka jalan menuju panggung yang jauh lebih luas.

Prestamedia mengucapkan selamat kepada Andi Aluna Mikaila atas deretan prestasinya dan berharap semangatnya menginspirasi pelajar lain untuk berani mencoba dan terus berkembang.
`,
  },
    {
    slug: 'ilham-dharma-putra-duta-pariwisata-kalbar-2026',
    title: 'Ilham Dharma Putra Siap Bawa Kalimantan Barat ke Ajang Duta Pariwisata Indonesia 2026 di Bali',
    category: 'Prestasi & Pariwisata',
    date: '2026-10-12',
    author: 'Redaksi Prestamedia',
    dateline: 'DENPASAR, PRESTAMEDIA',
    excerpt: 'Terpilih sebagai Duta Pariwisata Kalimantan Barat 2026 pada Juli lalu, Ilham Dharma Putra kini bersiap menuju ajang Duta Pariwisata Indonesia 2026 di Bali, 4–7 November.',
    cover: 'https://i.ibb.co.com/8DHpPdjs/image.png',
    coverCaption: 'Ilham Dharma Putra, Duta Pariwisata Kalimantan Barat 2026.',
    text: `
Duta Pariwisata Kalimantan Barat 2026, Ilham Dharma Putra, kini memasuki tahap persiapan menuju ajang Duta Pariwisata Indonesia 2026 yang akan digelar di Bali pada 4–7 November 2026. Di panggung nasional tersebut, ia akan membawa nama Kalimantan Barat.

Ilham terpilih sebagai Duta Pariwisata Kalimantan Barat pada Juli 2026. Gelar duta pariwisata membawa tanggung jawab untuk memperkenalkan potensi daerah dan mengajak masyarakat ikut menjaga serta mengembangkannya.

Sejak terpilih, Ilham aktif berkolaborasi, mengedukasi, dan menginformasikan hal-hal seputar pariwisata kepada masyarakat Kalimantan Barat, terutama generasi muda. Edukasi dan kolaborasi menjadi jalan untuk mendekatkan dunia pariwisata dengan anak muda di daerahnya.

[foto: https://i.ibb.co.com/p6XmpYyW/image.png | Ilham Dharma Putra bersama para peserta dalam salah satu kegiatannya.]

Fokus pada generasi muda bukan tanpa alasan. Anak muda adalah kelompok yang paling dekat dengan ruang digital, tempat informasi tentang destinasi dan budaya kini banyak dibagikan, sehingga mereka berpotensi menjadi pelaku sekaligus penyampai cerita pariwisata daerahnya. Kalimantan Barat sendiri memiliki keragaman budaya dan alam yang layak dikenal lebih luas.

Menjelang ajang nasional, persiapan terus dimatangkan. Bali sebagai tuan rumah dikenal sebagai salah satu destinasi wisata paling terkenal di Indonesia, sehingga panggung Duta Pariwisata Indonesia 2026 menjadi kesempatan bagi Ilham untuk memperkenalkan Kalimantan Barat kepada khalayak yang lebih luas.

Ilham juga tidak datang dengan tangan kosong. Ke depan, ia akan menggagas program aksi nyata yang saat ini tengah dirancang bersama timnya untuk dibawa ke tingkat nasional pada November mendatang. Program tersebut menjadi bekal yang akan ia bawa ke Bali.

Perjalanan Ilham, dari terpilih pada Juli hingga bersiap menuju panggung nasional pada November, menunjukkan bahwa peran seorang duta tidak berhenti di atas panggung dan selempang, melainkan berlanjut lewat aksi nyata di tengah masyarakat. Prestamedia mengucapkan semoga sukses untuk Ilham Dharma Putra dalam mengharumkan nama Kalimantan Barat di Bali.
`,
  },
  {
    slug: 'sukkun-siregar-3rd-runner-up-duta-genre-bali-2026',
    title: 'Konsisten Melangkah, Sukkun Siregar Raih 3rd Runner Up Duta Genre Bali 2026',
    category: 'Prestasi',
    date: '2026-10-10',
    author: 'Redaksi Prestamedia',
    dateline: 'DENPASAR, PRESTAMEDIA',
    excerpt:
      'Dari tingkat kampus, kabupaten, hingga provinsi, Sukkun Siregar membuktikan bahwa konsistensi membuahkan hasil di ajang Duta Generasi Berencana (Genre).',
    cover: 'https://i.ibb.co.com/C3DtJbhs/image.png',
    coverCaption: 'Sukkun Siregar bersama para pemenang pada malam final Duta Genre Bali 2026.',
    body: [
      'Dedikasi dan konsistensi menjadi dua kata yang paling tepat untuk menggambarkan perjalanan Sukkun Siregar di ajang pemilihan Duta Generasi Berencana (Genre). Dalam dua tahun terakhir, ia mencetak prestasi berjenjang, mulai dari tingkat kampus dan kabupaten hingga panggung Provinsi Bali.',
      'Perjalanan itu dimulai pada 2025, ketika Sukkun meraih predikat 1st Runner Up (RU) Duta Genre Universitas Pendidikan Ganesha (Undiksha). Capaian di tingkat universitas tersebut menjadi batu loncatan untuk melangkah lebih jauh. Berbekal advokasi yang kuat dan wawasan luas tentang isu kenakalan remaja, pernikahan dini, serta perencanaan masa depan, ia terus mengasah kemampuannya untuk bersaing di arena yang lebih besar.',
      'Memasuki 2026, Sukkun kembali tampil memukau di tingkat Kabupaten Buleleng. Dalam balutan busana adat Bali bernuansa magenta keunguan dengan aksen emas, lengkap dengan udeng dan keris, ia meraih 1st RU Duta Genre Buleleng 2026 dan mengukuhkan perannya sebagai teladan bagi remaja di Bali utara.',
      'Langkahnya tidak berhenti di sana. Sukkun melaju ke panggung Duta Genre Provinsi Bali 2026, yang menuntut persiapan jauh lebih matang karena ia harus bersaing dengan putra-putri terbaik dari seluruh penjuru Bali. Kerja kerasnya berbuah manis pada malam final, ketika ia resmi dinobatkan sebagai 3rd RU Duta Genre Bali 2026.',
      'Perjalanan dari Undiksha, Buleleng, hingga Provinsi Bali menjadi bukti bahwa hasil tidak akan mengkhianati usaha. Bagi pembaca Prestamedia, rekam jejak Sukkun mengajarkan bahwa prestasi bukan pencapaian instan, melainkan buah dari proses panjang yang dirawat dengan konsistensi dan keberanian untuk terus menembus batas.',
      'Selamat untuk Sukkun Siregar. Langkahmu menginspirasi generasi berencana masa depan!',
    ],
    photos: [
      {
        file: 'https://i.ibb.co.com/JR8TnrXK/image.png',
        caption:
          'Sukkun Siregar dalam busana adat Bali dengan selempang "Runner Up 1 Duta Genre Buleleng Putra".',
        after: 2,
      },
    ],
  },
];

// Mengubah `text` menjadi paragraf + foto secara otomatis
const FOTO = /^\[foto:\s*(.+?)\s*\|\s*([\s\S]*?)\s*\]$/i;

const normalize = (e: NewsEntry): NewsItem => {
  const body: string[] = [...(e.body ?? [])];
  const photos: NewsPhoto[] = [...(e.photos ?? [])];

  if (e.text) {
    e.text
      .split(/\n\s*\n/)
      .map((blok) => blok.replace(/\s*\n\s*/g, ' ').trim())
      .filter(Boolean)
      .forEach((blok) => {
        const m = blok.match(FOTO);
        if (m) {
          photos.push({ file: m[1], caption: m[2], after: Math.max(body.length - 1, 0) });
        } else {
          body.push(blok);
        }
      });
  }

  return {
    slug: e.slug,
    title: e.title,
    category: e.category,
    date: e.date,
    author: e.author,
    dateline: e.dateline,
    excerpt: e.excerpt,
    cover: e.cover,
    coverCaption: e.coverCaption,
    body,
    photos,
  };
};

export const PRESTAMEDIA_NEWS: NewsItem[] = NEWS.map(normalize).sort((a, b) =>
  b.date.localeCompare(a.date)
);

// URL slug ramah yang rapi, pendek, dan mudah dibaca (misal: sukkunsiregar)
export const getFriendlySlug = (item: NewsItem): string => {
  const s = item.slug.toLowerCase();
  if (s.includes('sukkun')) return 'sukkunsiregar';
  if (s.includes('zarin')) return 'rafielzarin';
  if (s.includes('buhari')) return 'asbarbuhari';
  if (s.includes('keysa') || s.includes('suarni')) return 'keysasuarni';
  if (s.includes('sarah')) return 'sarahfaizah';
  if (s.includes('charlos') || s.includes('titiahy')) return 'charlostitiahy';
  if (s.includes('aluna') || s.includes('rahma')) return 'andialuna';
  if (s.includes('ilham')) return 'ilhamdharmaputra';
  return s;
};

// Helper untuk mencocokkan artikel dari URL (mendukung friendly slug 'sukkunsiregar', format pendek, maupun slug panjang)
export const findNewsBySlug = (slugOrAlias: string): NewsItem | undefined => {
  if (!slugOrAlias) return undefined;
  const clean = slugOrAlias.trim().toLowerCase().replace(/\/+$/, '').replace(/^\/+/, '');
  const cleanNoDash = clean.replace(/[^a-z0-9]/g, '');

  return PRESTAMEDIA_NEWS.find((item) => {
    const itemSlug = item.slug.toLowerCase();
    const itemNoDash = itemSlug.replace(/[^a-z0-9]/g, '');
    const friendly = getFriendlySlug(item).toLowerCase();

    // 1. Cocok persis dengan slug asli atau friendly slug
    if (itemSlug === clean || friendly === clean) return true;

    // 2. Cocok tanpa tanda strip (misal 'sukkunsiregar' cocok dengan friendly atau bagian itemNoDash)
    if (cleanNoDash === friendly) return true;
    if (itemNoDash.includes(cleanNoDash) && cleanNoDash.length >= 5) return true;
    if (cleanNoDash.includes(itemNoDash)) return true;

    // 3. Keyword spesifik
    if (cleanNoDash.includes('sukkun') && itemSlug.includes('sukkun')) return true;
    if (cleanNoDash.includes('zarin') && itemSlug.includes('zarin')) return true;
    if (cleanNoDash.includes('buhari') && itemSlug.includes('buhari')) return true;
    if (cleanNoDash.includes('keysa') && itemSlug.includes('keysa')) return true;
    if (cleanNoDash.includes('sarah') && itemSlug.includes('sarah')) return true;
    if (cleanNoDash.includes('charlos') && itemSlug.includes('charlos')) return true;
    if (cleanNoDash.includes('aluna') && itemSlug.includes('aluna')) return true;
    if (cleanNoDash.includes('ilham') && itemSlug.includes('ilham')) return true;

    return false;
  });
};