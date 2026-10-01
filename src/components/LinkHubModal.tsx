import React, { useState } from 'react';
import { Link2, Copy, Check, ExternalLink, X, Settings } from 'lucide-react';
import { artifactCardList } from '../data/portfolioData';

interface LinkHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LinkHubModal: React.FC<LinkHubModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const linkList = [
    { id: 'link_modul_ajar', label: 'Modul Ajar Matematika', placeholder: '[LINK GOOGLE DRIVE MODUL]' },
    { id: 'link_materi_utama', label: 'Materi Pembelajaran Eksponen', placeholder: '[LINK GOOGLE DRIVE MATERI]' },
    { id: 'link_media_lkpd', label: 'Lembar Kerja Peserta Didik (LKPD)', placeholder: '[LINK GOOGLE DRIVE LKPD]' },
    { id: 'link_media_ppt', label: 'Slide Presentasi Canva', placeholder: '[LINK CANVA / SLIDES]' },
    { id: 'link_video_utama', label: 'Video Pelaksanaan Praktik Mengajar', placeholder: '[LINK VIDEO]' },
    { id: 'link_asesmen_lengkap', label: 'Instrumen Asesmen & Rubrik', placeholder: '[LINK GOOGLE DRIVE INSTRUMEN]' },
    { id: 'link_foto_dokumentasi', label: 'Foto Dokumentasi Pembelajaran', placeholder: '[LINK GOOGLE DRIVE DOKUMENTASI]' },
    { id: 'link_master_drive_kesimpulan', label: 'Drive E-Portfolio Lengkap', placeholder: '[MASUKKAN LINK DI SINI]' },
  ];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#343238]/70 p-4 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-[#E5D2C8] bg-[#FCF8F5] p-6 sm:p-8 shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-[#E5D2C8] pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#70263D] text-white">
              <Link2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#70263D]">
                Daftar Tautan Dokumen & Artefak
              </h3>
              <p className="text-xs text-[#635F6B]">
                Semua tombol tautan menggunakan format placeholder resmi yang siap Anda sambungkan ke Google Drive / Canva.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {linkList.map((item) => {
            const stored = localStorage.getItem(`link_${item.id}`);
            const displayUrl = stored || item.placeholder;
            const isCustomized = !!stored;

            return (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-[#E5D2C8] bg-white p-3.5 text-xs shadow-2xs"
              >
                <div className="min-w-0">
                  <span className="font-serif font-bold text-[#70263D] block text-sm">
                    {item.label}
                  </span>
                  <span className="font-mono text-[11px] text-[#635F6B] truncate block max-w-md">
                    {displayUrl}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {isCustomized && (
                    <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                      Tautan Aktif
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => handleCopy(item.id, displayUrl)}
                    className="inline-flex items-center gap-1 rounded-lg border border-[#E5D2C8] bg-[#FCF8F5] px-2.5 py-1.5 font-medium text-[#70263D] hover:bg-[#F9E2E9]"
                  >
                    {copiedKey === item.id ? (
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
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl bg-[#F6EDE8] p-4 text-xs text-[#635F6B] border border-[#E5D2C8]">
          <p>
            💡 <strong>Panduan:</strong> Anda dapat mengklik tombol <em>gear / pengaturan</em> di samping setiap tombol di halaman mana pun untuk memasukkan URL asli dokumen Google Drive Anda. Perubahan akan disimpan secara otomatis di peramban Anda.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-[#70263D] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#531c2d]"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
