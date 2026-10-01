import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Settings2, Link as LinkIcon } from 'lucide-react';

interface ArtifactLinkButtonProps {
  id: string;
  defaultPlaceholder: string;
  text?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'cobalt';
  size?: 'sm' | 'md' | 'lg';
}

export const ArtifactLinkButton: React.FC<ArtifactLinkButtonProps> = ({
  id,
  defaultPlaceholder,
  text = 'Buka Tautan →',
  className = '',
  variant = 'primary',
  size = 'md',
}) => {
  const [customUrl, setCustomUrl] = useState<string>(() => {
    try {
      return localStorage.getItem(`link_${id}`) || '';
    } catch {
      return '';
    }
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tempUrl, setTempUrl] = useState(customUrl);
  const [copied, setCopied] = useState(false);

  const activeUrl = customUrl.trim();
  const isActualUrl = activeUrl.startsWith('http://') || activeUrl.startsWith('https://');

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isActualUrl) {
      window.open(activeUrl, '_blank', 'noopener,noreferrer');
    } else {
      setIsDialogOpen(true);
    }
  };

  const handleSave = () => {
    const trimmed = tempUrl.trim();
    setCustomUrl(trimmed);
    try {
      if (trimmed) {
        localStorage.setItem(`link_${id}`, trimmed);
      } else {
        localStorage.removeItem(`link_${id}`);
      }
    } catch {
      // ignore
    }
    setIsDialogOpen(false);
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      window.open(trimmed, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyPlaceholder = () => {
    navigator.clipboard.writeText(defaultPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Variant styling
  const variantStyles = {
    primary:
      'bg-[#70263D] hover:bg-[#531c2d] text-white shadow-sm border border-[#70263D]',
    secondary:
      'bg-[#D85C82] hover:bg-[#b9466c] text-white shadow-sm border border-[#D85C82]',
    cobalt:
      'bg-[#3155C6] hover:bg-[#24419f] text-white shadow-sm border border-[#3155C6]',
    outline:
      'bg-transparent hover:bg-[#70263D] text-[#70263D] hover:text-white border-2 border-[#70263D]',
  }[variant];

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base font-semibold',
  }[size];

  return (
    <>
      <div className="inline-flex items-center gap-1.5">
        <button
          type="button"
          onClick={handleClick}
          title={isActualUrl ? activeUrl : defaultPlaceholder}
          className={`group inline-flex items-center gap-2 rounded-xl font-medium transition-all duration-200 active:scale-95 ${sizeStyles} ${variantStyles} ${className}`}
        >
          <span>{text}</span>
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        <button
          type="button"
          onClick={() => {
            setTempUrl(customUrl);
            setIsDialogOpen(true);
          }}
          title="Atur Tautan Dokumen (Google Drive / Canva)"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5D2C8] bg-white/80 text-[#635F6B] transition hover:border-[#70263D] hover:bg-white hover:text-[#70263D]"
        >
          <Settings2 className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Modal Dialog */}
      {isDialogOpen && (
        <div
          onClick={() => setIsDialogOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#343238]/70 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl border border-[#E5D2C8] bg-[#FCF8F5] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#E5D2C8] pb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#70263D] text-white">
                  <LinkIcon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#70263D]">
                    Tautan Hyperlink Dokumen
                  </h3>
                  <p className="text-xs text-[#635F6B]">
                    Pengaturan tautan artefak portfolio
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsDialogOpen(false)}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#70263D]">
                  Placeholder Standar:
                </label>
                <div className="mt-1 flex items-center justify-between rounded-xl border border-[#E5D2C8] bg-white px-3 py-2 text-xs font-mono text-[#343238]">
                  <span className="truncate">{defaultPlaceholder}</span>
                  <button
                    type="button"
                    onClick={handleCopyPlaceholder}
                    className="ml-2 inline-flex items-center gap-1 rounded-md bg-[#F9E2E9] px-2 py-1 text-[11px] font-semibold text-[#70263D] hover:bg-[#70263D] hover:text-white"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-600" />
                        Tersalin
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        Salin
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#70263D]">
                  Masukkan URL Asli (Google Drive / Canva / YouTube):
                </label>
                <input
                  type="url"
                  placeholder="https://drive.google.com/file/d/..."
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[#E5D2C8] bg-white px-3 py-2.5 text-sm text-[#343238] shadow-inner focus:border-[#70263D] focus:outline-none focus:ring-1 focus:ring-[#70263D]"
                />
                <p className="mt-1 text-[11px] text-[#635F6B]">
                  *Tautan tersimpan secara lokal pada browser Anda sehingga Anda dapat langsung menguji navigasi dokumen asli kapan pun.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-2 border-t border-[#E5D2C8] pt-4">
              <button
                type="button"
                onClick={() => setIsDialogOpen(false)}
                className="rounded-xl px-4 py-2 text-xs font-medium text-[#635F6B] hover:bg-gray-200"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#70263D] px-4 py-2 text-xs font-semibold text-white shadow hover:bg-[#531c2d]"
              >
                Simpan & Buka Tautan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
