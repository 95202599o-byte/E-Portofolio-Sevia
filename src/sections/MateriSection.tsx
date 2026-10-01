import React, { useState } from 'react';
import { BookOpen, CheckCircle, AlertTriangle, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { ArtifactLinkButton } from '../components/ArtifactLinkButton';
import { BackToHomeButton } from '../components/BackToHomeButton';
import { materiList } from '../data/portfolioData';

export const MateriSection: React.FC = () => {
  const [selectedMateriId, setSelectedMateriId] = useState<string>(materiList[0].id);

  const activeMateri = materiList.find((m) => m.id === selectedMateriId) || materiList[0];

  return (
    <section id="materi" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          title="Analisis Materi Pembelajaran yang Telah Disusun dan Diterapkan"
          subtitle="Telaah konten matematika yang benar-benar telah diimplementasikan dalam praktik mengajar mandiri di kelas SMA Negeri 3 Salatiga."
        />

        {/* Material Selection Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#E5D2C8] pb-4">
          {materiList.map((materi, idx) => {
            const isSelected = materi.id === selectedMateriId;
            return (
              <button
                key={materi.id}
                type="button"
                onClick={() => setSelectedMateriId(materi.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#70263D] text-white shadow-sm'
                    : 'bg-white text-[#343238] border border-[#E5D2C8] hover:border-[#D85C82] hover:bg-[#F9E2E9]/50'
                }`}
              >
                <span className={`flex h-5 w-5 items-center justify-center rounded-md font-mono text-[10px] ${
                  isSelected ? 'bg-white text-[#70263D]' : 'bg-[#F9E2E9] text-[#70263D]'
                }`}>
                  {idx + 1}
                </span>
                <span>{materi.nama}</span>
              </button>
            );
          })}
        </div>

        {/* Main Material Detail Card */}
        <div className="mt-8 rounded-3xl border border-[#E5D2C8] bg-white p-6 sm:p-9 shadow-sm">
          {/* Header of Active Material */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5D2C8] pb-5">
            <div>
              <span className="inline-block rounded-md bg-[#F9E2E9] px-2.5 py-0.5 text-[11px] font-bold text-[#70263D]">
                {activeMateri.fase}
              </span>
              <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#70263D]">
                {activeMateri.nama}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <ArtifactLinkButton
                id={`link_materi_${activeMateri.id}`}
                defaultPlaceholder={activeMateri.linkDrive}
                text="Lihat Materi Lengkap →"
                variant="cobalt"
                size="md"
              />
            </div>
          </div>

          {/* 10 Analytical Parameters Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
            
            {/* Left 8 columns: Pedagogical Dimensions */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Tujuan & Konsep Utama */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#E5D2C8] bg-[#FCF8F5] p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#3155C6]">
                    Tujuan Pembelajaran
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#343238]">
                    {activeMateri.tujuan}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E5D2C8] bg-[#FCF8F5] p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#70263D]">
                    Konsep Utama
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#343238]">
                    {activeMateri.konsepUtama}
                  </p>
                </div>
              </div>

              {/* Konteks & Aktivitas */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#E5D2C8] bg-[#FCF8F5] p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D85C82]">
                    Konteks Nyata / Fenomena
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#343238]">
                    {activeMateri.konteks}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E5D2C8] bg-[#FCF8F5] p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#343238]">
                    Aktivitas Peserta Didik
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#343238]">
                    {activeMateri.aktivitas}
                  </p>
                </div>
              </div>

              {/* Artefak & Hasil Pengamatan */}
              <div className="rounded-2xl border border-[#E5D2C8] bg-white p-4">
                <div className="flex items-center justify-between border-b border-[#E5D2C8]/60 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#70263D]">
                    Artefak Terkait:
                  </span>
                  <span className="text-xs font-medium text-[#3155C6]">
                    {activeMateri.artefak}
                  </span>
                </div>
                <div className="mt-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#343238]">
                    Hasil Pengamatan di Kelas:
                  </span>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#343238]">
                    {activeMateri.hasilPengamatan}
                  </p>
                </div>
              </div>

              {/* Evaluasi: Kelebihan, Kendala & Perbaikan */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Kelebihan</span>
                  </div>
                  <p className="mt-2 text-xs text-emerald-950 leading-relaxed">
                    {activeMateri.kelebihan}
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <span>Kendala</span>
                  </div>
                  <p className="mt-2 text-xs text-amber-950 leading-relaxed">
                    {activeMateri.kendala}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#3155C6]/30 bg-[#3155C6]/5 p-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#3155C6]">
                    <Sparkles className="h-4 w-4 text-[#3155C6]" />
                    <span>Tindakan Perbaikan</span>
                  </div>
                  <p className="mt-2 text-xs text-[#343238] leading-relaxed">
                    {activeMateri.perbaikan}
                  </p>
                </div>
              </div>

            </div>

            {/* Right 4 columns: Photo / Screenshot Placeholder for Material */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
              <div className="rounded-2xl border border-[#E5D2C8] bg-[#FCF8F5] p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#70263D] block mb-2">
                  Dokumentasi Materi: {activeMateri.nama}
                </span>
                <PhotoPlaceholder
                  id={`materi_screenshot_${activeMateri.id}`}
                  label={`Screenshot Lembar ${activeMateri.nama}`}
                  sublabel="Unggah tangkapan layar materi, ringkasan rumus, atau coretan siswa"
                  aspectRatio="4:3"
                  caption={`Bukti Materi: ${activeMateri.nama}`}
                />
              </div>

              <div className="rounded-2xl border border-[#E5D2C8] bg-[#FCF8F5] p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3155C6] block mb-2">
                  Foto Aktivitas Siswa
                </span>
                <PhotoPlaceholder
                  id={`materi_aktivitas_${activeMateri.id}`}
                  label="Foto Siswa Mengerjakan Materi"
                  sublabel="Unggah foto peserta didik berdiskusi materi ini"
                  aspectRatio="4:3"
                  caption={`Aktivitas Belajar: ${activeMateri.nama}`}
                />
              </div>
            </div>

          </div>
        </div>

        <BackToHomeButton />
      </div>
    </section>
  );
};
