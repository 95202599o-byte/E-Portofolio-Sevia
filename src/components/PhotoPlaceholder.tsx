import React, { useState, useRef } from 'react';
import { Camera, Upload, Trash2, ZoomIn, Image as ImageIcon } from 'lucide-react';

interface PhotoPlaceholderProps {
  id: string;
  label: string;
  sublabel?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:4';
  className?: string;
  caption?: string;
  defaultHint?: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  id,
  label,
  sublabel = 'Ruang dokumentasi pribadi — Klik untuk mengunggah atau mengganti foto',
  aspectRatio = '4:3',
  className = '',
  caption,
  defaultHint,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(() => {
    try {
      return localStorage.getItem(`photo_${id}`) || null;
    } catch {
      return null;
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const aspectClass = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '3:4': 'aspect-[3/4]',
  }[aspectRatio];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        alert('Ukuran file foto maksimal 8MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImageUrl(result);
        try {
          localStorage.setItem(`photo_${id}`, result);
        } catch {
          // ignore localStorage quota limit if any
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageUrl(null);
    try {
      localStorage.removeItem(`photo_${id}`);
    } catch {
      // ignore
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`group flex flex-col ${className}`}>
      <div
        onClick={() => !imageUrl && fileInputRef.current?.click()}
        className={`relative w-full overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 ${
          imageUrl
            ? 'border-[#70263D]/40 bg-[#343238] shadow-md hover:border-[#70263D]'
            : 'cursor-pointer border-[#D85C82]/40 bg-[#FCF8F5] hover:border-[#70263D] hover:bg-[#F9E2E9]/40'
        } ${aspectClass}`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={label}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Overlay controls */}
            <div className="absolute inset-0 flex items-center justify-center gap-2 bg-[#343238]/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-medium text-[#343238] shadow transition hover:bg-white"
              >
                <ZoomIn className="h-3.5 w-3.5 text-[#3155C6]" />
                Lihat Detail
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="flex items-center gap-1.5 rounded-lg bg-[#70263D] px-3 py-1.5 text-xs font-medium text-white shadow transition hover:bg-[#531c2d]"
              >
                <Upload className="h-3.5 w-3.5" />
                Ganti Foto
              </button>
              <button
                type="button"
                onClick={handleRemove}
                title="Hapus Foto"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/90 text-white shadow transition hover:bg-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
            {/* Subtle decorative mathematical grid / organic motif background */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#70263D_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F9E2E9] text-[#70263D] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#70263D] group-hover:text-white">
              <Camera className="h-7 w-7 transition-colors" />
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#3155C6] text-[10px] font-bold text-white shadow-sm">
                +
              </span>
            </div>

            <p className="font-serif text-base font-semibold tracking-wide text-[#70263D]">
              {label}
            </p>
            <p className="mt-1 max-w-xs text-xs text-[#635F6B]">
              {defaultHint || sublabel}
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[#70263D]/20 bg-white px-3 py-1.5 text-xs font-medium text-[#70263D] shadow-2xs transition-all hover:border-[#70263D] hover:bg-[#70263D] hover:text-white"
            >
              <Upload className="h-3.5 w-3.5 text-[#3155C6] group-hover:text-white" />
              Pilih Foto dari Perangkat
            </button>
          </div>
        )}

        {/* Small corner label badge */}
        <div className="absolute top-2 left-2 pointer-events-none">
          <span className="inline-flex items-center gap-1 rounded-md bg-[#FCF8F5]/90 px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase text-[#70263D] shadow-xs backdrop-blur-sm">
            <ImageIcon className="h-2.5 w-2.5 text-[#3155C6]" />
            Dokumentasi
          </span>
        </div>
      </div>

      {caption && (
        <p className="mt-2 text-center text-xs italic text-[#635F6B]">
          {caption}
        </p>
      )}

      {/* Lightbox / Zoom Modal */}
      {isModalOpen && imageUrl && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#343238]/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white p-3 shadow-2xl"
          >
            <div className="mb-2 flex items-center justify-between px-2 pt-1">
              <span className="font-serif font-semibold text-[#70263D]">
                {label}
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-1 text-gray-500 hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <img
              src={imageUrl}
              alt={label}
              className="max-h-[75vh] w-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
