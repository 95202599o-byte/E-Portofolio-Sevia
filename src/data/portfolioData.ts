import {
  IdentityInfo,
  ModulAnalysisPoint,
  MateriItem,
  MediaItem,
  VideoObservationPoint,
  NonTeachingActivity,
  AssessmentItem,
  ReflectionQuestion,
  RoadmapItem,
  ArtifactCardItem,
} from '../types/portfolio';

export const identityData: IdentityInfo = {
  nama: 'Sevia Nazahra',
  nim: '95202599O',
  program: 'PPG Pendidikan Matematika',
  lptk: 'Universitas Kristen Satya Wacana (UKSW)',
  tahun: '2026',
  sekolahPpl: 'SMA Negeri 3 Salatiga',
  prodi: 'Pendidikan Matematika',
  konteks: 'Praktik Mengajar Mandiri',
  asalKota: 'Sukoharjo',
  email: 'sevianazahra07@gmail.com',
  instagram: '@sevianzhr_',
  kontakLainnya: 'WA:08989878768',
};

export const modulAnalysisPoints: ModulAnalysisPoint[] = [
  {
    id: 1,
    label: 'Tujuan Pembelajaran',
    ringkasan: 'Perumusan berbasis Capaian Pembelajaran (CP) Fase E dengan taksonomi bermakna.',
    deskripsi:
      'Tujuan pembelajaran dirumuskan secara terukur untuk membimbing peserta didik memahami konsep dasar, menganalisis hubungan matematis, dan menerapkan konsep dalam pemecahan masalah kontekstual.',
    refleksiPedagogis:
      'Tujuan pembelajaran tidak sekadar menuntut hafalan rumus mekanistis, melainkan menuntut pemahaman konseptual dan penalaran matematis. Ketercapaian dipantau secara bertahap melalui indikator performa per aktivitas.',
  },
  {
    id: 2,
    label: 'Karakteristik Peserta Didik',
    ringkasan: 'Pemetaan gaya belajar audio-visual-kinestetik dan heterogenitas kemampuan matematika di kelas SMA Negeri 3 Salatiga.',
    deskripsi:
      'Siswa kelas X/XI memiliki latar belakang pemahaman prasyarat aljabar yang beragam. Sebagian besar siswa lebih cepat memahami apabila konsep abstrak divisualisasikan melalui grafik atau konteks riil.',
    refleksiPedagogis:
      'Mengenali karakteristik peserta didik sebelum merancang modul menghindarkan asumsi guru bahwa "semua siswa berada di titik awal yang sama". Hal ini mendorong penyusunan scaffolding yang ramah dan terarah.',
  },
  {
    id: 3,
    label: 'Kebutuhan Belajar',
    ringkasan: 'Penerapan diferensiasi proses dan bantuan berjenjang (graduated prompts).',
    deskripsi:
      'Peserta didik dikelompokkan secara heterogen namun mendapatkan dukungan berbeda: siswa yang cepat diberikan soal pengayaan bernalar kritis, sedangkan siswa yang butuh bantuan memperoleh panduan bertahap.',
    refleksiPedagogis:
      'Diferensiasi proses terbukti menjaga keterlibatan (engagement) seluruh siswa tanpa ada yang merasa tertinggal atau merasa bosan karena materi terlalu mudah.',
  },
  {
    id: 4,
    label: 'Pemilihan Model & Metode',
    ringkasan: 'Model Problem-Based Learning (PBL) dan Penemuan Terbimbing (Guided Discovery).',
    deskripsi:
      'Model PBL dipilih agar pembelajaran berpusat pada siswa (student-centered), diawali dengan orientasi masalah otentik kemudian dilanjutkan penyelidikan kelompok mandiri.',
    refleksiPedagogis:
      'Guru bertindak sebagai fasilitator yang mengarahkan pertanyaan pemantik, bukan pemberi rumus instan. Sintaks PBL melatih kemandirian dan kolaborasi peserta didik.',
  },
  {
    id: 5,
    label: 'Materi Pembelajaran',
    ringkasan: 'Struktur materi berurutan dari prasyarat, konsep inti, hingga representasi aplikasi.',
    deskripsi:
      'Materi disusun hierarkis: menghubungkan pengetahuan dasar operasi aljabar dengan sifat eksponen atau fungsi, disajikan secara kontekstual melalui fenomena pertumbuhan dan peluruhan.',
    refleksiPedagogis:
      'Pemberian apersepsi yang kuat terhadap materi prasyarat sangat menentukan kelancaran siswa saat masuk ke materi yang lebih abstrak.',
  },
  {
    id: 6,
    label: 'Media Pembelajaran',
    ringkasan: 'Integrasi LKPD eksploratif, slide presentasi interaktif, dan simulasi digital.',
    deskripsi:
      'Media dirancang untuk memandu penemuan konsep secara bertahap (step-by-step guidance) dan memvisualisasikan grafik dinamis yang sulit digambarkan di papan tulis.',
    refleksiPedagogis:
      'Media bukan sekadar alat bantu pajangan visual, melainkan jembatan kognitif yang memicu interaksi dan dialog matematis antar peserta didik.',
  },
  {
    id: 7,
    label: 'Aktivitas Peserta Didik',
    ringkasan: 'Diskusi kelompok kolaboratif, manipulasi representasi matematis, dan presentasi kelas.',
    deskripsi:
      'Aktivitas dirancang aktif: berdiskusi memecahkan studi kasus pada LKPD, menyepakati solusi kelompok, dan mempresentasikan temuan kepada kelompok lain dengan sesi tanya jawab.',
    refleksiPedagogis:
      'Aktivitas ini memfasilitasi komunikasi matematis (mathematical communication) dan menumbuhkan rasa percaya diri peserta didik dalam mengemukakan argumen logis.',
  },
  {
    id: 8,
    label: 'Asesmen Pembelajaran',
    ringkasan: 'Asesmen terpadu: diagnostik non-kognitif/kognitif, formatif ongoing, dan refleksi akhir.',
    deskripsi:
      'Asesmen formatif dilakukan berkelanjutan melalui lembar observasi keaktifan kelompok, pengecekan progres LKPD di meja, dan kuis cek pemahaman singkat di akhir sesi.',
    refleksiPedagogis:
      'Asesmen diposisikan sebagai "assessment for learning" dan "assessment as learning", memberikan umpan balik langsung (constructive feedback) agar siswa menyadari letak miskonsepsinya saat itu juga.',
  },
  {
    id: 9,
    label: 'Pembelajaran Kontekstual',
    ringkasan: 'Pengaitan materi matematika dengan fenomena nyata (pertumbuhan bakteri, finansial, arsitektur).',
    deskripsi:
      'Masalah disajikan dari kasus kehidupan sehari-hari yang dekat dengan dunia remaja, seperti perhitungan bunga tabungan, penyebaran informasi di media sosial, atau kurva peluruhan zat.',
    refleksiPedagogis:
      'Konteks nyata menjawab pertanyaan klasik siswa: "Untuk apa belajar matematika ini?". Motivasi belajar meningkat saat siswa melihat relevansi langsung dengan realitas.',
  },
  {
    id: 10,
    label: 'Hal yang Berhasil',
    ringkasan: 'Tingginya antusiasme diskusi, kemandirian pengerjaan LKPD, dan keberanian presentasi.',
    deskripsi:
      'Mayoritas kelompok mampu menyelesaikan tahapan penemuan konsep tanpa bergantung penuh pada penjelasan ceramah guru. Suasana kelas hidup dan interaktif.',
    refleksiPedagogis:
      'Desain pertanyaan pemantik yang terstruktur mampu memantik rasa ingin tahu dan membangun pemikiran kritis secara organik.',
  },
  {
    id: 11,
    label: 'Hal yang Masih Perlu Diperbaiki',
    ringkasan: 'Manajemen alokasi waktu transisi antar fase dan fasilitasi bagi siswa yang pasif.',
    deskripsi:
      'Sesi penyelidikan kelompok kadang melebihi estimasi waktu yang direncanakan, sehingga sesi penarikan kesimpulan akhir terkesan terburu-buru.',
    refleksiPedagogis:
      'Perlu penggunaan timer visual yang disepakati bersama kelas dan strategi pembagian peran kerja yang lebih spesifik dalam tiap kelompok agar seluruh anggota aktif.',
  },
  {
    id: 12,
    label: 'Rencana Pengembangan',
    ringkasan: 'Penyusunan LKPD bergradasi (scaffolding tier), penguatan media digital interaktif, dan optimalisasi refleksi.',
    deskripsi:
      'Mengembangkan instrumen diferensiasi yang lebih adaptif, mengintegrasikan lembar kerja digital mandiri, dan menyediakan waktu 10 menit khusus di akhir untuk jurnal refleksi siswa.',
    refleksiPedagogis:
      'Perbaikan berkelanjutan ini akan diimplementasikan pada siklus pembelajaran berikutnya guna menjamin pemenuhan kebutuhan belajar setiap individu murid secara adil.',
  },
];

