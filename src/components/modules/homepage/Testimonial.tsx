"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahim Uddin",
    text: "Very fast delivery and genuine medicines. Highly recommended!",
    image: "/user1.png",
  },
  {
    name: "Nusrat Jahan",
    text: "Easy ordering process and reliable service.",
    image: "/user2.png",
  },
  {
    name: "Tanvir Hasan",
    text: "Great experience. Cash on delivery makes it very convenient.",
    image: "/user3.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Real feedback from our users
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card
              key={item.name}
              className="h-full flex flex-col justify-between hover:shadow-md transition"
            >
              <CardContent className="p-5 flex flex-col h-full">
                {/* Top (avatar + name) */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Verified Customer
                    </p>
                  </div>
                </div>

                {/* Middle (text - controlled height) */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  “{item.text}”
                </p>

                {/* Bottom (rating stays aligned) */}
                <div className="mt-auto pt-4 text-sm text-yellow-500">
                  ★★★★★
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
