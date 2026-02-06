import { Card } from "@/components/ui/Card";

/** "Cheapest this week" strip – cards linking to compare/product */
const MOCK_ITEMS = [
  { name: "Semi-skimmed milk 2L", retailer: "Aldi", price: "£1.29", href: "/compare?q=milk" },
  { name: "White bread 800g", retailer: "Tesco", price: "£0.85", href: "/compare?q=bread" },
  { name: "Free range eggs x6", retailer: "Sainsbury's", price: "£1.75", href: "/compare?q=eggs" },
];

export function CheapestThisWeek() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8 md:px-6">
      <h2 className="text-ink font-bold text-h2 md:text-h2-lg mb-4">
        Cheapest this week
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_ITEMS.map((item) => (
          <Card key={item.name} href={item.href}>
            <p className="font-medium text-ink">{item.name}</p>
            <p className="text-sm text-body mt-1">
              <span className="text-primary font-semibold">{item.price}</span>
              {" · "}
              {item.retailer}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