export const materiList: MateriItem[] = [
  {
    id: 'materi-1',
    nama: 'Eksponen dan Sifat-Sifatnya',
    fase: 'Fase E (Kelas X)',
    tujuan: 'Mengidentifikasi sifat-sifat eksponen berpangkat bulat positif, nol, dan negatif serta menerapkannya dalam menyederhanakan bentuk aljabar.',
    konsepUtama: 'Definisi perkalian berulang, perkalian basis sama, pembagian basis sama, perpangkatan bilangan berpangkat, dan pangkat negatif.',
    konteks: 'Model pertumbuhan eksponensial pembelahan sel biologis dan pelipatgandaan kertas berulang.',
    aktivitas: 'Eksperimen melipat kertas berulang kali untuk mencatat hubungan banyak lipatan dengan banyak bidang persegi kecil yang terbentuk, dilanjutkan abstraksi simbolik.',
    artefak: 'LKPD Eksplorasi Eksponen, Lembar Kerja Siswa, dan Dokumentasi Diskusi Kelompok.',
    hasilPengamatan: 'Siswa lebih mudah menyimpulkan a^m × a^n = a^(m+n) setelah melihat bukti konkret dari tabel hasil lipatan daripada sekadar menghafal rumus.',
    kelebihan: 'Konsep terbangun dari induktif konkret menuju deduktif formal; keterlibatan fisik siswa tinggi.',
    kendala: 'Sebagian siswa masih mengalami miskonsepsi saat berhadapan dengan bilangan pokok negatif, misalnya (-2)^4 vs -2^4.',
    perbaikan: 'Menambahkan penekanan visual warna pada posisi tanda kurung dan memberikan contoh kontras (non-examples) di awal sesi.',
    linkDrive: '[LINK GOOGLE DRIVE MATERI]',
  },
  {
    id: 'materi-2',
    nama: 'Bentuk Akar dan Operasi Aljabar',
    fase: 'Fase E (Kelas X)',
    tujuan: 'Menyederhanakan bentuk akar, melakukan operasi penjumlahan/pengurangan/perkalian, serta merasionalkan penyebut pecahan bentuk akar.',
    konsepUtama: 'Definisi bilangan irasional bentuk akar, sifat akar perkalian √(a×b) = √a × √b, perkalian sekawan (conjugate).',
    konteks: 'Perhitungan panjang diagonal bidang pada konstruksi geometri rangka atap rumah dan teorema Pythagoras.',
    aktivitas: 'Memecahkan teka-teki berpasangan untuk mencocokkan bentuk akar belum sederhana dengan bentuk paling sederhananya (matching cards).',
    artefak: 'Kartu Soal Pasangan Bentuk Akar, Catatan Siswa, dan Lembar Penilaian Kinerja.',
    hasilPengamatan: 'Peserta didik antusias saat aktivitas kartu berpasangan, kecepatan menyederhanakan akar bilangan meningkat signifikan.',
    kelebihan: 'Aktivitas gamifikasi kartu berpasangan berhasil mereduksi kecemasan siswa terhadap simbol akar matematika.',
    kendala: 'Kerap terjadi kesalahan pada perasionalan penyebut pecahan yang memuat bentuk binomial penjumlahan/pengurangan akar (lupa sifat beda kuadrat).',
    perbaikan: 'Membuat jembatan analogi aljabar (a + b)(a - b) = a^2 - b^2 sebelum mengenalkan istilah merasionalkan bentuk sekawan.',
    linkDrive: '[LINK GOOGLE DRIVE MATERI]',
  },
  {
    id: 'materi-3',
    nama: 'Persamaan Eksponen Sederhana',
    fase: 'Fase E (Kelas X)',
    tujuan: 'Menentukan himpunan penyelesaian persamaan eksponen sederhana a^(f(x)) = a^(g(x)) dan a^(f(x)) = b^(f(x)).',
    konsepUtama: 'Prinsip kesamaan basis, ekuivalensi pangkat f(x) = g(x) jika basis sama (a > 0, a ≠ 1), analisis kasus pangkat nol.',
    konteks: 'Waktu yang diperlukan suatu populasi mikroba untuk mencapai jumlah tertentu dalam laboratorium biologi.',
    aktivitas: 'Studi kasus bertingkat dari persamaan ber-basis sama hingga persamaan yang membutuhkan pengubahan basis ke bilangan prima terkecil.',
    artefak: 'LKPD Terstruktur Persamaan Eksponen dan Lembar Refleksi Diri Siswa.',
    hasilPengamatan: 'Siswa yang telah menguasai sifat-sifat dasar eksponen dapat menyelesaikan langkah awal dengan cepat, namun siswa yang lemah prasyarat mengalami kendala pemfaktoran aljabar.',
    kelebihan: 'Melatih alur berpikir logis deduktif dan ketelitian dalam memeriksa syarat basis.',
    kendala: 'Siswa sering lupa menyamakan basis terlebih dahulu dan langsung menyamakan pangkat dari basis yang berbeda.',
    perbaikan: 'Memberikan lembar bantuan (hint checklist) 3 langkah emas: 1. Cek basis, 2. Samakan basis, 3. Samakan pangkat.',
    linkDrive: '[LINK GOOGLE DRIVE MATERI]',
  },
  {
    id: 'materi-4',
    nama: 'Fungsi Eksponen & Grafik Pertumbuhan/Peluruhan',
    fase: 'Fase E (Kelas X)',
    tujuan: 'Menggambar grafik fungsi eksponen f(x) = a^x dan menginterpretasikan karakteristik asimtot datar, monoton naik/turun.',
    konsepUtama: 'Grafik monoton naik jika a > 1, monoton turun jika 0 < a < 1, asimtot horizontal y = 0, titik potong sumbu-Y di (0,1).',
    konteks: 'Kurva penyebaran tren viral di internet dan kurva peluruhan dosis obat dalam darah pasien.',
    aktivitas: 'Plotting titik manual di kertas berpetak yang kemudian dikonfirmasi menggunakan aplikasi grafik digital (GeoGebra/Desmos).',
    artefak: 'Lembar Gambar Grafik Milimeter Blok dan Tangkapan Layar Komparasi GeoGebra.',
    hasilPengamatan: 'Penggunaan software grafik membuat pemahaman konsep "asimtot" menjadi sangat nyata dan tidak lagi abstrak bagi siswa.',
    kelebihan: 'Kombinasi manual dan teknologi memberikan pengalaman motorik sekaligus efisiensi visual dinamis.',
    kendala: 'Keterbatasan kuota atau kestabilan koneksi internet beberapa gawai siswa saat membuka aplikasi online.',
    perbaikan: 'Menyiapkan lembar tabel nilai yang sudah terstandarisasi serta menampilkan simulasi di proyektor kelas sebagai panduan bersama.',
    linkDrive: '[LINK GOOGLE DRIVE MATERI]',
  },
  {
    id: 'materi-5',
    nama: 'Sistem Persamaan & Pertidaksamaan Linear (SPLDV/SPtLDV)',
    fase: 'Fase E (Kelas X)',
    tujuan: 'Memodelkan masalah kontekstual ke dalam sistem pertidaksamaan linear dan menentukan daerah himpunan penyelesaian (DHP) pada bidang koordinat Cartesius.',
    konsepUtama: 'Garis pembatas, uji titik selidik (0,0), arsiran DHP, titik potong dua garis dengan metode eliminasi-substitusi.',
    konteks: 'Optimalisasi anggaran belanja bahan makanan khas daerah untuk kegiatan SMANTISA FOOD HERITAGE SMA Negeri 3 Salatiga.',
    aktivitas: 'Merancang rencana anggaran belanja bahan stan kuliner dengan batasan modal dan kapasitas wadah, lalu menggambar daerah penyelesaian fisibel.',
    artefak: 'Proposal Model Matematika Kelompok dan Papan Presentasi DHP Karton.',
    hasilPengamatan: 'Konteks riil kegiatan sekolah membuat siswa bersemangat karena mereka melihat hubungan langsung matematika dengan acara nyata yang mereka ikuti di sekolah.',
    kelebihan: 'Kontekstual tinggi, mengintegrasikan profil kearifan lokal sekolah dan pemikiran kritis aljabar.',
    kendala: 'Sebagian siswa masih bingung menentukan daerah arsiran (mana yang merupakan DHP bersih vs DHP kotor/arsir balik).',
    perbaikan: 'Menyepakati satu konvensi arsiran di kelas (DHP adalah daerah bersih yang tidak terarsir) agar seragam dan mudah dibaca.',
    linkDrive: '[LINK GOOGLE DRIVE MATERI]',
  },
];

