"use client";

export function Toggle({
  checked,
  onChange,
  label,
  description,
  id,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  description?: string;
  id: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-primary-hover focus-visible:ring-offset-2 ${
          checked ? "bg-primary border-primary" : "bg-neutral-50 border-divider"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-neutral-100 shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </button>
      <div className="min-w-0">
        <label htmlFor={id} className="block text-sm font-semibold text-ink">
          {label}
        </label>
        {description && (
          <p className="text-xs text-body mt-0.5">{description}</p>
        )}
      </div>
    </div>
  );
}

