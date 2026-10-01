import React from 'react';
import { Heart, GraduationCap, School, MapPin, ArrowUp } from 'lucide-react';
import { identityData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E5D2C8] bg-[#F3E5DD]/70 py-12 text-[#635F6B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
          
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#70263D] text-xs font-serif font-bold text-white">
                SN
              </span>
              <span className="font-serif text-lg font-bold text-[#70263D]">
                {identityData.nama}
              </span>
            </div>
            <p className="text-xs text-[#343238] font-medium">
              E-Portfolio 1 Praktik Mengajar Mandiri · {identityData.program}
            </p>
            <p className="text-xs text-[#635F6B]">
              {identityData.lptk} (2026) · Mitra: {identityData.sekolahPpl}
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end justify-center space-y-3">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-[#70263D] shadow-xs border border-[#E5D2C8] hover:border-[#70263D] transition"
            >
              <span>Kembali ke Paling Atas</span>
              <ArrowUp className="h-3.5 w-3.5 text-[#3155C6]" />
            </button>
            <p className="text-[11px] text-[#635F6B]">
              Refleksi, Analisis, dan Pengembangan Praktik Pembelajaran Matematika
            </p>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#E5D2C8]/70 flex flex-wrap items-center justify-between text-[11px] text-[#635F6B]">
          <span>© 2026 Sevia Nazahra · NIM: {identityData.nim}</span>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#70263D]" />
            <span className="h-2 w-2 rounded-full bg-[#D85C82]" />
            <span className="h-2 w-2 rounded-full bg-[#3155C6]" />
            <span className="h-2 w-2 rounded-full bg-[#F3D36B]" />
            <span className="ml-1 text-[#70263D] font-medium">Burgundy & Warm Blush Identity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
