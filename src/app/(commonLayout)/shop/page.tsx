import ShopLayout, { SearchParams } from "@/components/modules/shop/ShopLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
};

async function Shop({ searchParams }: SearchParams) {
  const params = await searchParams;
  return <ShopLayout searchParams={params} />;
}

export default Shop;
