import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Card({ children, className = "", href }: CardProps) {
  const styles =
    "rounded-panel bg-neutral-50 p-4 md:p-5 shadow-panel border border-divider/50";
  if (href) {
    return (
      <Link
        href={href}
        className={`block ${styles} hover:shadow-md transition-shadow focus-visible:ring-2 focus-visible:ring-primary-hover focus-visible:ring-offset-2 rounded-panel ${className}`}
      >
        {children}
      </Link>
    );
  }
  return <div className={`${styles} ${className}`}>{children}</div>;
}
