import CartPage from "@/components/modules/cart/CartPage";
import { userService } from "@/services/user.services";
import { Role } from "@/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Cart",
};

async function Cart() {
  const { data: session, error } = await userService.getSession();

  if (session?.user && session.user.role !== Role.customer) {
    redirect("/");
  }
  return (
    <>
      <CartPage />
    </>
  );
}

export default Cart;
