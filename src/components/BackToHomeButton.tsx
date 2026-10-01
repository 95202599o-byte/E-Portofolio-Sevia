import React from 'react';
import { ArrowUp, Home } from 'lucide-react';

interface BackToHomeButtonProps {
  className?: string;
  variant?: 'inline' | 'floating';
}

export const BackToHomeButton: React.FC<BackToHomeButtonProps> = ({
  className = '',
  variant = 'inline',
}) => {
  const scrollToHome = () => {
    const el = document.getElementById('beranda');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (variant === 'floating') {
    return (
      <button
        type="button"
        onClick={scrollToHome}
        aria-label="Kembali ke Beranda"
        title="Kembali ke Beranda"
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#70263D] text-white shadow-xl shadow-[#70263D]/25 transition-all duration-300 hover:scale-105 hover:bg-[#531c2d] active:scale-95 ${className}`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className={`flex items-center justify-end pt-8 pb-4 ${className}`}>
      <button
        type="button"
        onClick={scrollToHome}
        className="group inline-flex items-center gap-2 rounded-xl border border-[#E5D2C8] bg-white/80 px-4 py-2 text-xs font-semibold text-[#70263D] shadow-xs backdrop-blur-xs transition-all hover:border-[#70263D] hover:bg-[#70263D] hover:text-white hover:shadow-sm"
      >
        <Home className="h-3.5 w-3.5 text-[#3155C6] group-hover:text-white" />
        <span>Kembali ke Beranda</span>
        <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
};
