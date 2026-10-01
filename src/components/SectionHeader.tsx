import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      <div className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#3155C6] ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#3155C6]/10 font-mono text-[11px] text-[#3155C6]">
          {number}
        </span>
        <span>Halaman {number}</span>
        <span className="h-1 w-1 rounded-full bg-[#F3D36B]" />
        <span className="text-[#D85C82]">PPG UKSW 2026</span>
      </div>

      <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#70263D] sm:text-4xl md:text-[2.6rem] md:leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-3 max-w-3xl text-sm leading-relaxed text-[#635F6B] sm:text-base ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      <div className={`mt-4 flex items-center gap-1.5 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-1 w-12 rounded-full bg-[#70263D]" />
        <div className="h-1 w-3 rounded-full bg-[#D85C82]" />
        <div className="h-1 w-2 rounded-full bg-[#3155C6]" />
        <div className="h-1 w-1 rounded-full bg-[#F3D36B]" />
      </div>
    </div>
  );
};
