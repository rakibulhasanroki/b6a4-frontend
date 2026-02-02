"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/actions/category.action";
import { Category } from "@/types";

export default function FiltersSidebar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("categoryId");
  const currentPrice = searchParams.get("maxPrice") || "";
  const [maxPrice, setMaxPrice] = useState(currentPrice || " ");

  useEffect(() => {
    (async () => {
      const { data } = await getCategories();
      if (data) {
        setCategories(data);
      }
    })();
  }, []);

  useEffect(() => {
    setMaxPrice(currentPrice);
  }, [currentPrice]);

  function applyFilters() {
    const params = new URLSearchParams(searchParams.toString());
    if (maxPrice) {
      params.set("maxPrice", maxPrice);
    } else {
      params.delete("maxPrice");
    }
    params.delete("page");
    router.push(`/shop?${params.toString()}`);
  }

  function handleCategoryChange(categoryId: string) {
    const params = new URLSearchParams(searchParams.toString());
    const currentCategory = params.get("categoryId");

    if (currentCategory === categoryId) {
      params.delete("categoryId");
    } else {
      params.set("categoryId", categoryId);
    }
    params.delete("page");
    router.push(`/shop?${params.toString()}`);
  }

  function clearSearch() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("maxPrice");
    router.push(`/shop?${params.toString()}`);
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Categories */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Categories</h4>
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center space-x-2">
              <Checkbox
                id={cat.id}
                checked={currentCategory === cat.id}
                onCheckedChange={() => handleCategoryChange(cat.id)}
              />
              <label htmlFor={cat.id} className="text-sm">
                {cat.name}
              </label>
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Max Price</h4>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Enter max price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            {currentPrice && (
              <Button variant="outline" onClick={clearSearch}>
                ✕
              </Button>
            )}
          </div>
        </div>

        <Button className="w-full" onClick={applyFilters}>
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  );
}
