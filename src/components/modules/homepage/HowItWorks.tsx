import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Browse Medicines",
    desc: "Explore categories and find the medicines you need.",
  },
  {
    title: "Add to Cart",
    desc: "Select your products and add them to your cart.",
  },
  {
    title: "Cash on Delivery",
    desc: "Place your order and pay when it arrives.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            How It Works
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Simple steps to order your medicines
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title}>
              <CardContent className="p-6 space-y-2">
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
