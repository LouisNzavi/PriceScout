import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", disabled, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-button px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary-hover focus-visible:ring-offset-2 disabled:opacity-50";
    const variants: Record<Variant, string> = {
      primary:
        "bg-primary text-white hover:bg-primary-hover active:bg-primary-hover",
      secondary:
        "border-2 border-primary bg-neutral-100 text-primary hover:bg-neutral-50",
      tertiary: "bg-transparent text-primary hover:bg-neutral-50",
    };
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
