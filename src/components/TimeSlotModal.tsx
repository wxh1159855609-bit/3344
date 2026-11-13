import { Check, Clock, X } from 'lucide-react';

interface TimeSlotModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlot: string;
  onSelectSlot: (slot: string) => void;
}

const AVAILABLE_SLOTS = [
  '11月14日(10点~13点)',
  '11月14日(14点~17点)',
  '11月15日(10点~13点)',
  '11月15日(14点~17点)',
  '11月16日(10点~13点)',
];

export function TimeSlotModal({
  isOpen,
  onClose,
  currentSlot,
  onSelectSlot,
}: TimeSlotModalProps) {
  if (!isOpen) return null;

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
            <Clock className="w-5 h-5 text-[#9A4129]" />
            <h2 className="text-[17px] font-semibold">修改到场时间</h2>
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

        <div className="space-y-2.5">
          {AVAILABLE_SLOTS.map((slot) => {
            const selected = slot === currentSlot;
            return (
              <button
                key={slot}
                type="button"
                onClick={() => {
                  onSelectSlot(slot);
                  onClose();
                }}
                className={`w-full min-h-[48px] px-4 py-3 rounded-xl border text-left flex items-center justify-between transition-colors ${
                  selected
                    ? 'border-[#9A4129] bg-[#9A4129]/8 text-[#9A4129] font-semibold'
                    : 'border-neutral-200 text-[#222222] hover:bg-neutral-50'
                }`}
              >
                <span className="text-[15.5px] tabular-nums">{slot}</span>
                {selected && <Check className="w-4 h-4 text-[#9A4129] shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
