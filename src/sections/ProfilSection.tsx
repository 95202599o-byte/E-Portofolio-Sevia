import React, { useState } from 'react';
import { Mail, Instagram, HardDrive, MapPin, Sparkles, CheckCircle2, User, Award, School, Calendar, BookOpen } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { BackToHomeButton } from '../components/BackToHomeButton';
import { identityData } from '../data/portfolioData';

export const ProfilSection: React.FC = () => {
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  const handleContactClick = (type: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedContact(type);
    setTimeout(() => setCopiedContact(null), 2500);
  };

  const focusPoints = [
    {
      title: 'Perencanaan Pembelajaran yang Berpihak pada Peserta Didik',
      desc: 'Merancang modul ajar yang berpusat pada siswa dengan memperhatikan kesiapan, minat, dan profil belajar murid.',
    },
    {
      title: 'Pembelajaran Matematika yang Kontekstual',
      desc: 'Menghubungkan konsep aljabar dan geometri dengan realitas nyata di sekitar siswa untuk pembelajaran bermakna.',
    },
    {
      title: 'Pemanfaatan Media dan Teknologi',
      desc: 'Mengintegrasikan LKPD eksploratif, slide Canva interaktif, dan simulasi GeoGebra untuk memvisualisasikan abstraksi.',
    },
    {
      title: 'Asesmen yang Bermakna',
      desc: 'Mengembangkan instrumen diagnostik, formatif berkelanjutan, dan sumatif autentik yang memberikan umpan balik langsung.',
    },
    {
      title: 'Pengelolaan Kelas',
      desc: 'Menciptakan lingkungan belajar yang positif, aman, suportif, dan memotivasi seluruh siswa untuk aktif bertanya.',
    },
    {
      title: 'Pemenuhan Kebutuhan Belajar Peserta Didik',
      desc: 'Melakukan diferensiasi proses dan konten dengan memberikan scaffolding bertingkat sesuai kecepatan belajar siswa.',
    },
    {
      title: 'Refleksi dan Pengembangan Diri Berkelanjutan',
      desc: 'Mengevaluasi setiap sesi mengajar secara kritis untuk terus meningkatkan kematangan pedagogis dan profesionalisme.',
    },
  ];

  return (
    <section id="profil" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          title="Profil Guru"
          subtitle="Identitas akademik, visi pedagogis, dan komitmen profesional Calon Guru Matematika."
        />

        {/* Top Grid: Photo Left, Profile Card Right */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          
          {/* Left Column: Professional / Graduation Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#E5D2C8] bg-white p-5 shadow-md">
              <div className="mb-3 flex items-center justify-between border-b border-[#E5D2C8] pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#70263D]">
                  Foto Profil Calon Guru
                </span>
                <span className="rounded-md bg-[#F9E2E9] px-2 py-0.5 text-[10px] font-semibold text-[#70263D]">
                  Foto Profesional / Wisuda
                </span>
              </div>

              <PhotoPlaceholder
                id="profil_foto_guru"
                label="Tambahkan Foto Guru di Sini"
                sublabel="Unggah foto profil formal atau foto wisuda Sevia Nazahra di sini"
                aspectRatio="3:4"
                caption="Sevia Nazahra, S.Pd. — Mahasiswa PPG Pendidikan Matematika UKSW"
              />

              <div className="mt-4 rounded-2xl bg-[#FCF8F5] p-3 text-center border border-[#E5D2C8]/70">
                <p className="font-serif font-bold text-[#70263D] text-base">
                  Sevia Nazahra
                </p>
                <p className="text-xs text-[#635F6B]">
                  NIM: 95202599O · LPTK UKSW
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Profile Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl border border-[#E5D2C8] bg-[#FCF8F5] p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#E5D2C8] pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#3155C6]">
                    KARTU IDENTITAS AKADEMIK
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#70263D]">
                    {identityData.nama}
                  </h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#70263D] text-white">
                  <User className="h-5 w-5" />
                </div>
              </div>

              {/* Data Grid with unboxed typography */}
              <div className="mt-5 grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2 text-xs">
                <div className="border-b border-[#E5D2C8]/60 pb-2">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#635F6B]">
                    Nomor Induk Mahasiswa (NIM)
                  </span>
                  <span className="font-mono text-sm font-semibold text-[#343238]">
                    {identityData.nim}
                  </span>
                </div>

                <div className="border-b border-[#E5D2C8]/60 pb-2">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#635F6B]">
                    Tahun Akademik
                  </span>
                  <span className="text-sm font-semibold text-[#343238]">
                    {identityData.tahun}
                  </span>
                </div>

                <div className="border-b border-[#E5D2C8]/60 pb-2">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#635F6B]">
                    Program Pendidikan
                  </span>
                  <span className="text-sm font-semibold text-[#70263D]">
                    {identityData.program}
                  </span>
                </div>

                <div className="border-b border-[#E5D2C8]/60 pb-2">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#635F6B]">
                    Program Studi
                  </span>
                  <span className="text-sm font-semibold text-[#343238]">
                    {identityData.prodi}
                  </span>
                </div>

                <div className="border-b border-[#E5D2C8]/60 pb-2 sm:col-span-2">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#635F6B]">
                    LPTK / Kampus PPG
                  </span>
                  <span className="text-sm font-semibold text-[#343238]">
                    {identityData.lptk}
                  </span>
                </div>

                <div className="border-b border-[#E5D2C8]/60 pb-2">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#635F6B]">
                    Sekolah Mitra PPL
                  </span>
                  <span className="text-sm font-semibold text-[#3155C6]">
                    {identityData.sekolahPpl}
                  </span>
                </div>

                <div className="border-b border-[#E5D2C8]/60 pb-2">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#635F6B]">
                    Konteks Praktik
                  </span>
                  <span className="text-sm font-semibold text-[#343238]">
                    {identityData.konteks}
                  </span>
                </div>

                <div className="border-b border-[#E5D2C8]/60 pb-2 sm:col-span-2">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#635F6B]">
                    Asal Kota
                  </span>
                  <span className="text-sm font-medium italic text-[#635F6B]">
                    {identityData.asalKota}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="rounded-3xl border border-[#E5D2C8] bg-white p-5 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#70263D] mb-3">
                Kontak & Tautan Profesional
              </h4>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {/* Email */}
                <button
                  type="button"
                  onClick={() => handleContactClick('email', identityData.email)}
                  className="flex items-center gap-2.5 rounded-xl border border-[#E5D2C8] bg-[#FCF8F5] p-2.5 text-left transition hover:border-[#70263D] hover:bg-[#F9E2E9]/60"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#70263D] text-white shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase text-[#635F6B]">Email</span>
                    <span className="block truncate text-xs font-semibold text-[#343238]">
                      {identityData.email}
                    </span>
                  </div>
                </button>

                {/* Instagram */}
                <button
                  type="button"
                  onClick={() => handleContactClick('instagram', identityData.instagram)}
                  className="flex items-center gap-2.5 rounded-xl border border-[#E5D2C8] bg-[#FCF8F5] p-2.5 text-left transition hover:border-[#D85C82] hover:bg-[#F9E2E9]/60"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D85C82] text-white shrink-0">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase text-[#635F6B]">Media Sosial</span>
                    <span className="block truncate text-xs font-semibold text-[#343238]">
                      {identityData.instagram}
                    </span>
                  </div>
                </button>

                {/* Google Drive / Portfolio */}
                <button
                  type="button"
                  onClick={() => handleContactClick('drive', '[LINK GOOGLE DRIVE PORTFOLIO]')}
                  className="flex items-center gap-2.5 rounded-xl border border-[#E5D2C8] bg-[#FCF8F5] p-2.5 text-left transition hover:border-[#3155C6] hover:bg-[#3155C6]/10"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3155C6] text-white shrink-0">
                    <HardDrive className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase text-[#635F6B]">Drive Portfolio</span>
                    <span className="block truncate text-xs font-semibold text-[#343238]">
                      [LINK GOOGLE DRIVE]
                    </span>
                  </div>
                </button>
              </div>

              {copiedContact && (
                <p className="mt-2 text-center text-xs font-medium text-emerald-700 animate-fadeIn">
                  ✓ Teks kontak {copiedContact} berhasil disalin ke clipboard!
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Section: Tentang Saya */}
        <div className="mt-12 rounded-3xl border border-[#E5D2C8] bg-white p-7 sm:p-9 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D85C82]">
            <BookOpen className="h-4 w-4" />
            <span>Refleksi Eksistensial Calon Guru</span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-[#70263D]">
            Tentang Saya
          </h3>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#343238] font-normal">
            “Saya merupakan mahasiswa PPG Pendidikan Matematika yang sedang mengembangkan kompetensi sebagai guru profesional melalui pengalaman praktik langsung di sekolah. Praktik mengajar mandiri menjadi pengalaman penting bagi saya karena memberikan kesempatan untuk bertanggung jawab secara lebih utuh terhadap proses pembelajaran, mulai dari perencanaan, pelaksanaan, asesmen, pengelolaan kelas, hingga refleksi.”
          </p>
        </div>

        {/* Section: Fokus Pengembangan Profesional */}
        <div className="mt-8 rounded-3xl border border-[#E5D2C8] bg-[#FCF8F5] p-7 sm:p-9 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3155C6]">
            <Sparkles className="h-4 w-4" />
            <span>Pilar Kompetensi Guru Profesional</span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-[#70263D]">
            Fokus Pengembangan Profesional
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusPoints.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-[#E5D2C8] bg-white p-5 transition-all duration-300 hover:border-[#70263D] hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F9E2E9] text-xs font-bold text-[#70263D] shrink-0 group-hover:bg-[#70263D] group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#70263D] leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#635F6B]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BackToHomeButton />
      </div>
    </section>
  );
};
