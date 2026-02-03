import CheckoutPage from "@/components/modules/checkout/Checkout";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Checkout",
};

function Checkout() {
  return (
    <>
      <CheckoutPage />
    </>
  );
}

export default Checkout;