export const mediaList: MediaItem[] = [
  {
    id: 'media-1',
    nama: 'Lembar Kerja Peserta Didik (LKPD) Eksploratif',
    kategori: 'Cetak & Lembar Kerja',
    status: 'SUDAH DIGUNAKAN',
    statusNote: 'Digunakan penuh pada setiap pertemuan siklus praktik mandiri.',
    deskripsi: 'LKPD dirancang dengan alur penemuan terpandu: memuat masalah apersepsi, tabel pengamatan berkala, pertanyaan pemicu hipotesis, dan kolom kesimpulan.',
    tujuanPedagogis: 'Memfasilitasi konstruksi pengetahuan mandiri dalam kelompok, meminimalkan dominasi penjelasan satu arah dari guru.',
    kelebihan: 'Menuntun alur berpikir secara runtut; terdapat ruang coretan kerja yang memudahkan guru memeriksa proses berpikir siswa.',
    catatanEvaluasi: 'Perlu menambahkan rubrik self-assessment singkat di bagian belakang LKPD agar siswa dapat menilai pemahaman diri sendiri.',
    linkUrl: '[LINK GOOGLE DRIVE LKPD]',
  },
  {
    id: 'media-2',
    nama: 'Slide Presentasi Visual Canva Interaktif',
    kategori: 'Media Presentasi',
    status: 'SUDAH DIGUNAKAN',
    statusNote: 'Digunakan saat fase orientasi masalah dan penegasan konsep di akhir pembelajaran.',
    deskripsi: 'Slide presentasi dengan palet warna kontras berestetika ramah mata, memuat animasi bertahap untuk langkah-langkah penyelesaian masalah aljabar.',
    tujuanPedagogis: 'Memfokuskan atensi seluruh kelas, menyajikan gambar kontekstual berkualitas tinggi, dan mempertegas poin kunci secara efisien.',
    kelebihan: 'Desain bersih, tidak padat teks, dan memudahkan pengorganisasian waktu presentasi guru.',
    catatanEvaluasi: 'Hindari teks kecil; pastikan ukuran font minimal 24pt agar siswa di baris belakang dapat membaca dengan sangat nyaman.',
    linkUrl: '[LINK CANVA / SLIDES]',
  },
  {
    id: 'media-3',
    nama: 'Video Pembelajaran Apersepsi Kontekstual',
    kategori: 'Media Audio Visual',
    status: 'SUDAH DIGUNAKAN',
    statusNote: 'Ditayangkan pada menit ke-5 pembelajaran selama 3-4 menit.',
    deskripsi: 'Cuplikan video animasi pendek tentang fenomena pelipatgandaan eksponensial dalam dunia nyata (pertumbuhan bakteri dan efek bunga majemuk).',
    tujuanPedagogis: 'Membangkitkan rasa ingin tahu, memberikan orientasi masalah nyata yang dekat dengan pengalaman siswa.',
    kelebihan: 'Menghidupkan suasana kelas sejak awal; efektif memancing respons spontan dan pertanyaan dari peserta didik.',
    catatanEvaluasi: 'Perlu langsung diikuti dengan 2 pertanyaan pemantik terarah agar fokus siswa tidak beralih sekadar sebagai tontonan hiburan.',
    linkUrl: '[LINK YOUTUBE / VIDEO APERSEPSI]',
  },
  {
    id: 'media-4',
    nama: 'Buku Teks & Modul Resmi Kemendikbudristek',
    kategori: 'Buku Referensi',
    status: 'SUDAH DIGUNAKAN',
    statusNote: 'Sebagai referensi standar kompetensi dan bank latihan mandiri siswa.',
    deskripsi: 'Buku Siswa Matematika SMA/MA Kelas X Kurikulum Merdeka Terbitan Pusat Perbukuan Kemendikbudristek.',
    tujuanPedagogis: 'Menjadi acuan literasi bacaan siswa dan memastikan keselarasan dengan capaian kurikulum nasional.',
    kelebihan: 'Bahasa baku, latihan soal terstandarisasi, dan mudah diakses oleh seluruh peserta didik baik cetak maupun PDF.',
    catatanEvaluasi: 'Soal kontekstual dalam buku terkadang perlu disesuaikan dengan konteks lingkungan lokal Salatiga agar lebih relate.',
    linkUrl: '[LINK GOOGLE DRIVE BUKU TEKS]',
  },
  {
    id: 'media-5',
    nama: 'GeoGebra & Desmos Graphing Calculator',
    kategori: 'Software Matematika Digital',
    status: 'SUDAH DIGUNAKAN',
    statusNote: 'Digunakan dalam pembelajaran grafik fungsi eksponen dan daerah sistem pertidaksamaan.',
    deskripsi: 'Aplikasi grafik dinamis yang memungkinkan peserta didik menggeser slider parameter (a) pada fungsi f(x) = a^x untuk melihat perubahan kurva secara real-time.',
    tujuanPedagogis: 'Menjembatani representasi simbolik aljabar dengan representasi visual spasial secara interaktif.',
    kelebihan: 'Siswa dapat melihat secara langsung konsep asimtot dan perubahan kecuraman kurva tanpa harus menghabiskan waktu menggambar puluhan titik manual.',
    catatanEvaluasi: 'Instruksi penggunaan tools perlu dibuat ringkas dalam kartu panduan 1 lembar agar siswa tidak bingung menekan tombol fitur.',
    linkUrl: '[LINK GEOGEBRA / DESMOS]',
  },
  {
    id: 'media-6',
    nama: 'Logicard Matematika',
    kategori: 'Media Manipulatif / Permainan Edukatif',
    status: 'MASIH DIKEMBANGKAN',
    statusNote: 'Dalam tahap pengembangan untuk pembelajaran berikutnya.',
    deskripsi: 'Kartu logika interaktif yang dirancang untuk melatih penalaran deduktif dan pemecahan teka-teki logika pernyataan matematika berantai.',
    tujuanPedagogis: 'Meningkatkan kelincahan bernalar (mathematical reasoning) melalui gamifikasi edukatif yang menyenangkan dan kompetitif secara suportif.',
    kelebihan: 'Menghilangkan ketegangan siswa terhadap rumus abstrak; memacu keterlibatan kinestetik.',
    catatanEvaluasi: 'Media ini masih dalam tahap finalisasi perancangan aturan main dan pengujian prototipe kartu sebelum diimplementasikan di kelas mendatang.',
    linkUrl: '[LINK PROTOYPE LOGICARD]',
  },
  {
    id: 'media-7',
    nama: 'Media Kuis Digital Interaktif (Quizizz / Formatif)',
    kategori: 'Media Evaluasi Digital',
    status: 'SUDAH DIGUNAKAN',
    statusNote: 'Digunakan di akhir sesi sebagai asesmen formatif 10 menit.',
    deskripsi: 'Platform kuis gamifikasi dengan umpan balik langsung (real-time feedback) yang menampilkan rekap pemahaman materi per butir soal.',
    tujuanPedagogis: 'Memantau pemahaman individu secara cepat (formative checkpoint) tanpa menimbulkan kecemasan ujian formal.',
    kelebihan: 'Data analisis butir soal langsung muncul, memudahkan guru mengidentifikasi materi mana yang masih belum tuntas dipahami kelas.',
    catatanEvaluasi: 'Sediakan opsi kuis cetak cadangan bagi siswa yang mengalami kendala teknis pada gawai pribadi.',
    linkUrl: '[LINK QUIZIZZ / GOOGLE FORM]',
  },
];

