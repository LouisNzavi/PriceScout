/** Logo: magnifier + £ in primary blue (Design System §7) */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="14"
        cy="14"
        r="9"
        stroke="#0077FF"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M20 20l6 6"
        stroke="#0077FF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="14"
        y="18"
        textAnchor="middle"
        fill="#0077FF"
        fontSize="12"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        £
      </text>
    </svg>
  );
}
