import React from 'react';
import { ClipboardCheck, CheckSquare, Target, BarChart2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { ArtifactLinkButton } from '../components/ArtifactLinkButton';
import { BackToHomeButton } from '../components/BackToHomeButton';
import { assessmentItems } from '../data/portfolioData';

export const AsesmenSection: React.FC = () => {
  return (
    <section id="asesmen" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          title="Instrumen Penilaian dan Analisisnya"
          subtitle="Sistem evaluasi komprehensif (Asesmen Diagnostik, Formatif, Sumatif, Observasi, dan Refleksi Siswa) dengan pelaporan hasil berinisial kode peserta didik."
        />

        {/* Ethical Notice Box */}
        <div className="mb-8 rounded-2xl border border-[#3155C6]/30 bg-[#3155C6]/5 p-4 text-xs text-[#343238] flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-[#3155C6] shrink-0" />
          <span>
            <strong>Etika Kerahasiaan Data Akademik Peserta Didik:</strong> Sesuai kaidah profesional dan kode etik penelitian tindakan kelas/PPG, seluruh identitas peserta didik SMA Negeri 3 Salatiga disamarkan menggunakan kode inisial (contoh: <code>S-01</code>, <code>S-02</code>, dst.).
          </span>
        </div>

        {/* Assessment Cards Grid */}
        <div className="space-y-8">
          {assessmentItems.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#E5D2C8] bg-white p-6 sm:p-8 shadow-sm transition hover:border-[#70263D] hover:shadow-md"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5D2C8] pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#70263D] font-mono text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#3155C6]">
                      {item.kategori}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#70263D]">
                      {item.nama}
                    </h3>
                  </div>
                </div>

                <ArtifactLinkButton
                  id={`link_asesmen_${item.id}`}
                  defaultPlaceholder={item.linkDrive}
                  text="Lihat Instrumen →"
                  variant="primary"
                  size="sm"
                />
              </div>

              {/* 8 Dimensional Analysis Grid */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs">
                
                <div className="rounded-xl border border-[#E5D2C8] bg-[#FCF8F5] p-3.5">
                  <span className="font-bold text-[#70263D] block uppercase tracking-wider text-[10px]">
                    1. Tujuan Asesmen
                  </span>
                  <p className="mt-1 text-[#343238] leading-relaxed">
                    {item.tujuan}
                  </p>
                </div>

                <div className="rounded-xl border border-[#E5D2C8] bg-[#FCF8F5] p-3.5">
                  <span className="font-bold text-[#3155C6] block uppercase tracking-wider text-[10px]">
                    2. Kompetensi yang Diukur
                  </span>
                  <p className="mt-1 text-[#343238] leading-relaxed">
                    {item.kompetensi}
                  </p>
                </div>

                <div className="rounded-xl border border-[#E5D2C8] bg-[#FCF8F5] p-3.5">
                  <span className="font-bold text-[#D85C82] block uppercase tracking-wider text-[10px]">
                    3. Indikator Ketercapaian
                  </span>
                  <p className="mt-1 text-[#343238] leading-relaxed">
                    {item.indikator}
                  </p>
                </div>

                <div className="rounded-xl border border-[#E5D2C8] bg-[#FCF8F5] p-3.5">
                  <span className="font-bold text-[#343238] block uppercase tracking-wider text-[10px]">
                    4. Bentuk Instrumen
                  </span>
                  <p className="mt-1 text-[#343238] leading-relaxed">
                    {item.bentuk}
                  </p>
                </div>

                <div className="rounded-xl border border-[#E5D2C8] bg-white p-3.5">
                  <span className="font-bold text-[#70263D] block uppercase tracking-wider text-[10px]">
                    5. Kriteria Penilaian
                  </span>
                  <p className="mt-1 text-[#635F6B] leading-relaxed">
                    {item.kriteria}
                  </p>
                </div>

                <div className="rounded-xl border border-[#E5D2C8] bg-white p-3.5">
                  <span className="font-bold text-[#3155C6] block uppercase tracking-wider text-[10px]">
                    6. Pedoman Penskoran
                  </span>
                  <p className="mt-1 text-[#635F6B] leading-relaxed">
                    {item.penskoran}
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3.5">
                  <span className="font-bold text-emerald-800 block uppercase tracking-wider text-[10px]">
                    7. Hasil Pengamatan (Inisial Siswa)
                  </span>
                  <p className="mt-1 text-emerald-950 font-medium leading-relaxed">
                    {item.hasilInisial}
                  </p>
                </div>

                <div className="rounded-xl border border-[#70263D]/20 bg-[#F9E2E9]/40 p-3.5">
                  <span className="font-bold text-[#70263D] block uppercase tracking-wider text-[10px]">
                    8. Tindak Lanjut Guru
                  </span>
                  <p className="mt-1 text-[#70263D] font-medium leading-relaxed">
                    {item.tindakLanjut}
                  </p>
                </div>

              </div>

              {/* Photo space for assessment paper / rubric sheet */}
              <div className="mt-5">
                <PhotoPlaceholder
                  id={`asesmen_doc_${item.id}`}
                  label={`Dokumentasi Bukti Instrumen: ${item.nama}`}
                  sublabel="Unggah foto lembar instrumen, lembar kuis terisi, atau rubrik penilaian"
                  aspectRatio="16:9"
                  caption={`Bukti Instrumen & Catatan Penskoran: ${item.nama}`}
                />
              </div>
            </div>
          ))}
        </div>

        <BackToHomeButton />
      </div>
    </section>
  );
};