export const videoObservationData: VideoObservationPoint[] = [
  {
    kode: 'A',
    aspek: 'Pembukaan Pembelajaran',
    fokusObservasi: 'Salam pembuka, doa bersama, presensi, apersepsi kontekstual, motivasi, dan penyampaian tujuan pembelajaran.',
    analisisPelaksanaan:
      'Guru membuka pembelajaran dengan ramah, menyapa peserta didik, memimpin doa, dan mengecek kehadiran. Apersepsi dilakukan dengan menanyakan kaitan materi sebelumnya dengan fenomena sehari-hari. Tujuan pembelajaran disampaikan dengan jelas di layar proyektor.',
    kelebihanTampak: 'Artikulasi suara jelas, intonasi bersahabat, kontak mata menyeluruh, dan tercipta suasana kelas yang kondusif sejak menit pertama.',
    halPerluDitingkatkan: 'Waktu apersepsi dapat dibuat lebih ringkas (maksimal 7 menit) agar tidak memotong alokasi waktu kegiatan inti.',
  },
  {
    kode: 'B',
    aspek: 'Kegiatan Inti',
    fokusObservasi: 'Sintaks model Problem-Based Learning: orientasi masalah, pengorganisasian kelompok, penyelidikan mandiri/kelompok, dan presentasi hasil.',
    analisisPelaksanaan:
      'Guru mendistribusikan LKPD dan membagi siswa ke dalam kelompok heterogen. Guru berkeliling melakukan scaffolding bertahap dari meja ke meja, mendorong siswa mendiskusikan temuan, dan menunjuk kelompok untuk mempresentasikan hasil di depan kelas.',
    kelebihanTampak: 'Guru tidak mendominasi penjelasan; siswa aktif berargumen dalam kelompok dan berani menuliskan solusinya di papan tulis.',
    halPerluDitingkatkan: 'Pemberian arahan sebelum diskusi kelompok dimulai perlu ditegaskan kembali agar tidak ada kelompok yang ragu memulai tugasnya.',
  },
  {
    kode: 'C',
    aspek: 'Penutup Pembelajaran',
    fokusObservasi: 'Penarikan kesimpulan bersama peserta didik, evaluasi singkat/asesmen, refleksi emosional, dan informasi materi pertemuan berikutnya.',
    analisisPelaksanaan:
      'Guru bersama siswa merangkum poin-poin penting materi yang telah dipelajari. Siswa diminta mengisi lembar refleksi 2 menit mengenai hal yang paling dipahami dan hal yang masih membingungkan, ditutup dengan salam dan apresiasi.',
    kelebihanTampak: 'Kesimpulan ditarik langsung dari suara siswa (bukan dibacakan oleh guru saja), apresiasi atas usaha kelompok disampaikan tulus.',
    halPerluDitingkatkan: 'Waktu penutup kadang mendesak bel pulang, sehingga refleksi tertulis perlu dialokasikan tepat waktu minimal 8 menit sebelum bel.',
  },
  {
    kode: 'D',
    aspek: 'Pengelolaan Kelas',
    fokusObservasi: 'Pengondisian tata ruang meja kelompok, penjagaan dinamika kelas, penanganan siswa pasif, dan ketegasan instruksi.',
    analisisPelaksanaan:
      'Guru bergerak aktif ke seluruh sudut ruangan kelas, memastikan semua kelompok terlibat dalam diskusi dan tidak ada anggota yang terisolasi.',
    kelebihanTampak: 'Kewibawaan guru tampak natural; bahasa tubuh terbuka, mampu menegur siswa yang tidak fokus secara persuasif tanpa mempermalukan.',
    halPerluDitingkatkan: 'Pengaturan posisi tempat duduk kelompok dapat dioptimalkan agar tidak ada siswa yang membelakangi layar proyektor.',
  },
  {
    kode: 'E',
    aspek: 'Penggunaan Media',
    fokusObservasi: 'Kelancaran pengoperasian media tayang, LKPD, serta pemanfaatan proyektor dan papan tulis secara terpadu.',
    analisisPelaksanaan:
      'Media Canva dan LKPD digunakan sinkron: slide menjadi panduan alur, LKPD menjadi media kerja siswa, dan papan tulis digunakan untuk menegaskan simbolik matematis.',
    kelebihanTampak: 'Transisi perpindahan antar media berlangsung mulus tanpa jeda kendala teknis yang mengganggu ritme belajar.',
    halPerluDitingkatkan: 'Pemanfaatan software grafik dinamis (GeoGebra) dapat diperbanyak durasinya saat sesi tanya jawab kelompok.',
  },
  {
    kode: 'F',
    aspek: 'Interaksi dengan Peserta Didik',
    fokusObservasi: 'Kualitas pertanyaan pemantik, teknik probing question, respons terhadap jawaban salah, dan pemerataan kesempatan bertanya.',
    analisisPelaksanaan:
      'Guru merespons jawaban peserta didik dengan teknik penguatan positif. Ketika jawaban siswa belum tepat, guru tidak langsung menyalahkan melainkan memberikan pertanyaan penuntun (scaffolding).',
    kelebihanTampak: 'Terjalin relasi pedagogis yang hangat, siswa tidak takut bertanya atau salah, dan suasana psikologis kelas aman (safe learning environment).',
    halPerluDitingkatkan: 'Pemerataan giliran menjawab dapat diperluas ke siswa yang duduk di deretan paling belakang dan cenderung pendiam.',
  },
  {
    kode: 'G',
    aspek: 'Pengelolaan Waktu (Time Management)',
    fokusObservasi: 'Kesesuaian alokasi waktu rencana pelaksanaan (RPP/Modul) dengan durasi nyata di rekaman video.',
    analisisPelaksanaan:
      'Secara umum durasi 2 x 45 menit terlaksana cukup baik: Pendahuluan (12 menit), Kegiatan Inti (65 menit), dan Penutup (13 menit).',
    kelebihanTampak: 'Penyelidikan kelompok berjalan tuntas tanpa terpotong sebelum semua kelompok mencapai target minimal kesimpulan LKPD.',
    halPerluDitingkatkan: 'Perlu disiplin menggunakan pengingat waktu (timer stopwatch) pada layar agar sesi presentasi kelompok tidak berlarut-larut.',
  },
  {
    kode: 'H',
    aspek: 'Refleksi Performa Guru',
    fokusObservasi: 'Kepercayaan diri, bahasa tubuh, ekspresi emosional, kepekaan terhadap respons siswa, dan fleksibilitas instruksional.',
    analisisPelaksanaan:
      'Berdasarkan pengamatan rekaman video, performa mengajar menunjukkan peningkatan signifikan dalam hal kematangan pedagogis, ketenangan saat merespons situasi tak terduga, dan kejelasan instruksi.',
    kelebihanTampak: 'Senyum ramah, sikap profesional, postur berdiri tegak, serta kesabaran dalam mendampingi kelompok yang membutuhkan bantuan ekstra.',
    halPerluDitingkatkan: 'Mengurangi kebiasaan kata sambung filler berulang seperti "nah", "oke", atau "ya" saat transisi kalimat.',
  },
];

