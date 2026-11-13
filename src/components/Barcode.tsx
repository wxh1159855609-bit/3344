import { useMemo } from 'react';
import { encodeCode128B } from '../utils/code128';

interface BarcodeProps {
  value: string;
}

export function Barcode({ value }: BarcodeProps) {
  const { bars, totalWidth } = useMemo(() => encodeCode128B(value), [value]);

  return (
    <div className="flex flex-col items-center w-full select-none">
      <div className="w-[74%] max-w-[310px]">
        <svg
          viewBox={`0 0 ${totalWidth} 63`}
          className="w-full h-auto block"
          shapeRendering="crispEdges"
          role="img"
          aria-label={`条形码 ${value}`}
        >
          <rect x="0" y="0" width={totalWidth} height="63" fill="#ffffff" />
          {bars.map((bar, idx) => (
            <rect
              key={idx}
              x={bar.x}
              y={0}
              width={bar.width}
              height={63}
              fill="#000000"
            />
          ))}
        </svg>
      </div>
      <span className="mt-0.5 text-[10px] scale-[0.75] origin-top leading-none tracking-[0.02em] text-[#222222] tabular-nums">
        {value}
      </span>
    </div>
  );
}
