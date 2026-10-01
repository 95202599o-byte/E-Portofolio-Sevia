import React from 'react';
import {
  FileText,
  Clipboard,
  Presentation,
  Layers,
  Video,
  Image as ImageIcon,
  BarChart,
  HardDrive,
  ExternalLink,
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { ArtifactLinkButton } from '../components/ArtifactLinkButton';
import { BackToHomeButton } from '../components/BackToHomeButton';
import { artifactCardList } from '../data/portfolioData';

export const ArtefakSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'file-text':
        return <FileText className="h-6 w-6 text-[#70263D]" />;
      case 'clipboard':
        return <Clipboard className="h-6 w-6 text-[#3155C6]" />;
      case 'presentation':
        return <Presentation className="h-6 w-6 text-[#D85C82]" />;
      case 'layers':
        return <Layers className="h-6 w-6 text-[#70263D]" />;
      case 'video':
        return <Video className="h-6 w-6 text-[#3155C6]" />;
      case 'image':
        return <ImageIcon className="h-6 w-6 text-[#D85C82]" />;
      case 'chart':
        return <BarChart className="h-6 w-6 text-[#70263D]" />;
      default:
        return <FileText className="h-6 w-6 text-[#70263D]" />;
    }
  };

  return (
    <section id="artefak" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="11"
          title="Dokumentasi & Artefak Pembelajaran"
          subtitle="Repositori lengkap bukti autentik perangkat ajar, instrumen evaluasi, rekaman video, dan berkas digital dalam bentuk kartu interaktif ber-hyperlink."
        />

        {/* Info Banner */}
        <div className="mb-10 rounded-3xl border border-[#E5D2C8] bg-white p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#70263D] text-white shrink-0">
              <HardDrive className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#70263D]">
                Pusat Berkas & Tautan External Drive
              </h4>
              <p className="text-xs text-[#635F6B]">
                Setiap kartu terhubung langsung dengan dokumen resmi Anda di Google Drive, Canva, atau YouTube.
              </p>
            </div>
          </div>
          <div className="text-xs font-semibold text-[#3155C6] bg-[#3155C6]/10 px-3.5 py-1.5 rounded-xl border border-[#3155C6]/20">
            Tautan Dapat Disesuaikan Secara Mandiri
          </div>
        </div>

        {/* 7 Clickable Artifact Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artifactCardList.map((art) => (
            <div
              key={art.id}
              className="flex flex-col justify-between rounded-3xl border border-[#E5D2C8] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#70263D] hover:shadow-md"
            >
              <div>
                {/* Category & Icon */}
                <div className="flex items-center justify-between border-b border-[#E5D2C8] pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#635F6B]">
                    {art.kategori}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FCF8F5] border border-[#E5D2C8]">
                    {getIcon(art.tipeIcon)}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="mt-4 font-serif text-xl font-bold text-[#70263D] leading-snug">
                  {art.judul}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#635F6B]">
                  {art.deskripsi}
                </p>

                {/* Screenshot / Thumbnail Placeholder */}
                <div className="mt-5">
                  <PhotoPlaceholder
                    id={`art_thumb_${art.id}`}
                    label={`Thumbnail ${art.judul}`}
                    sublabel="Unggah screenshot halaman pertama berkas ini"
                    aspectRatio="16:9"
                    caption={`Thumbnail Berkas: ${art.judul}`}
                  />
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="mt-6 border-t border-[#E5D2C8] pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#635F6B] truncate max-w-[120px]">
                    {art.linkPlaceholder}
                  </span>
                  <ArtifactLinkButton
                    id={`link_artefak_${art.id}`}
                    defaultPlaceholder={art.linkPlaceholder}
                    text={art.tombolTeks}
                    variant="primary"
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Full Photo Gallery Space as Demanded */}
        <div className="mt-16 rounded-3xl border border-[#E5D2C8] bg-[#FCF8F5] p-7 sm:p-9 shadow-sm">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#70263D]">
              Galeri Dokumentasi Pembelajaran
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#70263D]">
              Foto Interaksi & Suasana Diskusi Kelas
            </h3>
            <p className="text-xs text-[#635F6B]">
              Ruang dokumentasi tambahan untuk foto bersama peserta didik dan kegiatan pembelajaran.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <PhotoPlaceholder
              id="foto_bersama_peserta_didik"
              label="Foto Bersama Peserta Didik"
              sublabel="Unggah foto kebersamaan dengan siswa-siswi kelas X SMAN 3 Salatiga"
              aspectRatio="16:9"
              caption="Foto Bersama Peserta Didik SMA Negeri 3 Salatiga"
            />
            <PhotoPlaceholder
              id="foto_kegiatan_sekolah_lainnya"
              label="Dokumentasi Kegiatan Sekolah"
              sublabel="Unggah foto suasana lingkungan sekolah, upacara, atau briefing guru"
              aspectRatio="16:9"
              caption="Dokumentasi Kehidupan Sekolah di SMAN 3 Salatiga"
            />
          </div>
        </div>

        <BackToHomeButton />
      </div>
    </section>
  );
};