export const nonTeachingActivities: NonTeachingActivity[] = [
  {
    id: 'kegiatan-1',
    nama: 'Penerapan Budaya 5S (Senyum, Sapa, Salam, Sopan, Santun)',
    peran: 'Petugas Penyambutan Pagi Guru Piket di Gerbang Utama',
    waktu: 'Rutin Setiap Pagi (06.30 - 07.00 WIB)',
    deskripsi:
      'Menyambut kedatangan peserta didik, bapak/ibu guru, dan tenaga kependidikan di gerbang utama SMA Negeri 3 Salatiga dengan senyuman hangat, salam, serta memeriksa kerapian seragam dan kedisiplinan waktu.',
    kontribusi:
      'Membangun iklim emosional sekolah yang positif dan aman sejak awal hari, mempererat keakraban antara mahasiswa praktikan PPG dengan seluruh warga sekolah.',
    pembelajaran:
      'Menyadari bahwa peran guru dimulai sebelum melangkah ke dalam ruang kelas. Keteladanan sikap, kehangatan sapaan, dan konsistensi disiplin merupakan kurikulum tersembunyi (hidden curriculum) yang sangat efektif.',
    fotoLabel: 'Dokumentasi Kegiatan 5S di Gerbang Pagi',
  },
  {
    id: 'kegiatan-2',
    nama: 'Piket Harian Akademik & Pelayanan Perpustakaan Sekolah',
    peran: 'Koordinator Pelayanan Presensi Kelas & Fasilitator Literasi Perpustakaan',
    waktu: 'Terjadwal Mingguan (07.00 - 15.30 WIB)',
    deskripsi:
      'Bertanggung jawab mencatat mutasi kehadiran siswa antar jam pelajaran, mengantarkan tugas bagi kelas yang gurunya berhalangan hadir, serta membantu sirkulasi peminjaman dan penataan buku di perpustakaan sekolah.',
    kontribusi:
      'Membantu kelancaran operasional harian sekolah, memastikan kelas tetap memiliki aktivitas belajar bermakna saat jam kosong, serta menginventarisasi buku referensi matematika.',
    pembelajaran:
      'Memahami dinamika manajemen tata usaha dan ketertiban sekolah secara makro. Pengalaman ini mengasah kemampuan koordinasi cepat, ketelitian administrasi, dan kesabaran menghadapi beragam karakter siswa di luar jam pelajaran.',
    fotoLabel: 'Dokumentasi Piket Akademik & Perpustakaan',
  },
  {
    id: 'kegiatan-3',
    nama: 'Pembinaan Ekstrakurikuler Gerakan Pramuka',
    peran: 'Pendamping Pembina Pramuka Gugus Depan SMA Negeri 3 Salatiga',
    waktu: 'Setiap Hari Jumat Sore',
    deskripsi:
      'Mendampingi kegiatan kepramukaan penegak, memandu latihan baris-berbaris, teknik kepanduan (pionering, semapur), serta dinamika kelompok pembentukan karakter mandiri dan gotong royong.',
    kontribusi:
      'Membantu pembina merancang kegiatan kepramukaan yang menyenangkan dan interaktif, menanamkan nilai-nilai Dasa Darma dan Profil Pelajar Pancasila.',
    pembelajaran:
      'Melihat potensi dan kecerdasan majemuk peserta didik di luar ranah akademis. Siswa yang pendiam di kelas matematika ternyata bisa tampil sebagai pemimpin regu yang sangat cakap dan solutif di lapangan pramuka.',
    fotoLabel: 'Dokumentasi Pendampingan Ekstrakurikuler Pramuka',
  },
  {
    id: 'kegiatan-4',
    nama: 'Gerakan Jaga Bumi & Lingkungan Sekolah Adiwiyata',
    peran: 'Fasilitator Pemilahan Sampah & Penghijauan Taman Kelas',
    waktu: 'Program Rutin Hari Bersih Lingkungan Sekolah',
    deskripsi:
      'Mengajak dan mendampingi peserta didik dalam aksi nyata pemilahan sampah organik/anorganik, perawatan tanaman taman kelas, serta kampanye pengurangan botol plastik sekali pakai di kantin.',
    kontribusi:
      'Mendukung program sekolah berwawasan lingkungan hidup di SMA Negeri 3 Salatiga dan memberikan teladan langsung dalam menjaga kebersihan fasilitas bersama.',
    pembelajaran:
      'Pendidikan karakter peduli lingkungan tidak bisa hanya diajarkan lewat teori, melainkan harus dicontohkan melalui tindakan nyata bersama siswa. Kebersihan fisik lingkungan berdampak langsung pada kenyamanan belajar di kelas.',
    fotoLabel: 'Dokumentasi Aksi Gerakan Jaga Bumi',
  },
  {
    id: 'kegiatan-5',
    nama: 'SMANTISA FOOD HERITAGE',
    peran: 'Panitia Pendamping Stan Kuliner & Penilai Kreativitas Kewirausahaan Siswa',
    waktu: 'Event Tahunan Kearifan Lokal SMA Negeri 3 Salatiga',
    deskripsi:
      'Mendampingi kelas binaan dalam merencanakan menu kuliner tradisional Salatiga dan Jawa Tengah, menghitung estimasi modal/biaya bahan, serta mendekorasi stan pameran kewirausahaan siswa.',
    kontribusi:
      'Membantu siswa mengaplikasikan konsep perhitungan keuangan dan sistem persamaan linear secara nyata dalam penentuan harga jual dan perhitungan titik impas (BEP) dagangan stan.',
    pembelajaran:
      'Pengalaman ini menjadi salah satu momen paling berharga selama PPL. Saya melihat langsung bagaimana pembelajaran matematika dapat terhubung utuh dengan kearifan lokal, kolaborasi antarsiswa, dan kebanggaan budaya sekolah.',
    fotoLabel: 'Dokumentasi Kegiatan SMANTISA FOOD HERITAGE',
  },
];

