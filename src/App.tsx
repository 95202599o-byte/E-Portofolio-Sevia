import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BerandaSection } from './sections/BerandaSection';
import { ProfilSection } from './sections/ProfilSection';
import { PerencanaanSection } from './sections/PerencanaanSection';
import { MateriSection } from './sections/MateriSection';
import { MediaSection } from './sections/MediaSection';
import { VideoSection } from './sections/VideoSection';
import { NonmengajarSection } from './sections/NonmengajarSection';
import { AsesmenSection } from './sections/AsesmenSection';
import { RefleksiSection } from './sections/RefleksiSection';
import { PengembanganSection } from './sections/PengembanganSection';
import { ArtefakSection } from './sections/ArtefakSection';
import { KesimpulanSection } from './sections/KesimpulanSection';
import { Footer } from './components/Footer';
import { BackToHomeButton } from './components/BackToHomeButton';
import { LinkHubModal } from './components/LinkHubModal';
import { Link2 } from 'lucide-react';

export default function App() {
  const [isLinkHubOpen, setIsLinkHubOpen] = useState(false);

  const handleExplore = () => {
    const el = document.getElementById('profil');
    if (el) {
      const yOffset = -72;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6EDE8] text-[#343238] selection:bg-[#D85C82] selection:text-white">
      {/* Sticky Fixed Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative">
        {/* Halaman 1 — Beranda */}
        <BerandaSection onExplore={handleExplore} />

        {/* Halaman 2 — Profil Guru */}
        <ProfilSection />

        {/* Halaman 3 — Analisis Rancangan/Perencanaan Pembelajaran */}
        <PerencanaanSection />

        {/* Halaman 4 — Analisis Materi Pembelajaran */}
        <MateriSection />

        {/* Halaman 5 — Analisis Media Pembelajaran */}
        <MediaSection />

        {/* Halaman 6 — Analisis Video Praktik Mengajar */}
        <VideoSection />

        {/* Halaman 7 — Kegiatan Nonmengajar */}
        <NonmengajarSection />

        {/* Halaman 8 — Instrumen Penilaian */}
        <AsesmenSection />

        {/* Halaman 9 — Refleksi Diri */}
        <RefleksiSection />

        {/* Halaman 10 — Next Step: Pengembangan Praktik Mengajar */}
        <PengembanganSection />

        {/* Halaman 11 — Dokumentasi & Artefak Pembelajaran */}
        <ArtefakSection />

        {/* Halaman 12 — Kesimpulan */}
        <KesimpulanSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Quick Link Hub trigger */}
        <button
          type="button"
          onClick={() => setIsLinkHubOpen(true)}
          title="Kelola & Salin Tautan Drive / Artefak"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E5D2C8] bg-white text-[#70263D] shadow-lg transition-all hover:scale-105 hover:bg-[#F9E2E9] active:scale-95"
        >
          <Link2 className="h-5 w-5 text-[#3155C6]" />
        </button>

        {/* Floating Back to Home button */}
        <BackToHomeButton variant="floating" />
      </div>

      {/* Link Hub Modal */}
      <LinkHubModal
        isOpen={isLinkHubOpen}
        onClose={() => setIsLinkHubOpen(false)}
      />
    </div>
  );
}
