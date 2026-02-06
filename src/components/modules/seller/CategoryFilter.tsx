"use client";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function CategoryFilter({
  categories,
  selected,
}: {
  categories: any[];
  selected?: string;
}) {
  const router = useRouter();

  return (
    <Select
      defaultValue={selected ?? "all"}
      onValueChange={(value) => {
        if (value === "all") {
          router.push("/seller/medicines");
        } else {
          router.push(`/seller/medicines?categoryId=${value}`);
        }
      }}
    >
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Filter by category" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>

        {categories.map((cat) => (
          <SelectItem key={cat.id} value={cat.id}>
            {cat.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