export const assessmentItems: AssessmentItem[] = [
  {
    id: 'asesmen-1',
    nama: 'Asesmen Diagnostik Awal (Kognitif & Non-Kognitif)',
    kategori: 'Diagnostik',
    tujuan: 'Mengidentifikasi kesiapan belajar, gaya belajar dominan, dan pemahaman prasyarat aljabar peserta didik sebelum materi eksponen dimulai.',
    kompetensi: 'Kemampuan operasi hitung perkalian aljabar dan profil kesiapan psikologis peserta didik.',
    indikator: 'Menyelesaikan 5 butir soal operasi pangkat dasar dan menjawab kuesioner preferensi belajar 4 skala.',
    bentuk: 'Google Form singkat (online) dan lembar angket minat belajar.',
    kriteria: 'Kategori Mahir (skor 80-100), Berkembang (skor 60-79), dan Butuh Bimbingan Khusus (skor < 60).',
    penskoran: 'Skala 0 - 100 dengan pembobotan setara pada setiap butir soal konsep prasyarat.',
    hasilInisial: 'Sebanyak 65% siswa (termasuk S-03, S-09, S-14) kategori Berkembang; 20% Mahir (S-01, S-07); 15% Butuh Bimbingan (S-05, S-12, S-21).',
    tindakLanjut: 'Merancang pembagian kelompok heterogen dengan tutor sebaya dan menyediakan lembar bantuan rumus dasar bagi siswa butuh bimbingan.',
    linkDrive: '[LINK GOOGLE DRIVE INSTRUMEN DIAGNOSTIK]',
  },
  {
    id: 'asesmen-2',
    nama: 'Asesmen Formatif: Observasi Proses Diskusi LKPD',
    kategori: 'Formatif Kinerja',
    tujuan: 'Memantau keterlibatan, kerjasama, dan proses penalaran matematis siswa saat menyelesaikan masalah eksplorasi dalam kelompok.',
    kompetensi: 'Kolaborasi, bernalar kritis, dan komunikasi matematis.',
    indikator: 'Aktif menyumbang ide, saling membantu anggota yang kesulitan, mendengarkan argumen teman, dan menuntaskan tugas sesuai waktu.',
    bentuk: 'Rubrik lembar observasi guru dengan skala 1-4 dan catatan anekdot harian.',
    kriteria: 'Sangat Baik (4), Baik (3), Cukup (2), Kurang (1).',
    penskoran: 'Total skor dikonversi ke predikat keterlibatan kelompok.',
    hasilInisial: 'Kelompok 2 (S-06, S-07, S-08, S-09) dan Kelompok 4 (S-15, S-16, S-17) menunjukkan dinamika diskusi sangat aktif (skor 3.8). Siswa S-12 menunjukkan peningkatan keaktifan setelah didampingi.',
    tindakLanjut: 'Memberikan penguatan verbal positif dan menunjuk siswa yang baru berkembang untuk mempresentasikan satu bagian jawaban sederhana agar kepercayaan dirinya tumbuh.',
    linkDrive: '[LINK GOOGLE DRIVE RUBRIK OBSERVASI]',
  },
  {
    id: 'asesmen-3',
    nama: 'Kuis Singkat Cek Pemahaman (Exit Ticket / Formatif)',
    kategori: 'Formatif Harian',
    tujuan: 'Memeriksa daya serap siswa terhadap 2 konsep inti yang dipelajari pada akhir jam pelajaran.',
    kompetensi: 'Aplikasi langsung sifat perkalian dan pembagian eksponen ber-basis sama.',
    indikator: 'Menyederhanakan bentuk (2a^3 b^-2)^3 / (4a^-1 b^4) dengan tepat.',
    bentuk: '2 butir soal uraian singkat pada secarik kertas kecil (Exit Slip) sebelum meninggalkan kelas.',
    kriteria: 'Benar sempurna (Skor 10), Benar dengan kesalahan tanda minor (Skor 7), Langkah awal benar (Skor 4), Salah total/Kosong (Skor 0).',
    penskoran: 'Skala maksimal 20 poin.',
    hasilInisial: 'Rata-rata kelas mencapai 82.5. Kesalahan terbanyak pada siswa S-04 dan S-18 terletak pada distribusi pangkat luar ke koefisien angka 2.',
    tindakLanjut: 'Membahas sekilas 3 menit di awal pertemuan berikutnya sebagai apersepsi pengingat aturan eksponen koefisien.',
    linkDrive: '[LINK GOOGLE DRIVE EXIT TICKET]',
  },
  {
    id: 'asesmen-4',
    nama: 'Asesmen Sumatif Lingkup Materi / Ulangan Harian',
    kategori: 'Sumatif',
    tujuan: 'Mengukur pencapaian Capaian Pembelajaran peserta didik pada seluruh elemen eksponen dan fungsi eksponen.',
    kompetensi: 'Penalaran aljabar, pemodelan matematis, dan pemecahan masalah kontekstual eksponen.',
    indikator: 'Menyelesaikan variasi soal pilihan ganda kompleks, menjodohkan, dan uraian pemecahan masalah nyata.',
    bentuk: 'Tes tertulis kombinasi AKM (Asesmen Kompetensi Minimum) 15 butir soal.',
    kriteria: 'Kriteria Ketercapaian Tujuan Pembelajaran (KKTP) interval: 0-65 (Remedial seluruhnya), 66-74 (Remedial bagian tertentu), 75-89 (Tuntas), 90-100 (Pengayaan).',
    penskoran: 'Pilihan ganda berbobot 40%, Uraian berbobot 60%. Total 100 poin.',
    hasilInisial: 'Ketuntasan kelas mencapai 86.1%. Nilai tertinggi diperoleh siswa S-01 (98) dan S-15 (95). Sebanyak 4 siswa (S-05, S-11, S-21, S-27) mengikuti program remedial terfokus.',
    tindakLanjut: 'Pelaksanaan program bimbingan remedial terbimbing pada materi persamaan eksponen bagi 4 siswa, dan pemberian proyek pengayaan pemodelan GeoGebra bagi siswa tuntas.',
    linkDrive: '[LINK GOOGLE DRIVE HASIL SUMATIF]',
  },
  {
    id: 'asesmen-5',
    nama: 'Refleksi Diri Peserta Didik (Self & Peer Assessment)',
    kategori: 'Refleksi Peserta Didik',
    tujuan: 'Melatih metakognisi peserta didik agar menyadari strategi belajarnya sendiri dan menghargai peran teman sekelompok.',
    kompetensi: 'Kemampuan refleksi diri dan apresiasi sosial.',
    indikator: 'Menilai pemahaman diri terhadap materi dan memberikan apresiasi tertulis terhadap kontribusi teman sekelompok.',
    bentuk: 'Lembar refleksi bintang dan 3 kalimat terbuka: "Hari ini saya memahami...", "Saya masih bingung pada...", "Terima kasih kepada teman karena...".',
    kriteria: 'Kualitatif deskriptif.',
    penskoran: 'Tidak diberi angka angka ujian, melainkan umpan balik apresiatif dari guru.',
    hasilInisial: 'Siswa S-08 menulis: "Awalnya saya takut rumus pangkat, tapi waktu kerja bareng kelompok dan pakai contoh lipat kertas jadi masuk akal."',
    tindakLanjut: 'Hasil refleksi dijadikan bahan evaluasi guru dalam merancang variasi aktivitas di siklus mengajar berikutnya.',
    linkDrive: '[LINK GOOGLE DRIVE REFLEKSI SISWA]',
  },
];

