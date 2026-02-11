import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight max-w-xl">
            Your Trusted Online Medicine Store
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Order genuine OTC medicines, health products, and supplements —
            delivered safely to your doorstep with care.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button asChild size="lg">
              <Link href="/shop">Shop Medicines</Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="#categories">Browse Categories</Link>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block">
          <Image
            src="/hero.jpeg"
            alt="Pharmacy"
            width={600}
            height={400}
            priority
            className="rounded-2xl shadow-lg ring-1 ring-border object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
