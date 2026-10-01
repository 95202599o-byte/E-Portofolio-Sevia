import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Compass } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'profil', label: 'Profil' },
  { id: 'perencanaan', label: 'Perencanaan' },
  { id: 'materi', label: 'Materi' },
  { id: 'media', label: 'Media' },
  { id: 'video', label: 'Video' },
  { id: 'nonmengajar', label: 'Nonmengajar' },
  { id: 'asesmen', label: 'Asesmen' },
  { id: 'refleksi', label: 'Refleksi' },
  { id: 'pengembangan', label: 'Pengembangan' },
  { id: 'artefak', label: 'Artefak' },
  { id: 'kesimpulan', label: 'Kesimpulan' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scrollspy
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -72; // height of fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#E5D2C8] bg-[#F6EDE8]/95 shadow-xs backdrop-blur-md'
          : 'border-b border-[#E5D2C8]/60 bg-[#F6EDE8]/90 backdrop-blur-xs'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand identity */}
        <button
          type="button"
          onClick={() => scrollToSection('beranda')}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#70263D] text-white shadow-xs transition-transform group-hover:scale-105">
            <span className="font-serif font-bold text-sm tracking-wider">SN</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base font-bold tracking-tight text-[#70263D] group-hover:text-[#531c2d]">
              Sevia Nazahra
            </span>
            <span className="text-[10px] font-medium tracking-wide uppercase text-[#635F6B]">
              PPG Matematika UKSW 2026
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`relative px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'text-[#70263D]'
                    : 'text-[#635F6B] hover:text-[#70263D]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#70263D]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick action button */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollToSection('beranda')}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#70263D]/25 bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#70263D] shadow-2xs transition hover:border-[#70263D] hover:bg-[#70263D] hover:text-white"
          >
            <Home className="h-3.5 w-3.5 text-[#3155C6]" />
            <span>Kembali ke Beranda</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5D2C8] bg-white/80 text-[#70263D] xl:hidden"
          aria-label="Buka Menu Navigasi"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-[#E5D2C8] bg-[#FCF8F5] px-4 pt-2 pb-6 shadow-xl xl:hidden">
          <div className="mb-3 flex items-center justify-between border-b border-[#E5D2C8] pb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#70263D]">
              Daftar Halaman Portfolio
            </span>
            <button
              type="button"
              onClick={() => scrollToSection('beranda')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#3155C6]"
            >
              <Home className="h-3.5 w-3.5" />
              Ke Beranda
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-medium transition ${
                    isActive
                      ? 'bg-[#70263D] text-white shadow-xs font-semibold'
                      : 'bg-white/60 text-[#343238] hover:bg-[#F9E2E9] hover:text-[#70263D]'
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isActive ? 'text-[#F3D36B]' : 'text-[#635F6B]'}`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-[#E5D2C8] flex items-center justify-between text-[11px] text-[#635F6B]">
            <span>SMA Negeri 3 Salatiga</span>
            <span className="text-[#3155C6] font-medium">Praktik Mengajar Mandiri</span>
          </div>
        </div>
      )}
    </header>
  );
};
