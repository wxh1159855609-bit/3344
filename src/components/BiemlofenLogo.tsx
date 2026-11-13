export function BiemlofenLogo() {
  return (
    <div className="w-[78px] h-[78px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.18)] select-none">
      <svg
        viewBox="0 0 100 100"
        className="w-[70px] h-[70px]"
        role="img"
        aria-label="Biemlofen 比音勒芬"
      >
        {/* Standing gentleman/golfer silhouette */}
        <g fill="#1a1a1a">
          {/* Head */}
          <circle cx="51" cy="24.5" r="3.1" />
          {/* Torso / jacket */}
          <path d="M47.5 28.5 C49 27.8, 53 27.8, 54.5 28.8 L56 42.5 L53.5 43 L53 56.5 L50.8 56.5 L50.4 44 L49.4 44 L48.8 56.5 L46.6 56.5 L47.2 42.5 L46 39.5 Z" />
          {/* Left arm holding cane/club */}
          <path d="M47.8 29.5 L44.8 36.5 L46.3 37.2 L48.5 31.5 Z" />
          {/* Thin golf club / cane */}
          <rect x="44.8" y="36.2" width="1.1" height="20.3" rx="0.4" />
        </g>

        {/* "Biem" on the left */}
        <text
          x="26.5"
          y="48"
          textAnchor="middle"
          fill="#1a1a1a"
          fontSize="12.5"
          fontStyle="italic"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="600"
          letterSpacing="-0.3"
        >
          Biem
        </text>

        {/* "lofen" on the right */}
        <text
          x="74.5"
          y="48"
          textAnchor="middle"
          fill="#1a1a1a"
          fontSize="12.5"
          fontStyle="italic"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="600"
          letterSpacing="-0.3"
        >
          lofen
        </text>

        {/* "比音勒芬" underneath */}
        <text
          x="50"
          y="69"
          textAnchor="middle"
          fill="#1a1a1a"
          fontSize="10.2"
          fontFamily="'PingFang SC', 'Noto Sans SC', 'Microsoft YaHei', sans-serif"
          fontWeight="500"
          letterSpacing="1.8"
        >
          比音勒芬
        </text>
      </svg>
    </div>
  );
}
