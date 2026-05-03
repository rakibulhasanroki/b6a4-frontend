import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <section className="container mx-auto max-w-4xl px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-center">Terms & Conditions</h1>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          MediStore provides OTC medicines only. Users must ensure proper usage
          of products.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Orders & Payments</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Orders are processed based on availability. Payments are handled via
          cash on delivery.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Limitations</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          We are not responsible for misuse of medicines or incorrect
          self-diagnosis.
        </CardContent>
      </Card>
    </section>
  );
}