export const reflectionQuestions: ReflectionQuestion[] = [
  {
    nomor: 1,
    pertanyaan: 'Apa yang saya pelajari tentang diri saya sebagai guru?',
    refleksi:
      'Saya belajar bahwa menjadi guru matematika tidak hanya menuntut penguasaan materi yang kuat, melainkan menuntut kepekaan mendengarkan dan membaca dinamika psikologis kelas. Saya menyadari bahwa kekuatan terbesar saya terletak pada kesabaran menjelaskan konsep dengan berbagai cara berbeda sampai mata peserta didik berbinar tanda mengerti. Di sisi lain, saya juga belajar untuk lebih berani melepas kendali dan mempercayai kemampuan siswa dalam menemukan pengetahuannya sendiri melalui diskusi yang terarah.',
    insight: 'Guru yang baik bukan yang paling banyak berbicara di depan kelas, melainkan yang paling mampu memantik siswa untuk berpikir dan berbicara.',
  },
  {
    nomor: 2,
    pertanyaan: 'Apa yang berubah dari cara pandang saya sebelum dan sesudah praktik?',
    refleksi:
      'Sebelum praktik mandiri, saya menganggap RPP atau modul ajar adalah "naskah kaku" yang harus dieksekusi detik demi detik secara sempurna. Namun setelah berada di kelas nyata SMA Negeri 3 Salatiga, cara pandang saya berubah total: modul ajar adalah kompas navigasi yang fleksibel. Guru harus peka terhadap situasi nyata di lapangan. Jika siswa mengalami kebuntuan pada konsep dasar, guru harus berani meluangkan waktu sejenak untuk membedah prasyarat tersebut daripada memaksakan silabus selesai tetapi siswa tidak paham.',
    insight: 'Fleksibilitas pedagogis adalah bentuk penghormatan tertinggi guru terhadap kebutuhan belajar peserta didik.',
  },
  {
    nomor: 3,
    pertanyaan: 'Apa kekuatan saya?',
    refleksi:
      'Kekuatan utama saya adalah kemampuan membangun hubungan interpersonal yang hangat dan bersahabat dengan peserta didik tanpa kehilangan wibawa profesional. Saya mampu menciptakan atmosfer belajar yang tidak mengintimidasi (low-anxiety classroom). Selain itu, saya memiliki dedikasi tinggi dalam merancang media visual (seperti Canva dan LKPD) yang rapi, runtut, estetis, dan mudah dipahami oleh berbagai tipe gaya belajar siswa.',
    insight: 'Kenyamanan emosional adalah gerbang pertama keterbukaan kognitif siswa terhadap matematika.',
  },
  {
    nomor: 4,
    pertanyaan: 'Apa tantangan saya?',
    refleksi:
      'Tantangan paling nyata yang saya hadapi adalah pengelolaan waktu (time management) saat fase eksplorasi kelompok dan penanganan kesenjangan kemampuan (heterogenitas) siswa yang cukup lebar. Terkadang saya terlalu lama mendampingi satu kelompok yang kesulitan sehingga kelompok yang sudah selesai menunggu terlalu lama. Saya perlu lebih terampil dalam menerapkan teknik diferensiasi bertingkat (tiered tasks) dan manajemen durasi yang lebih disiplin.',
    insight: 'Setiap tantangan di kelas adalah laboratorium berharga untuk menajamkan seni memfasilitasi pembelajaran.',
  },
  {
    nomor: 5,
    pertanyaan: 'Apa respons peserta didik yang paling membekas?',
    refleksi:
      'Momen yang paling membekas adalah ketika seorang siswa yang biasanya pendiam dan sering menunduk saat pelajaran matematika (S-12), pada akhir pertemuan ketiga memberanikan diri maju ke depan dan menjelaskan grafik fungsi eksponen di papan tulis. Saat teman-temannya bertepuk tangan dan dia tersenyum bangga, dia berkata lirih kepada saya: "Bu Sevia, ternyata matematika bisa semasuk akal ini ya kalau ada gambarnya." Kalimat sederhana itu menegaskan kembali panggilan jiwa saya sebagai pendidik.',
    insight: 'Keberhasilan seorang guru tercermin saat seorang anak yang ragu pada kemampuannya mulai percaya diri melangkah.',
  },
  {
    nomor: 6,
    pertanyaan: 'Bagaimana masukan guru pamong membantu saya?',
    refleksi:
      'Guru pamong saya di SMA Negeri 3 Salatiga memberikan bimbingan yang luar biasa berharga. Beliau tidak hanya mengamati aspek administratif, tetapi membimbing saya dalam seni membaca bahasa tubuh siswa, teknik memberikan pertanyaan pancingan (probing) tanpa langsung membeberkan jawaban, serta cara mengelola transisi antar aktivitas kelas agar energi belajar tetap terjaga tinggi. Masukan beliau mengenai intonasi suara dan posisi berdiri saat memantau kelas menjadi modal penting dalam mematangkan profesionalisme saya.',
    insight: 'Umpan balik konstruktif dari guru pamong senior adalah cermin paling jernih untuk terus bertumbuh.',
  },
  {
    nomor: 7,
    pertanyaan: 'Apa yang akan saya lakukan berbeda pada pembelajaran berikutnya?',
    refleksi:
      'Pada praktik pembelajaran selanjutnya, saya akan: 1) Menyediakan timer visual di layar proyektor agar alur waktu transisi disepakati bersama kelas; 2) Menyiapkan kartu petunjuk bertingkat (scaffolding cue cards) di meja agar kelompok yang mandiri dapat mencari bantuan mandiri sebelum memanggil guru; 3) Memberikan peran kerja spesifik pada tiap anggota kelompok (ketua, pencatat, pencari referensi, juru bicara) agar tanggung jawab terdistribusi merata; dan 4) Meluangkan waktu 7 menit penuh tanpa kompromi untuk penutupan dan refleksi bermakna.',
    insight: 'Refleksi sejati selalu berujung pada komitmen tindakan perbaikan nyata pada langkah esok hari.',
  },
];

