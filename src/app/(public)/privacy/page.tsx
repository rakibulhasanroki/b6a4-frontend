import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="container mx-auto max-w-4xl px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>

      <Card>
        <CardHeader>
          <CardTitle>Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          We collect basic user information such as name, email, and order
          details to provide our services.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How We Use Information</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Your data is used to process orders, improve user experience, and
          provide customer support.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Protection</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          We take reasonable measures to protect your data and do not share it
          with unauthorized third parties.
        </CardContent>
      </Card>
    </section>
  );
}
