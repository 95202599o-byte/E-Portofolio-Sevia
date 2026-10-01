export interface IdentityInfo {
  nama: string;
  nim: string;
  program: string;
  lptk: string;
  tahun: string;
  sekolahPpl: string;
  prodi: string;
  konteks: string;
  asalKota: string;
  email: string;
  instagram: string;
  kontakLainnya: string;
}

export interface ModulAnalysisPoint {
  id: number;
  label: string;
  ringkasan: string;
  deskripsi: string;
  refleksiPedagogis: string;
}

export interface MateriItem {
  id: string;
  nama: string;
  fase: string;
  tujuan: string;
  konsepUtama: string;
  konteks: string;
  aktivitas: string;
  artefak: string;
  hasilPengamatan: string;
  kelebihan: string;
  kendala: string;
  perbaikan: string;
  linkDrive: string;
}

export interface MediaItem {
  id: string;
  nama: string;
  kategori: string;
  status: 'SUDAH DIGUNAKAN' | 'MASIH DIKEMBANGKAN';
  statusNote?: string;
  deskripsi: string;
  tujuanPedagogis: string;
  kelebihan: string;
  catatanEvaluasi: string;
  linkUrl: string;
}

export interface VideoObservationPoint {
  kode: string;
  aspek: string;
  fokusObservasi: string;
  analisisPelaksanaan: string;
  kelebihanTampak: string;
  halPerluDitingkatkan: string;
}

export interface NonTeachingActivity {
  id: string;
  nama: string;
  peran: string;
  waktu: string;
  deskripsi: string;
  kontribusi: string;
  pembelajaran: string;
  fotoLabel: string;
}

export interface AssessmentItem {
  id: string;
  nama: string;
  kategori: string;
  tujuan: string;
  kompetensi: string;
  indikator: string;
  bentuk: string;
  kriteria: string;
  penskoran: string;
  hasilInisial: string;
  tindakLanjut: string;
  linkDrive: string;
}

export interface ReflectionQuestion {
  nomor: number;
  pertanyaan: string;
  refleksi: string;
  insight: string;
}

export interface RoadmapItem {
  aspek: string;
  kondisiSaatIni: string;
  targetPerbaikan: string;
  tindakanNyata: string;
  timeline: string;
}

export interface ArtifactCardItem {
  id: string;
  kategori: string;
  judul: string;
  deskripsi: string;
  tombolTeks: string;
  linkPlaceholder: string;
  tipeIcon: 'file-text' | 'presentation' | 'video' | 'chart' | 'clipboard' | 'image' | 'layers';
}
