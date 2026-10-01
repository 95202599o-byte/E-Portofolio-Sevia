import React from 'react';
import { Award, GraduationCap, Heart, CheckCircle2, School, ArrowUp, HardDrive } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { ArtifactLinkButton } from '../components/ArtifactLinkButton';
import { BackToHomeButton } from '../components/BackToHomeButton';
import { identityData } from '../data/portfolioData';

export const KesimpulanSection: React.FC = () => {
  return (
    <section id="kesimpulan" className="relative scroll-mt-20 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="12"
          title="Kesimpulan"
          subtitle="Penegasan sintesis akhir dan makna perjalanan praktik mengajar mandiri."
          centered
        />

        {/* Main Philosophical Synthesis Card */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-[#70263D]/25 bg-white p-8 sm:p-12 shadow-lg">
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[#F9E2E9]/70 blur-2xl" />

          <div className="relative z-10 space-y-6 text-center sm:text-left">
            
            {/* Primary Required Statement */}
            <div className="rounded-2xl border-l-4 border-[#70263D] bg-[#FCF8F5] p-6 sm:p-8">
              <p className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed text-[#343238] font-normal">
                “Praktik mengajar mandiri menjadi pengalaman penting dalam proses saya membangun identitas sebagai guru profesional. Saya belajar bahwa pembelajaran yang baik tidak hanya ditentukan oleh kelengkapan perangkat pembelajaran, tetapi juga oleh kemampuan guru membaca kebutuhan peserta didik, mengelola kelas, memilih strategi dan media yang tepat, melakukan asesmen, serta merefleksikan praktik yang telah dilaksanakan.”
              </p>
            </div>

            {/* Secondary Required Statement */}
            <p className="text-base sm:text-lg leading-relaxed text-[#343238] font-medium text-center">
              “E-Portfolio ini bukan sekadar kumpulan dokumen, tetapi menjadi rekam proses perkembangan profesional saya sebagai calon guru matematika.”
            </p>

            {/* Closing Statement */}
            <div className="my-8 text-center border-y border-[#E5D2C8] py-8">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D85C82]">
                CLOSING STATEMENT
              </span>
              <p className="mt-2 font-serif text-3xl sm:text-4xl font-extrabold italic text-[#70263D]">
                “Setiap proses mengajar adalah proses belajar.”
              </p>
            </div>

            {/* Bottom Identity Block */}
            <div className="flex flex-col items-center justify-center text-center space-y-2 pt-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#70263D] text-white shadow-md mb-2">
                <GraduationCap className="h-7 w-7 text-[#F3D36B]" />
              </div>

              <h3 className="font-serif text-2xl font-bold tracking-tight text-[#70263D]">
                {identityData.nama}
              </h3>
              <p className="text-sm font-semibold text-[#343238]">
                {identityData.program} · {identityData.lptk} · {identityData.tahun}
              </p>
              <p className="text-xs font-medium text-[#3155C6]">
                Sekolah PPL: {identityData.sekolahPpl}
              </p>

              {/* Master Button as Demanded */}
              <div className="mt-8 pt-4">
                <ArtifactLinkButton
                  id="link_master_drive_kesimpulan"
                  defaultPlaceholder="[MASUKKAN LINK DI SINI]"
                  text="Buka E-Portfolio / Drive Lengkap →"
                  variant="primary"
                  size="lg"
                  className="shadow-xl shadow-[#70263D]/25"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Back to top anchor */}
        <div className="mt-12 text-center">
          <BackToHomeButton className="justify-center" />
        </div>
      </div>
    </section>
  );
};
