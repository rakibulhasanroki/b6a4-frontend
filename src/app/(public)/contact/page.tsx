import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="container mx-auto max-w-4xl px-4 py-12 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground">
          Have questions or need support? We’re here to help.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-muted-foreground">
          <p>Email: inbox@medistore.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Support Hours</CardTitle>
        </CardHeader>

        <CardContent className="text-muted-foreground">
          <p>Saturday – Thursday: 9:00 AM – 8:00 PM</p>
          <p>Friday: Closed</p>
        </CardContent>
      </Card>
    </section>
  );
}
