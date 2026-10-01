import React from 'react';
import { Compass, Target, ArrowRight, CheckCircle2, TrendingUp, Calendar } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { BackToHomeButton } from '../components/BackToHomeButton';
import { roadmapData } from '../data/portfolioData';

export const PengembanganSection: React.FC = () => {
  return (
    <section id="pengembangan" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="10"
          title="Next Step: Pengembangan Praktik Mengajar"
          subtitle="Peta jalan (Roadmap) rencana aksi dan target perbaikan berkelanjutan untuk mematangkan kompetensi pedagogis dan profesional calon guru."
        />

        {/* Roadmap Concept Banner */}
        <div className="mb-10 rounded-3xl border border-[#E5D2C8] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5D2C8] pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#70263D] text-white">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#70263D]">
                  Peta Jalan Perkembangan Profesional
                </h3>
                <p className="text-xs text-[#635F6B]">
                  Berdasarkan evaluasi diri, observasi video, dan bimbingan guru pamong
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F9E2E9] px-3.5 py-1 text-xs font-bold text-[#70263D]">
              <TrendingUp className="h-3.5 w-3.5 text-[#3155C6]" />
              <span>Siklus Berkelanjutan (Continuous Improvement)</span>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#343238]">
            Proses menjadi guru profesional bukanlah garis finis yang statis, melainkan perjalanan belajar tanpa akhir. Tabel di bawah ini merangkum 6 aspek fundamental praktik mengajar, memetakan kesenjangan antara kondisi riil saat ini dengan target perbaikan, serta merumuskan tindakan konkret yang akan diimplementasikan.
          </p>
        </div>

        {/* Structured Table for Desktop */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-[#E5D2C8] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-[#E5D2C8] bg-[#FCF8F5] text-[#70263D]">
                <tr>
                  <th scope="col" className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] w-1/6">
                    Aspek Praktik
                  </th>
                  <th scope="col" className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] w-1/4">
                    Kondisi Saat Ini
                  </th>
                  <th scope="col" className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] w-1/4">
                    Target Perbaikan
                  </th>
                  <th scope="col" className="py-4 px-5 font-bold uppercase tracking-wider text-[11px] w-1/3">
                    Tindakan Nyata & Strategi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5D2C8]">
                {roadmapData.map((item, idx) => (
                  <tr
                    key={idx}
                    className="transition hover:bg-[#F9E2E9]/30"
                  >
                    <td className="py-4 px-5 align-top">
                      <div className="flex items-center gap-2 font-serif font-bold text-sm text-[#70263D]">
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#F9E2E9] text-xs font-mono text-[#70263D]">
                          {idx + 1}
                        </span>
                        <span>{item.aspek}</span>
                      </div>
                      <span className="mt-1 block text-[10px] text-[#3155C6] font-medium">
                        {item.timeline}
                      </span>
                    </td>

                    <td className="py-4 px-5 align-top text-[#635F6B] leading-relaxed">
                      {item.kondisiSaatIni}
                    </td>

                    <td className="py-4 px-5 align-top font-medium text-[#343238] leading-relaxed">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold mb-1 block">
                        <Target className="h-3 w-3" />
                        Target:
                      </span>
                      {item.targetPerbaikan}
                    </td>

                    <td className="py-4 px-5 align-top leading-relaxed text-[#343238]">
                      <div className="rounded-xl border border-[#70263D]/20 bg-[#FCF8F5] p-3 text-xs">
                        <span className="font-bold text-[#70263D] block mb-1">
                          Aksi Nyata:
                        </span>
                        {item.tindakanNyata}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile & Tablet Card Layout */}
        <div className="lg:hidden space-y-6">
          {roadmapData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#E5D2C8] bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-[#E5D2C8] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#70263D] font-mono text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#70263D]">
                    {item.aspek}
                  </h4>
                </div>
                <span className="text-[10px] font-semibold text-[#3155C6]">
                  {item.timeline}
                </span>
              </div>

              <div className="mt-4 space-y-3 text-xs">
                <div>
                  <span className="font-bold uppercase tracking-wider text-[#635F6B] block text-[10px]">
                    Kondisi Saat Ini:
                  </span>
                  <p className="mt-1 text-[#635F6B] leading-relaxed">
                    {item.kondisiSaatIni}
                  </p>
                </div>

                <div className="rounded-xl bg-[#FCF8F5] p-3 border border-[#E5D2C8]">
                  <span className="font-bold uppercase tracking-wider text-emerald-800 block text-[10px]">
                    Target Perbaikan:
                  </span>
                  <p className="mt-1 text-[#343238] font-medium leading-relaxed">
                    {item.targetPerbaikan}
                  </p>
                </div>

                <div className="rounded-xl bg-[#F9E2E9]/40 p-3 border border-[#70263D]/20">
                  <span className="font-bold uppercase tracking-wider text-[#70263D] block text-[10px]">
                    Tindakan Nyata:
                  </span>
                  <p className="mt-1 text-[#70263D] font-medium leading-relaxed">
                    {item.tindakanNyata}
                  </p>
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
