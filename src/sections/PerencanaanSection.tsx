import React, { useState } from 'react';
import { FileText, CheckCircle2, ChevronRight, BookOpen, Lightbulb, Compass, Award } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { ArtifactLinkButton } from '../components/ArtifactLinkButton';
import { BackToHomeButton } from '../components/BackToHomeButton';
import { modulAnalysisPoints } from '../data/portfolioData';

export const PerencanaanSection: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<number>(1);

  const activePoint = modulAnalysisPoints.find((p) => p.id === selectedPoint) || modulAnalysisPoints[0];

  return (
    <section id="perencanaan" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          title="Analisis Rancangan/Perencanaan Pembelajaran"
          subtitle="Kajian kritis-pedagogis terhadap Modul Ajar Matematika yang dirancang dan diimplementasikan pada praktik mandiri di SMA Negeri 3 Salatiga."
        />

        {/* Top Banner: Module Preview & Link Action */}
        <div className="rounded-3xl border border-[#E5D2C8] bg-white p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-md bg-[#F9E2E9] px-2.5 py-1 text-xs font-bold text-[#70263D]">
                <FileText className="h-3.5 w-3.5 text-[#3155C6]" />
                <span>Dokumen Resmi Rancangan Pembelajaran</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#70263D]">
                Modul Ajar Matematika: Eksponen & Fungsi Eksponen
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#635F6B]">
                Modul Ajar dirancang sesuai prinsip Kurikulum Merdeka Fase E, mengintegrasikan pendekatan Problem-Based Learning (PBL), penemuan terbimbing (Guided Discovery), diferensiasi proses, dan pembelajaran kontekstual berbasis fenomena nyata.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <ArtifactLinkButton
                  id="link_modul_ajar"
                  defaultPlaceholder="[LINK GOOGLE DRIVE MODUL]"
                  text="Buka Modul/Rancangan Lengkap →"
                  variant="primary"
                  size="md"
                />
                <span className="text-xs text-[#635F6B]">
                  *Format: Google Docs / PDF Lengkap
                </span>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-[#E5D2C8] bg-[#FCF8F5] p-3 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#3155C6]">
                  Preview Sampul Modul Ajar
                </span>
                <div className="mt-2 aspect-[4/3] rounded-xl overflow-hidden border border-[#E5D2C8]">
                  <PhotoPlaceholder
                    id="preview_modul_ajar"
                    label="Screenshot Modul Ajar"
                    sublabel="Unggah tangkapan layar halaman judul modul ajar di sini"
                    aspectRatio="4:3"
                    caption="Halaman Sampul Modul Ajar Matematika Fase E"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 12 Pedagogical Dimensions Interactive Grid */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3155C6]">
                Kajian Mendalam
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#70263D]">
                12 Dimensi Analisis Pedagogis Modul
              </h3>
            </div>
            <span className="hidden sm:inline text-xs text-[#635F6B]">
              Klik poin untuk membaca telaah kritis
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
            {/* Left list of 12 points */}
            <div className="lg:col-span-5 space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {modulAnalysisPoints.map((point) => {
                const isActive = point.id === selectedPoint;
                return (
                  <button
                    key={point.id}
                    type="button"
                    onClick={() => setSelectedPoint(point.id)}
                    className={`w-full rounded-2xl p-3.5 text-left transition-all flex items-center justify-between border ${
                      isActive
                        ? 'border-[#70263D] bg-[#70263D] text-white shadow-md'
                        : 'border-[#E5D2C8] bg-white text-[#343238] hover:border-[#D85C82] hover:bg-[#F9E2E9]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-lg font-mono text-xs font-bold shrink-0 ${
                          isActive
                            ? 'bg-white text-[#70263D]'
                            : 'bg-[#FCF8F5] text-[#3155C6] border border-[#E5D2C8]'
                        }`}
                      >
                        {String(point.id).padStart(2, '0')}
                      </span>
                      <div className="truncate">
                        <span className="block text-xs font-bold truncate">
                          {point.label}
                        </span>
                        <span
                          className={`block text-[11px] truncate ${
                            isActive ? 'text-white/80' : 'text-[#635F6B]'
                          }`}
                        >
                          {point.ringkasan}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        isActive ? 'rotate-90 text-white' : 'text-[#635F6B]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Reading Panel */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#E5D2C8] bg-white p-7 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#E5D2C8] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#70263D] font-mono text-sm font-bold text-white">
                      {String(activePoint.id).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#3155C6]">
                        Dimensi Analisis {activePoint.id} dari 12
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#70263D]">
                        {activePoint.label}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#343238] flex items-center gap-2">
                      <BookOpen className="h-3.5 w-3.5 text-[#3155C6]" />
                      Deskripsi Pelaksanaan Rancangan:
                    </h5>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#343238]">
                      {activePoint.deskripsi}
                    </p>
                  </div>

                  <div className="rounded-2xl border-l-4 border-[#70263D] bg-[#FCF8F5] p-5">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#70263D] flex items-center gap-2">
                      <Lightbulb className="h-3.5 w-3.5 text-[#F3D36B]" />
                      Alasan Pedagogis & Refleksi Kritis:
                    </h5>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#343238] italic">
                      “{activePoint.refleksiPedagogis}”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Photo & Documentation Grid as Requested */}
        <div className="mt-16">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#70263D]">
              Ruang Bukti Fisik
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#70263D]">
              Dokumentasi Perencanaan & Pelaksanaan di Kelas
            </h3>
            <p className="text-xs text-[#635F6B]">
              Tiga ruang foto proporsional untuk tangkapan layar modul, alur pembelajaran, dan foto saat pembelajaran berlangsung.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PhotoPlaceholder
              id="perencanaan_screenshot_modul"
              label="Screenshot Modul Ajar"
              sublabel="Tangkapan layar lembar modul atau sintaks RPP"
              aspectRatio="4:3"
              caption="Bukti Fisik: Dokumen Modul Ajar Kurikulum Merdeka"
            />
            <PhotoPlaceholder
              id="perencanaan_foto_pembelajaran"
              label="Foto Saat Pembelajaran"
              sublabel="Dokumentasi interaksi guru dan peserta didik di kelas"
              aspectRatio="4:3"
              caption="Implementasi Modul di Kelas Matematika SMAN 3 Salatiga"
            />
            <PhotoPlaceholder
              id="perencanaan_diagram_alur"
              label="Diagram Alur Pembelajaran"
              sublabel="Bagan alur sintaks PBL dan diferensiasi materi"
              aspectRatio="4:3"
              caption="Diagram Alur: Sintaks Problem-Based Learning"
            />
          </div>
        </div>

        <BackToHomeButton />
      </div>
    </section>
  );
};
