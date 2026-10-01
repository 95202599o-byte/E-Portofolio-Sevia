import React from 'react';
import { Heart, Sparkles, BookOpen, Quote, HelpCircle, Lightbulb } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { BackToHomeButton } from '../components/BackToHomeButton';
import { reflectionQuestions } from '../data/portfolioData';

export const RefleksiSection: React.FC = () => {
  return (
    <section id="refleksi" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="09"
          title="Refleksi Diri: Belajar Menjadi Guru melalui Praktik"
          subtitle="Sebuah perenungan jujur, manusiawi, dan personal mengenai transformasi batin, tantangan, dan panggilan jiwa calon guru matematika."
        />

        {/* Personal Quote Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#70263D]/30 bg-gradient-to-br from-[#70263D] via-[#8a304d] to-[#531c2d] p-8 sm:p-12 text-white shadow-xl">
          <Quote className="absolute -top-4 -right-4 h-32 w-32 text-white/10" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F3D36B]">
              Refleksi Filosofis Sevia Nazahra
            </span>
            <p className="mt-4 font-serif text-2xl sm:text-3xl lg:text-4xl font-normal italic leading-snug">
              “Mengajar matematika bukan sekadar mentransfer sekumpulan rumus baku ke benak peserta didik, melainkan menyalakan lentera keberanian berpikir, mendampingi proses tersandung, dan merayakan saat mereka menemukan arti.”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-0.5 w-8 bg-[#F3D36B]" />
              <span className="text-xs font-semibold tracking-wide text-white/90">
                Sevia Nazahra · Mahasiswa PPG Pendidikan Matematika UKSW 2026
              </span>
            </div>
          </div>
        </div>

        {/* 7 Deep Reflective Questions & Answers */}
        <div className="mt-14 space-y-8">
          <div className="border-b border-[#E5D2C8] pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3155C6]">
              Tujuh Pertanyaan Reflektif Kunci
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#70263D]">
              Jawaban & Penemuan Diri selama Praktik Mengajar Mandiri
            </h3>
          </div>

          <div className="space-y-6">
            {reflectionQuestions.map((q) => (
              <div
                key={q.nomor}
                className="rounded-3xl border border-[#E5D2C8] bg-white p-6 sm:p-8 shadow-sm transition hover:border-[#70263D] hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#F9E2E9] font-mono text-sm font-bold text-[#70263D] shrink-0">
                    {q.nomor}
                  </span>
                  <div className="space-y-3 w-full">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#70263D]">
                      {q.pertanyaan}
                    </h4>

                    <p className="text-sm sm:text-base leading-relaxed text-[#343238]">
                      {q.refleksi}
                    </p>

                    <div className="rounded-2xl border-l-4 border-[#3155C6] bg-[#FCF8F5] p-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#3155C6]">
                        <Lightbulb className="h-3.5 w-3.5 text-[#F3D36B]" />
                        <span>Insight Pribadi:</span>
                      </div>
                      <p className="mt-1 text-[#343238] font-medium italic">
                        “{q.insight}”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Dedicated Photo Spaces for Reflection as Requested */}
        <div className="mt-16">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#70263D]">
              Galeri Refleksi
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#70263D]">
              Ruang Bukti Foto Refleksi, Suasana Kelas & Catatan Harian
            </h3>
            <p className="text-xs text-[#635F6B]">
              Tiga ruang foto proporsional untuk mengabadikan momen batin, dinamika kelas, dan jurnal catatan refleksi pribadi.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PhotoPlaceholder
              id="refleksi_foto_diri"
              label="Foto Refleksi Calon Guru"
              sublabel="Unggah foto Anda saat mempersiapkan materi atau mengevaluasi hasil belajar"
              aspectRatio="4:3"
              caption="Momen Refleksi: Mengevaluasi Hasil Pembelajaran Mandiri"
            />
            <PhotoPlaceholder
              id="refleksi_suasana_kelas"
              label="Foto Suasana Kelas yang Hangat"
              sublabel="Unggah foto dinamika kelas yang paling membekas di hati Anda"
              aspectRatio="4:3"
              caption="Suasana Kelas Matematika di SMA Negeri 3 Salatiga"
            />
            <PhotoPlaceholder
              id="refleksi_catatan_jurnal"
              label="Foto Catatan / Jurnal Harian"
              sublabel="Unggah foto buku catatan harian praktikan atau coretan jurnal refleksi"
              aspectRatio="4:3"
              caption="Jurnal Catatan Reflektif Mahasiswa PPG"
            />
          </div>
        </div>

        <BackToHomeButton />
      </div>
    </section>
  );
};
