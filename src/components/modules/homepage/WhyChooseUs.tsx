import { Card, CardContent } from "@/components/ui/card";

function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-12">Why Choose MediStore?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {[
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
              desc: "Your prescriptions and personal data are safe with us.",
            },
            {
              title: "Customer Support",
              desc: "Friendly support ready to help you anytime.",
            },
          ].map((item) => (
            <Card key={item.title} className="hover:shadow-md transition">
              <CardContent>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
