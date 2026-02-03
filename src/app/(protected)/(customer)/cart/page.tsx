import CartPage from "@/components/modules/cart/CartPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cart",
};

function Cart() {
  return (
    <>
      <CartPage />
    </>
  );
}

export default Cart;
