/** Week-over-week change: mint for ↓ (cheaper), coral for ↑ (Design System §3) */
export function WoWChip({ delta }: { delta: number }) {
  const isFall = delta < 0;
  const label = isFall ? `↓ ${Math.abs(delta).toFixed(1)}%` : `↑ ${delta.toFixed(1)}%`;
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold ${
        isFall ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"
      }`}
      role="status"
      aria-label={isFall ? `Price down ${Math.abs(delta).toFixed(1)} percent` : `Price up ${delta.toFixed(1)} percent`}
    >
      {label}
    </span>
  );
}
