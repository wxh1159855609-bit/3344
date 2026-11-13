import { useState } from 'react';
import { Check, Copy, MapPin, Navigation, X } from 'lucide-react';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: string;
}

export function DirectionsModal({ isOpen, onClose, address }: DirectionsModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const encodedAddress = encodeURIComponent(address);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[440px] bg-white rounded-t-3xl sm:rounded-2xl p-6 pb-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-neutral-200 rounded-full mx-auto mb-4 sm:hidden" />

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-[#111111]">
            <MapPin className="w-5 h-5 text-[#9A4129]" />
            <h2 className="text-[17px] font-semibold">前往目的地</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] -mr-2 flex items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 transition-colors"
            aria-label="关闭"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-neutral-50 border border-neutral-200/80 rounded-xl p-4 mb-5">
          <p className="text-[14px] text-neutral-500 mb-1">会场地址</p>
          <p className="text-[15px] leading-relaxed text-[#111111] font-medium">
            {address}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="w-full h-12 rounded-xl bg-[#191919] text-white text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-black active:scale-[0.99] transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>已复制地址</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>复制详细地址</span>
              </>
            )}
          </button>

          <a
            href={`https://uri.amap.com/search?keyword=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 rounded-xl border border-neutral-300 text-[#111111] text-[15px] font-medium flex items-center justify-center gap-2 hover:bg-neutral-50 active:scale-[0.99] transition-all"
          >
            <Navigation className="w-4 h-4" />
            <span>高德地图导航</span>
          </a>
        </div>
      </div>
    </div>
  );
}
