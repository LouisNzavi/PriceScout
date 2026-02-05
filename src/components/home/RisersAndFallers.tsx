import { Panel } from "@/components/ui/Panel";
import { Table, TableRow, TableCell } from "@/components/ui/Table";
import { WoWChip } from "@/components/ui/WoWChip";
import Link from "next/link";

const MOCK_RISERS = [
  { name: "Butter 250g", retailer: "Tesco", change: 8.2 },
  { name: "Pasta 500g", retailer: "Sainsbury's", change: 5.1 },
];
const MOCK_FALLERS = [
  { name: "Milk 2L", retailer: "Asda", change: -4.3 },
  { name: "Eggs x6", retailer: "Tesco", change: -2.0 },
];

export function RisersAndFallers() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8 md:px-6">
      <h2 className="text-ink font-bold text-h2 md:text-h2-lg mb-4">
        Risers &amp; Fallers
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Panel>
          <h3 className="text-ink font-semibold text-h3 mb-3">Top risers</h3>
          <Table
            headers={[
              { label: "Product" },
              { label: "Store" },
              { label: "WoW", align: "right" },
            ]}
          >
            {MOCK_RISERS.map((row, i) => (
              <TableRow key={row.name} zebra={i % 2 === 1}>
                <TableCell>
                  <Link href={`/compare?q=${encodeURIComponent(row.name)}`} className="text-primary hover:underline">
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell>{row.retailer}</TableCell>
                <TableCell align="right">
                  <WoWChip delta={row.change} />
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Panel>
        <Panel>
          <h3 className="text-ink font-semibold text-h3 mb-3">Top fallers</h3>
          <Table
            headers={[
              { label: "Product" },
              { label: "Store" },
              { label: "WoW", align: "right" },
            ]}
          >
            {MOCK_FALLERS.map((row, i) => (
              <TableRow key={row.name} zebra={i % 2 === 1}>
                <TableCell>
                  <Link href={`/compare?q=${encodeURIComponent(row.name)}`} className="text-primary hover:underline">
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell>{row.retailer}</TableCell>
                <TableCell align="right">
                  <WoWChip delta={row.change} />
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Panel>
      </div>
    </section>
  );
}
