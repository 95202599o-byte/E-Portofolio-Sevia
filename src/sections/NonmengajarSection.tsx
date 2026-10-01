import React from 'react';
import { Users, Heart, Sparkles, Award, Calendar, BookOpen } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { BackToHomeButton } from '../components/BackToHomeButton';
import { nonTeachingActivities } from '../data/portfolioData';

export const NonmengajarSection: React.FC = () => {
  return (
    <section id="nonmengajar" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="07"
          title="Kegiatan Nonmengajar dan Kontribusi di Sekolah"
          subtitle="Partisipasi aktif dalam penguatan budaya sekolah, pembinaan karakter peserta didik, serta kegiatan kokurikuler di SMA Negeri 3 Salatiga."
        />

        {/* Introduction Quote */}
        <div className="mb-12 rounded-3xl border border-[#E5D2C8] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3155C6]">
            <Users className="h-4 w-4 text-[#70263D]" />
            <span>Ekosistem Pendidikan Holistik</span>
          </div>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#343238]">
            Menjadi pendidik seutuhnya bukan hanya tentang apa yang diajarkan di depan papan tulis kelas, melainkan tentang bagaimana seorang guru hadir, menyapa, memberikan keteladanan, serta berkontribusi nyata dalam kehidupan warga sekolah sehari-hari di SMA Negeri 3 Salatiga.
          </p>
        </div>

        {/* Timeline / Card List with Large Photo Placeholders */}
        <div className="space-y-12">
          {nonTeachingActivities.map((act, index) => (
            <div
              key={act.id}
              className="rounded-3xl border border-[#E5D2C8] bg-white p-7 sm:p-9 shadow-sm transition-all duration-300 hover:border-[#70263D] hover:shadow-md"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                
                {/* Left 7 Columns: Details & Learnings */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#70263D] font-mono text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="rounded-md bg-[#F9E2E9] px-2.5 py-0.5 text-xs font-bold text-[#70263D]">
                      {act.waktu}
                    </span>
                    <span className="text-xs text-[#635F6B]">
                      SMA Negeri 3 Salatiga
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#70263D]">
                    {act.nama}
                  </h3>

                  <div className="rounded-xl bg-[#FCF8F5] p-3 text-xs border border-[#E5D2C8]/70">
                    <span className="font-bold text-[#3155C6] block">
                      Peran Mahasiswa PPG:
                    </span>
                    <span className="text-[#343238] font-semibold text-sm">
                      {act.peran}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#635F6B]">
                      Deskripsi Kegiatan:
                    </span>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#343238]">
                      {act.deskripsi}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Kontribusi Nyata di Sekolah:
                    </span>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#343238]">
                      {act.kontribusi}
                    </p>
                  </div>

                  <div className="rounded-2xl border-l-4 border-[#70263D] bg-[#F6EDE8] p-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#70263D] flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-[#F3D36B]" />
                      Pembelajaran yang Diperoleh (Insight):
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm italic leading-relaxed text-[#343238]">
                      “{act.pembelajaran}”
                    </p>
                  </div>
                </div>

                {/* Right 5 Columns: Large Photo Placeholder */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-[#E5D2C8] bg-[#FCF8F5] p-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#70263D] block mb-2 text-center">
                      Foto Kegiatan Nonmengajar
                    </span>
                    <PhotoPlaceholder
                      id={`nonmengajar_foto_${act.id}`}
                      label={act.fotoLabel}
                      sublabel="Unggah foto dokumentasi kegiatan nonmengajar ini"
                      aspectRatio="4:3"
                      caption={`Dokumentasi Resmi: ${act.nama}`}
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <BackToHomeButton />
      </div>
    </section>
  );
};
