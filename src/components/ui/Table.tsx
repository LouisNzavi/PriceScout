/**
 * Dense but airy table: 14px body, 16px header, zebra, right-align numbers.
 * Design System §3 – unit price and pack price columns.
 */
export function Table({
  headers,
  children,
  className = "",
}: {
  headers: { label: string; align?: "left" | "right" }[];
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="border-b border-divider">
            {headers.map((h) => (
              <th
                key={h.label}
                className={`py-3 px-4 font-semibold text-ink text-base ${
                  h.align === "right" ? "text-right" : ""
                }`}
              >
                {h.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-body">{children}</tbody>
      </table>
    </div>
  );
}

export function TableRow({
  children,
  zebra = false,
}: {
  children: React.ReactNode;
  zebra?: boolean;
}) {
  return (
    <tr
      className={`border-b border-divider/80 ${
        zebra ? "bg-table-zebra" : "bg-neutral-100"
      }`}
    >
      {children}
    </tr>
  );
}

export function TableCell({
  children,
  align = "left",
  className = "",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}) {
  return (
    <td
      className={`py-3 px-4 ${align === "right" ? "text-right font-semibold tabular-nums" : ""} ${className}`}
    >
      {children}
    </td>
  );
}
