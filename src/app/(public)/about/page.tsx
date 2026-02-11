import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-12 space-y-14">
      <div className="text-center space-y-3">
        <Badge variant="secondary">OTC Medicine Store</Badge>

        <h1 className="text-4xl font-bold tracking-tight">About MediStore</h1>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          MediStore is an online platform dedicated to making over-the-counter
          (OTC) medicines easily accessible, reliable, and convenient for
          everyone.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Who We Are</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            MediStore was created to simplify access to essential healthcare
            products. We connect customers with trusted sellers who provide
            genuine OTC medicines that are safe and legally approved.
          </p>

          <p>
            Our goal is to ensure that customers can order everyday medicines
            online with confidence, transparency, and ease—without unnecessary
            complexity.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Over-the-Counter Medicines
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            We sell only OTC medicines that do not require a prescription and
            comply with applicable regulations.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Trusted & Verified Sellers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            All sellers on MediStore are reviewed to help ensure product
            quality, authenticity, and responsible selling.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Cash on Delivery</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Customers can pay upon delivery, making the ordering process simple,
            familiar, and accessible.
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Why MediStore?</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-muted-foreground">
          <ul className="list-disc list-inside space-y-2">
            <li>Clear and accurate medicine information</li>
            <li>Simple and user-friendly ordering experience</li>
            <li>Focus on safety and responsible medicine access</li>
            <li>No prescription required for listed products</li>
            <li>Convenient cash-on-delivery service</li>
          </ul>

          <Separator />

          <p>
            MediStore is designed for people who value convenience and trust
            when purchasing everyday medicines online.
          </p>
        </CardContent>
      </Card>

      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-xl font-semibold">Supporting Everyday Health</h2>
        <p className="text-muted-foreground">
          From common health needs to essential OTC products, MediStore is here
          to help you take care of yourself with confidence.
        </p>
      </div>
    </section>
  );
}