export const roadmapData: RoadmapItem[] = [
  {
    aspek: 'Pengelolaan Kelas',
    kondisiSaatIni: 'Guru masih dominan mendatangi meja kelompok satu per satu secara acak; beberapa siswa di baris belakang terlambat terjangkau perhatian.',
    targetPerbaikan: 'Pemerataan mobilitas guru secara sirkular dan penerapan pembagian peran kelompok terstruktur (role distribution).',
    tindakanNyata: 'Menerapkan sistem peran (Leader, Scribe, Timekeeper, Presenter) dan melakukan checking berkala dengan rute zig-zag mengitari seluruh penjuru kelas.',
    timeline: 'Siklus Pembelajaran Berikutnya (Minggu 1-2)',
  },
  {
    aspek: 'Manajemen Waktu',
    kondisiSaatIni: 'Durasi fase penyelidikan kelompok sering molor 5-8 menit dari rencana, menyebabkan sesi penutup dan refleksi terburu-buru.',
    targetPerbaikan: 'Kepatuhan waktu fase pembelajaran dengan batas toleransi maksimal ±2 menit dari alokasi modul.',
    tindakanNyata: 'Memasang countdown timer digital di sudut slide Canva dan membunyikan bel pengingat 3 menit sebelum sesi diskusi berakhir.',
    timeline: 'Setiap Pertemuan Tatap Muka',
  },
  {
    aspek: 'Media Pembelajaran',
    kondisiSaatIni: 'Media LKPD cetak dan slide presentasi Canva sudah berjalan sangat baik, namun media manipulatif digital interaktif belum optimal dicoba mandiri oleh seluruh siswa.',
    targetPerbaikan: 'Optimalisasi penggunaan GeoGebra/Desmos langsung oleh siswa melalui gawai serta implementasi media Logicard yang sedang dikembangkan.',
    tindakanNyata: 'Menyusun barcode lembar kerja cepat untuk membuka applet GeoGebra yang sudah disiapkan guru dan memfinalisasi set kartu Logicard untuk sesi review.',
    timeline: 'Bulan Depan / Siklus Materi Sistem Persamaan',
  },
  {
    aspek: 'Asesmen Pembelajaran',
    kondisiSaatIni: 'Asesmen kognitif formatif dan sumatif terlaksana tertib, namun asesmen antar teman (peer-assessment) belum terfasilitasi secara berkala.',
    targetPerbaikan: 'Integrasi peer-assessment dan self-assessment terstruktur yang mudah diisi siswa dalam waktu kurang dari 3 menit.',
    tindakanNyata: 'Menyematkan lembar checklist refleksi mini pada bagian akhir setiap LKPD dan lembar apresiasi kawan sekelompok.',
    timeline: 'Minggu Berjalan',
  },
  {
    aspek: 'Pembelajaran Kontekstual',
    kondisiSaatIni: 'Masalah kontekstual bersumber dari studi kasus umum nasional (bakteri, finansial perbankan).',
    targetPerbaikan: 'Memperbanyak studi kasus yang mengakar pada kearifan lokal Kota Salatiga dan dinamika riil SMA Negeri 3 Salatiga.',
    tindakanNyata: 'Mengintegrasikan data riil dari event SMANTISA FOOD HERITAGE, topografi ketinggian lereng Gunung Merbabu/Salatiga ke dalam soal pemodelan fungsi eksponen dan trigonometri.',
    timeline: 'Perancangan Modul Ajar Fase Berikutnya',
  },
  {
    aspek: 'Refleksi Diri Berkelanjutan',
    kondisiSaatIni: 'Refleksi dilakukan setelah jam mengajar usai melalui catatan singkat di buku agenda praktikan.',
    targetPerbaikan: 'Penyusunan jurnal refleksi terstruktur berbasis video rekaman mandiri (video-stimulated recall) bersama guru pamong dan rekan sejawat PPG.',
    tindakanNyata: 'Meluangkan waktu 30 menit setiap akhir pekan untuk memutar ulang cuplikan 10 menit video mengajar, mengidentifikasi pola interaksi guru-murid, dan mendiskusikannya dengan dosen pembimbing lapangan.',
    timeline: 'Rutin Setiap Akhir Pekan Selama Masa PPG',
  },
];

export const artifactCardList: ArtifactCardItem[] = [
  {
    id: 'art-modul',
    kategori: 'Perencanaan',
    judul: 'Modul Ajar Matematika Kurikulum Merdeka',
    deskripsi: 'Dokumen lengkap rancangan pembelajaran materi Eksponen & Fungsi Eksponen, memuat CP, TP, langkah PBL, diferensiasi, dan lampiran instrumen.',
    tombolTeks: 'Buka Dokumen →',
    linkPlaceholder: '[LINK GOOGLE DRIVE MODUL]',
    tipeIcon: 'file-text',
  },
  {
    id: 'art-lkpd',
    kategori: 'Perangkat Pembelajaran',
    judul: 'Lembar Kerja Peserta Didik (LKPD) Eksploratif',
    deskripsi: 'Lembar aktivitas penemuan konsep sifat-sifat eksponen melalui metode melipat kertas berulang dan penyelidikan grafik kontekstual.',
    tombolTeks: 'Buka LKPD →',
    linkPlaceholder: '[LINK GOOGLE DRIVE LKPD]',
    tipeIcon: 'clipboard',
  },
  {
    id: 'art-ppt',
    kategori: 'Media Ajar',
    judul: 'Slide Presentasi Pembelajaran Canva Interaktif',
    deskripsi: 'Slide tayang visual berpalet burgundy-blush dengan navigasi interaktif, animasi bertahap langkah aljabar, dan pertanyaan apersepsi pemantik.',
    tombolTeks: 'Lihat PPT →',
    linkPlaceholder: '[LINK GOOGLE DRIVE PPT]',
    tipeIcon: 'presentation',
  },
  {
    id: 'art-asesmen',
    kategori: 'Evaluasi',
    judul: 'Instrumen Asesmen Lengkap & Rubrik Penilaian',
    deskripsi: 'Kumpulan soal diagnostik, lembar observasi keterlibatan kelompok, kisi-kisi ulangan harian, rubrik unjuk kerja, dan pedoman penskoran.',
    tombolTeks: 'Buka Instrumen →',
    linkPlaceholder: '[LINK GOOGLE DRIVE INSTRUMEN]',
    tipeIcon: 'layers',
  },
  {
    id: 'art-video',
    kategori: 'Pelaksanaan',
    judul: 'Rekaman Video Praktik Mengajar Mandiri',
    deskripsi: 'Video dokumentasi utuh pelaksanaan pembelajaran di kelas SMA Negeri 3 Salatiga mulai dari fase pendahuluan, inti (PBL), hingga penutup dan refleksi.',
    tombolTeks: 'Watch Video →',
    linkPlaceholder: '[LINK VIDEO]',
    tipeIcon: 'video',
  },
  {
    id: 'art-foto',
    kategori: 'Dokumentasi',
    judul: 'Galeri Foto & Dokumentasi Kegiatan Pembelajaran',
    deskripsi: 'Dokumentasi visual interaksi belajar, suasana diskusi kelompok, aktivitas presentasi siswa, dan bimbingan guru pamong di kelas.',
    tombolTeks: 'Lihat Dokumentasi →',
    linkPlaceholder: '[LINK GOOGLE DRIVE DOKUMENTASI]',
    tipeIcon: 'image',
  },
  {
    id: 'art-digital',
    kategori: 'Media Digital',
    judul: 'Applet GeoGebra & Media Digital Eksplorasi',
    deskripsi: 'File simulasi grafik dinamis f(x) = a^x dengan slider parameter untuk pembuktian konsep asimtot horizontal dan pergeseran kurva.',
    tombolTeks: 'Buka Media →',
    linkPlaceholder: '[LINK GEOGEBRA / DESMOS / MEDIA DIGITAL]',
    tipeIcon: 'chart',
  },
];
