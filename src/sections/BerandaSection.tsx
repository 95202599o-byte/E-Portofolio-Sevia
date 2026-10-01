import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, School, MapPin } from 'lucide-react';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';

interface BerandaSectionProps {
  onExplore: () => void;
}

export const BerandaSection: React.FC<BerandaSectionProps> = ({ onExplore }) => {
  return (
    <section id="beranda" className="relative min-h-[92vh] pt-24 pb-16 sm:pt-28 sm:pb-20">
      {/* Delicate background decorative elements */}
      <div className="pointer-events-none absolute -top-10 right-0 -z-10 h-96 w-96 rounded-full bg-[#D85C82]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 -z-10 h-80 w-80 rounded-full bg-[#70263D]/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 -z-10 h-64 w-64 rounded-full bg-[#3155C6]/6 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Title, Identity & Pedagogical Mission */}
          <div className="flex flex-col lg:col-span-7">
            {/* Academic badge kicker */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#70263D]/20 bg-white/80 px-3.5 py-1 text-xs font-semibold text-[#70263D] shadow-2xs backdrop-blur-xs">
              <GraduationCap className="h-3.5 w-3.5 text-[#3155C6]" />
              <span>Pendidikan Profesi Guru (PPG)</span>
              <span className="text-[#635F6B]">·</span>
              <span className="text-[#3155C6]">Pendidikan Matematika 2026</span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="mt-5 space-y-2">
              <span className="block font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#D85C82]">
                E-PORTFOLIO 1
              </span>
              <h1 className="font-serif text-4xl font-extrabold tracking-tight text-[#70263D] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
                Praktik Mengajar Mandiri
              </h1>
              <p className="font-serif text-xl font-medium italic text-[#343238] sm:text-2xl">
                “Refleksi, Analisis, dan Pengembangan Praktik Pembelajaran Matematika”
              </p>
            </div>

            {/* Candidate Identity Card */}
            <div className="mt-6 rounded-2xl border border-[#E5D2C8] bg-[#FCF8F5]/90 p-5 shadow-xs backdrop-blur-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5D2C8] pb-3">
                <div>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-[#70263D]">
                    Sevia Nazahra
                  </h2>
                  <p className="text-xs font-mono text-[#635F6B]">
                    NIM: 95202599O
                  </p>
                </div>
                <div className="flex items-center gap-1.5 rounded-xl bg-[#F9E2E9] px-3 py-1 text-xs font-bold text-[#70263D]">
                  <School className="h-3.5 w-3.5 text-[#3155C6]" />
                  <span>UKSW 2026</span>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 text-[#343238]">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#3155C6]/10 text-[#3155C6]">
                    🏛️
                  </span>
                  <span><strong>LPTK:</strong> Universitas Kristen Satya Wacana</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#70263D]/10 text-[#70263D]">
                    🏫
                  </span>
                  <span><strong>Sekolah PPL:</strong> SMA Negeri 3 Salatiga</span>
                </div>
              </div>
            </div>

            {/* Core Quotes & Manifesto requested by user */}
            <div className="mt-6 space-y-3">
              <p className="text-sm font-medium leading-relaxed text-[#343238] sm:text-base">
                “E-Portfolio ini merupakan dokumentasi perjalanan saya dalam melaksanakan praktik mengajar mandiri di SMA Negeri 3 Salatiga.”
              </p>
              <p className="text-xs leading-relaxed text-[#635F6B] sm:text-sm italic border-l-2 border-[#D85C82] pl-3">
                “Bukan sekadar kumpulan dokumen, tetapi rekam proses belajar, refleksi, dan pengembangan diri sebagai calon guru matematika.”
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExplore}
                className="group inline-flex items-center gap-3 rounded-2xl bg-[#70263D] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#70263D]/25 transition-all duration-300 hover:bg-[#531c2d] hover:shadow-xl hover:shadow-[#70263D]/30 active:scale-95"
              >
                <span>Jelajahi Portfolio</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="inline-flex items-center gap-2 text-xs text-[#635F6B]">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Dokumentasi Lengkap 12 Halaman Akademik</span>
              </div>
            </div>
          </div>

          {/* Right Column: Graduation Portrait Visual & Identity Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative ring in burgundy & butter tones */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#70263D] via-[#D85C82] to-[#F3D36B]/60 opacity-30 blur-lg transition duration-500" />
              
              <div className="relative rounded-3xl border-2 border-[#E5D2C8] bg-white p-4 shadow-xl">
                {/* Visual Header Tag */}
                <div className="mb-3 flex items-center justify-between border-b border-[#E5D2C8]/70 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#70263D]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D85C82]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F3D36B]" />
                    <span className="ml-1 text-[11px] font-bold uppercase tracking-wider text-[#70263D]">
                      Foto Wisuda & Identitas
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#635F6B]">
                    Nuansa Burgundy
                  </span>
                </div>

                {/* Photo Placeholder specifically for Graduation Photo */}
                <PhotoPlaceholder
                  id="wisuda_cover"
                  label="Foto Wisuda Sevia Nazahra"
                  sublabel="Unggah foto wisuda bernuansa burgundy/maroon Anda di sini (Klik untuk mengunggah)"
                  aspectRatio="3:4"
                  defaultHint="Foto wisuda Sevia Nazahra bernuansa burgundy sebagai visual identitas utama"
                  caption="Foto Wisuda Calon Guru Profesional — Sevia Nazahra, S.Pd. (PPG UKSW)"
                />

                {/* Bottom Card Summary */}
                <div className="mt-4 rounded-xl bg-[#F6EDE8] p-3 text-center">
                  <p className="font-serif text-sm font-bold text-[#70263D]">
                    Sevia Nazahra
                  </p>
                  <p className="text-[11px] text-[#635F6B]">
                    PPG Calon Guru Matematika · SMAN 3 Salatiga · 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
