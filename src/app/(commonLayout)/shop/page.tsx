import ShopLayout from "@/components/modules/shop/ShopLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
};

function Shop() {
  return <ShopLayout />;
}

export default Shop;
