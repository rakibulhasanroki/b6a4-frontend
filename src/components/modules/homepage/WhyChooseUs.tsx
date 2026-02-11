import { Card, CardContent } from "@/components/ui/card";

const whyChooseUsData = [
  {
    title: "Genuine Medicines",
    desc: "We provide 100% authentic and approved medicines.",
  },
  {
    title: "Fast Delivery",
    desc: "Quick and reliable delivery to your doorstep.",
  },
  {
    title: "Secure Orders",
    desc: "Your personal data are safe with us.",
  },
  {
    title: "Customer Support",
    desc: "Friendly support ready to help you anytime.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            Why Choose MediStore?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Trusted service designed for your health and convenience
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUsData.map((item) => (
            <Card key={item.title} className="transition-all hover:shadow-md">
              <CardContent className="p-6 space-y-2">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
