"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FiltersSidebar() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Categories */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Categories</h4>
          {[
            "Pain Relief",
            "Antibiotics",
            "Vitamins",
            "Diabetes Care",
            "Heart Care",
          ].map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <Checkbox id={cat} />
              <label htmlFor={cat} className="text-sm">
                {cat}
              </label>
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Max Price</h4>
          <Input type="number" placeholder="Enter max price" />
        </div>

        <Button className="w-full">Apply Filters</Button>
      </CardContent>
    </Card>
  );
}
