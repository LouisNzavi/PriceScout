import { ProductPageClient } from "@/components/product/ProductPageClient";

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductPageClient productId={params.id} />;
}
