/**
 * Decorative SVG components — botanical and dining motifs.
 * All are aria-hidden, purely visual, never interactive.
 * Colours default to currentColor so they inherit from parent.
 */

/** Repeating field-row / topographic contour lines — used as a hero section texture overlay. */
export function FieldRowPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.045]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="crave-field-rows"
          x="0"
          y="0"
          width="480"
          height="52"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0,26 Q120,10 240,26 Q360,42 480,26"
            fill="none"
            stroke="#C9A96E"
            strokeWidth="0.9"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#crave-field-rows)" />
    </svg>
  )
}

/** Single wheat sprig — stalk with alternating grain ellipses. */
export function WheatSprig({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* stalk */}
      <line x1="12" y1="72" x2="12" y2="5" />
      {/* awn at top */}
      <line x1="12" y1="0" x2="12" y2="4" />
      {/* top grain */}
      <ellipse cx="12" cy="7" rx="3.5" ry="6" />
      {/* grain pair 1 */}
      <ellipse cx="12" cy="24" rx="3.5" ry="6" transform="rotate(-38 12 24)" />
      <ellipse cx="12" cy="30" rx="3.5" ry="6" transform="rotate(38 12 30)" />
      {/* grain pair 2 */}
      <ellipse cx="12" cy="46" rx="3" ry="5.5" transform="rotate(-35 12 46)" />
      <ellipse cx="12" cy="52" rx="3" ry="5.5" transform="rotate(35 12 52)" />
    </svg>
  )
}

/**
 * Thin horizontal rule with a small wheat-grain centrepiece.
 * Pass light/dark variant to suit background.
 */
export function GoldDivider({
  className = '',
  variant = 'light',
}: {
  className?: string
  /** 'light' for off-white/white backgrounds, 'dark' for navy backgrounds */
  variant?: 'light' | 'dark'
}) {
  const lineOpacity = variant === 'dark' ? 0.2 : 0.3
  const seedOpacity = variant === 'dark' ? 0.45 : 0.55
  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-4 ${className}`}
    >
      <div
        className="flex-1 h-px"
        style={{ background: '#C9A96E', opacity: lineOpacity }}
      />
      <svg
        viewBox="0 0 14 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[14px] h-5 flex-shrink-0"
        stroke="#C9A96E"
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={seedOpacity}
      >
        {/* stylised grain / seed */}
        <path d="M7,2 Q12,10 7,18 Q2,10 7,2 Z" />
        <line x1="7" y1="18" x2="7" y2="20" />
        <line x1="7" y1="0" x2="7" y2="2" />
      </svg>
      <div
        className="flex-1 h-px"
        style={{ background: '#C9A96E', opacity: lineOpacity }}
      />
    </div>
  )
}

/**
 * Horizontal laurel/herb branch — two curved boughs with elliptical leaves,
 * meeting at a central point. Use as a centred accent above section headings.
 */
export function LaurelBranch({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* left bough */}
      <path d="M50,18 Q34,14 12,6" />
      {/* right bough */}
      <path d="M50,18 Q66,14 88,6" />
      {/* left leaves (ellipses rotated to follow bough direction) */}
      <ellipse cx="18" cy="10" rx="6" ry="3" transform="rotate(-18 18 10)" />
      <ellipse cx="30" cy="14" rx="5.5" ry="2.5" transform="rotate(-12 30 14)" />
      <ellipse cx="42" cy="17" rx="5" ry="2.5" transform="rotate(-6 42 17)" />
      {/* right leaves */}
      <ellipse cx="82" cy="10" rx="6" ry="3" transform="rotate(18 82 10)" />
      <ellipse cx="70" cy="14" rx="5.5" ry="2.5" transform="rotate(12 70 14)" />
      <ellipse cx="58" cy="17" rx="5" ry="2.5" transform="rotate(6 58 17)" />
      {/* small centre bud */}
      <ellipse cx="50" cy="18" rx="2.5" ry="3.5" />
    </svg>
  )
}

/**
 * Large three-tine fork silhouette — intended as a subtle ghost watermark
 * at very low opacity (set opacity on the wrapper, not here).
 */
export function ForkWatermark({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 148"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* three tines */}
      <line x1="12" y1="6" x2="12" y2="56" />
      <line x1="24" y1="6" x2="24" y2="56" />
      <line x1="36" y1="6" x2="36" y2="56" />
      {/* outer tines curve into handle */}
      <path d="M12,56 Q13,68 22,74" />
      <line x1="24" y1="56" x2="24" y2="74" />
      <path d="M36,56 Q35,68 26,74" />
      {/* handle */}
      <line x1="24" y1="74" x2="24" y2="142" />
      {/* handle end oval */}
      <ellipse cx="24" cy="142" rx="4" ry="2.5" />
    </svg>
  )
}
