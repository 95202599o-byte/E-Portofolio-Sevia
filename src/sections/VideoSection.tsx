import React, { useState } from 'react';
import { Play, Video, ExternalLink, FileEdit, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { ArtifactLinkButton } from '../components/ArtifactLinkButton';
import { BackToHomeButton } from '../components/BackToHomeButton';
import { videoObservationData } from '../data/portfolioData';

export const VideoSection: React.FC = () => {
  const [videoUrlInput, setVideoUrlInput] = useState<string>(() => {
    try {
      return localStorage.getItem('video_embed_url') || '';
    } catch {
      return '';
    }
  });

  const [activeVideoUrl, setActiveVideoUrl] = useState<string>(videoUrlInput);
  const [isEditingUrl, setIsEditingUrl] = useState(false);

  const handleSaveVideoUrl = () => {
    const trimmed = videoUrlInput.trim();
    setActiveVideoUrl(trimmed);
    try {
      if (trimmed) {
        localStorage.setItem('video_embed_url', trimmed);
      } else {
        localStorage.removeItem('video_embed_url');
      }
    } catch {
      // ignore
    }
    setIsEditingUrl(false);
  };

  // Convert youtube watch URL to embed URL if needed
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('drive.google.com/file/d/')) {
      return url.replace('/view', '/preview');
    }
    return url;
  };

  const embedSource = getEmbedUrl(activeVideoUrl);

  return (
    <section id="video" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          title="Analisis Video Pelaksanaan Praktik Mengajar Mandiri"
          subtitle="Observasi terperinci terhadap rekaman video pengajaran mandiri di kelas matematika SMA Negeri 3 Salatiga berdasarkan 8 aspek performa guru."
        />

        {/* Large Video Area */}
        <div className="rounded-3xl border border-[#E5D2C8] bg-white p-6 sm:p-8 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border-b border-[#E5D2C8] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3155C6]">
                Dokumentasi Audio-Visual Pembelajaran
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#70263D]">
                Rekaman Pelaksanaan Praktik Mengajar Mandiri
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <ArtifactLinkButton
                id="link_video_utama"
                defaultPlaceholder="[LINK VIDEO]"
                text="Buka Video Lengkap →"
                variant="cobalt"
                size="md"
              />
            </div>
          </div>

          {/* Video Player or Embed Simulator */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-[#70263D]/30 bg-[#343238] shadow-inner">
            {embedSource ? (
              <iframe
                src={embedSource}
                title="Video Praktik Mengajar Sevia Nazahra"
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#70263D] text-[#F3D36B] shadow-lg transition-transform hover:scale-105">
                  <Play className="h-8 w-8 ml-1" />
                </div>
                <span className="font-mono text-sm font-bold tracking-widest uppercase text-[#F3D36B]">
                  [EMBED VIDEO DI SINI]
                </span>
                <p className="mt-2 max-w-md text-xs sm:text-sm text-gray-300">
                  Tautan video dapat bersumber dari Google Drive, YouTube (Unlisted), atau platform video pembelajaran lainnya.
                </p>

                <button
                  type="button"
                  onClick={() => setIsEditingUrl(!isEditingUrl)}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xs transition hover:bg-white/20"
                >
                  <FileEdit className="h-3.5 w-3.5 text-[#F3D36B]" />
                  <span>Masukkan Tautan Embed Video</span>
                </button>
              </div>
            )}
          </div>

          {/* Input helper to paste embed url */}
          {isEditingUrl && (
            <div className="mt-4 rounded-2xl border border-[#E5D2C8] bg-[#FCF8F5] p-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=... atau link Google Drive"
                  value={videoUrlInput}
                  onChange={(e) => setVideoUrlInput(e.target.value)}
                  className="w-full rounded-xl border border-[#E5D2C8] bg-white px-3 py-2 text-xs text-[#343238] focus:border-[#70263D] focus:outline-none"
                />
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleSaveVideoUrl}
                    className="rounded-xl bg-[#70263D] px-4 py-2 text-xs font-bold text-white hover:bg-[#531c2d]"
                  >
                    Tampilkan Video
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingUrl(false)}
                    className="rounded-xl px-3 py-2 text-xs text-[#635F6B] hover:bg-gray-200"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-[#635F6B]">
            <span>Lokasi: Kelas X SMAN 3 Salatiga</span>
            <span>Durasi: 2 × 45 Menit (Siklus Mandiri)</span>
          </div>
        </div>

        {/* 8 Observational Analysis Cards (A to H) */}
        <div className="mt-14">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#70263D]">
              Evaluasi Objektif
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#70263D]">
              Analisis 8 Aspek Berdasarkan Pengamatan Video
            </h3>
            <p className="text-xs text-[#635F6B]">
              Refleksi jujur terhadap bukti faktual rekaman tanpa klaim yang tidak tampak pada video.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {videoObservationData.map((obs) => (
              <div
                key={obs.kode}
                className="rounded-3xl border border-[#E5D2C8] bg-white p-6 shadow-sm transition hover:border-[#70263D] hover:shadow-md"
              >
                <div className="flex items-center justify-between border-b border-[#E5D2C8] pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#70263D] font-mono text-sm font-bold text-white">
                      {obs.kode}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#70263D]">
                      {obs.aspek}
                    </h4>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#635F6B]">
                    Fokus Pengamatan:
                  </span>
                  <p className="text-xs text-[#635F6B]">
                    {obs.fokusObservasi}
                  </p>
                </div>

                <div className="mt-3 rounded-2xl bg-[#FCF8F5] p-3.5 border border-[#E5D2C8]/60">
                  <span className="text-xs font-bold text-[#343238] block">
                    Fakta Pelaksanaan yang Tampak di Rekaman:
                  </span>
                  <p className="mt-1 text-xs leading-relaxed text-[#343238]">
                    {obs.analisisPelaksanaan}
                  </p>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs">
                  <div className="rounded-xl bg-emerald-50 p-2.5 border border-emerald-200">
                    <span className="font-bold text-emerald-800 block text-[11px]">
                      ✓ Kelebihan Teramati:
                    </span>
                    <p className="mt-0.5 text-emerald-950 text-[11px] leading-snug">
                      {obs.kelebihanTampak}
                    </p>
                  </div>

                  <div className="rounded-xl bg-amber-50 p-2.5 border border-amber-200">
                    <span className="font-bold text-amber-800 block text-[11px]">
                      ⚠ Area Perbaikan:
                    </span>
                    <p className="mt-0.5 text-amber-950 text-[11px] leading-snug">
                      {obs.halPerluDitingkatkan}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Catatan Berdasarkan Pengamatan Video */}
        <div className="mt-14 rounded-3xl border border-[#E5D2C8] bg-[#FCF8F5] p-7 sm:p-9 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#70263D]">
            <FileEdit className="h-4 w-4 text-[#3155C6]" />
            <span>Refleksi Berbasis Bukti Nyata</span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-[#70263D]">
            Catatan Berdasarkan Pengamatan Video
          </h3>
          <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[#343238]">
            <p>
              Menonton ulang rekaman praktik mengajar mandiri memberikan perspektif sudut pandang orang ketiga (third-person view) yang sangat berharga bagi saya. Rekaman membuktikan bahwa interaksi verbal antara guru dan peserta didik berlangsung bersahabat dan siswa tidak segan untuk mengangkat tangan ketika menemukan kebuntuan pada soal bertingkat.
            </p>
            <p>
              Namun demikian, video juga menunjukkan secara transparan bahwa ritme transisi dari diskusi kelompok menuju penutupan sempat tergesa-gesa karena guru terlalu lama melayani klarifikasi pertanyaan pada salah satu kelompok. Hal ini menjadi catatan koreksi diri yang sangat nyata untuk pembelajaran berikutnya: guru harus senantiasa memiliki kesadaran waktu (temporal awareness) yang ketat di dalam kelas.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E5D2C8] flex flex-wrap items-center justify-between text-xs text-[#635F6B]">
            <span>Sumber Refleksi: Video Rekaman Siklus 1 SMAN 3 Salatiga</span>
            <span className="font-semibold text-[#70263D]">Catatan Terverifikasi Pengamatan Mandiri</span>
          </div>
        </div>

        {/* Photo Space: Video Cuplikan / Lembar Catatan Pamong */}
        <div className="mt-12">
          <PhotoPlaceholder
            id="video_cuplikan_pamong"
            label="Screenshot Cuplikan Video / Catatan Pamong"
            sublabel="Unggah tangkapan layar momen penting di video atau lembar catatan pengamatan guru pamong"
            aspectRatio="16:9"
            caption="Tangkapan Layar Bukti Pelaksanaan Mengajar Mandiri & Catatan Guru Pamong"
          />
        </div>

        <BackToHomeButton />
      </div>
    </section>
  );
};
