import React from 'react';
import { Layers, CheckCircle2, Clock, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { ArtifactLinkButton } from '../components/ArtifactLinkButton';
import { BackToHomeButton } from '../components/BackToHomeButton';
import { mediaList } from '../data/portfolioData';

export const MediaSection: React.FC = () => {
  return (
    <section id="media" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          title="Analisis Media Pembelajaran"
          subtitle="Evaluasi efektivitas media konkret, media tayang, dan media digital matematika yang digunakan dan dikembangkan."
        />

        {/* Status Legend Info Box */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#E5D2C8] bg-white p-4 text-xs shadow-2xs">
          <div className="flex items-center gap-2 text-[#70263D] font-bold">
            <Layers className="h-4 w-4 text-[#3155C6]" />
            <span>Status Implementasi Media:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-800">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              SUDAH DIGUNAKAN (Dalam Praktik Nyata)
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-amber-800">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              MASIH DIKEMBANGKAN (Untuk Pembelajaran Berikutnya)
            </span>
          </div>
        </div>

        {/* Media Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {mediaList.map((media) => {
            const isUsed = media.status === 'SUDAH DIGUNAKAN';
            return (
              <div
                key={media.id}
                className={`relative flex flex-col justify-between rounded-3xl border p-6 sm:p-7 shadow-sm transition-all duration-300 ${
                  isUsed
                    ? 'border-[#E5D2C8] bg-white hover:border-[#70263D] hover:shadow-md'
                    : 'border-amber-300 bg-[#FCF8F5] hover:border-amber-500'
                }`}
              >
                <div>
                  {/* Top Bar with Category & Status Badge */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#E5D2C8] pb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#635F6B]">
                      {media.kategori}
                    </span>

                    {isUsed ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="h-3 w-3" />
                        SUDAH DIGUNAKAN
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-800 border border-amber-300">
                        <Clock className="h-3 w-3" />
                        MASIH DIKEMBANGKAN
                      </span>
                    )}
                  </div>

                  {/* Title & Explicit Status Note */}
                  <h3 className="mt-3 font-serif text-xl sm:text-2xl font-bold text-[#70263D]">
                    {media.nama}
                  </h3>

                  {media.statusNote && (
                    <p className={`mt-1 text-xs font-semibold ${isUsed ? 'text-[#3155C6]' : 'text-amber-800 italic'}`}>
                      {media.statusNote}
                    </p>
                  )}

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#343238]">
                    {media.deskripsi}
                  </p>

                  {/* Pedagogical Purpose & Advantages */}
                  <div className="mt-4 space-y-2.5 rounded-2xl bg-[#FCF8F5] p-4 text-xs border border-[#E5D2C8]/60">
                    <div>
                      <span className="font-bold text-[#70263D] block">
                        Tujuan Pedagogis:
                      </span>
                      <p className="mt-0.5 text-[#635F6B]">
                        {media.tujuanPedagogis}
                      </p>
                    </div>

                    <div className="border-t border-[#E5D2C8]/50 pt-2">
                      <span className="font-bold text-emerald-800 block">
                        Kelebihan / Kekuatan:
                      </span>
                      <p className="mt-0.5 text-[#343238]">
                        {media.kelebihan}
                      </p>
                    </div>

                    <div className="border-t border-[#E5D2C8]/50 pt-2">
                      <span className="font-bold text-[#3155C6] block">
                        Catatan Evaluasi Guru:
                      </span>
                      <p className="mt-0.5 text-[#635F6B]">
                        {media.catatanEvaluasi}
                      </p>
                    </div>
                  </div>

                  {/* Photo Space: Screenshot / Foto Penggunaan */}
                  <div className="mt-5">
                    <PhotoPlaceholder
                      id={`media_photo_${media.id}`}
                      label={`Screenshot / Foto ${media.nama}`}
                      sublabel="Unggah foto penggunaan media di kelas atau tampilan visual media"
                      aspectRatio="16:9"
                      caption={`Dokumentasi Media: ${media.nama}`}
                    />
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-6 flex items-center justify-between border-t border-[#E5D2C8] pt-4">
                  <span className="text-[11px] text-[#635F6B]">
                    Akses Tautan Media:
                  </span>
                  <ArtifactLinkButton
                    id={`link_media_${media.id}`}
                    defaultPlaceholder={media.linkUrl}
                    text="Lihat Media →"
                    variant={isUsed ? 'primary' : 'secondary'}
                    size="sm"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Section for Student Work Results */}
        <div className="mt-16 rounded-3xl border border-[#E5D2C8] bg-white p-7 sm:p-9 shadow-sm">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3155C6]">
              Artefak Pembelajaran
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#70263D]">
              Hasil Pekerjaan Peserta Didik Menggunakan Media
            </h3>
            <p className="text-xs text-[#635F6B]">
              Ruang dokumentasi khusus untuk menampilkan lembar kerja LKPD hasil pengerjaan kelompok dan grafik buatan siswa.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <PhotoPlaceholder
              id="hasil_pekerjaan_siswa_lkpd"
              label="Hasil Pekerjaan LKPD Siswa"
              sublabel="Unggah foto lembar LKPD yang telah dikerjakan dan dicorat-coret siswa"
              aspectRatio="4:3"
              caption="Lembar Kerja LKPD Siswa dengan Proses Penalaran Matematika"
            />
            <PhotoPlaceholder
              id="hasil_pekerjaan_siswa_grafik"
              label="Hasil Gambar Grafik / Kartu Siswa"
              sublabel="Unggah foto lembar milimeter blok atau hasil kreasi manipulatif siswa"
              aspectRatio="4:3"
              caption="Karya Siswa: Representasi Grafik Fungsi Eksponen"
            />
          </div>
        </div>

        <BackToHomeButton />
      </div>
    </section>
  );
};
