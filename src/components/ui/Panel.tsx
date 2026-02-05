/** Panels on Neutral 50, 8–12px radius, soft shadow (Design System §3) */
export function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-panel bg-neutral-50 p-4 md:p-6 shadow-panel border border-divider/50 ${className}`}
    >
      {children}
    </div>
  );
}
