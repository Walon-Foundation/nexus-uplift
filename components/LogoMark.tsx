export function LogoMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {/* Navy rounded square */}
      <rect width="100" height="100" rx="22" fill="#1a2744" />
      {/* Coral leaf */}
      <path
        d="M50 18 C34 18 25 32 28 50 C31 66 43 74 50 76 C57 74 69 66 72 50 C75 32 66 18 50 18Z"
        fill="#e85d3f"
      />
      {/* White centre vein */}
      <line
        x1="50" y1="20"
        x2="50" y2="74"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
