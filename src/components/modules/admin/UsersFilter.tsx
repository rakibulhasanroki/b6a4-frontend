"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function UsersFilter() {
  const router = useRouter();
  const params = useSearchParams();

  function update(key: string, value: string) {
    const newParams = new URLSearchParams(params.toString());

    if (value === "all") {
      newParams.delete(key);
    } else if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }

    newParams.delete("page");

    router.push(`?${newParams.toString()}`);
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
      {/* SEARCH */}
      <Input
        placeholder="Search name or email..."
        defaultValue={params.get("search") || ""}
        onChange={(e) => update("search", e.target.value)}
        className="w-full sm:w-[280px]"
      />

      {/* ROLE */}
      <Select
        defaultValue={params.get("role") || "all"}
        onValueChange={(val) => update("role", val)}
      >
        <SelectTrigger className="w-full sm:w-[150px]">
          <SelectValue placeholder="Role" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="ADMIN">Admin</SelectItem>
          <SelectItem value="SELLER">Seller</SelectItem>
          <SelectItem value="CUSTOMER">Customer</SelectItem>
        </SelectContent>
      </Select>

      {/* STATUS */}
      <Select
        defaultValue={params.get("status") || "all"}
        onValueChange={(val) => update("status", val)}
      >
        <SelectTrigger className="w-full sm:w-[150px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="ACTIVE">Active</SelectItem>
          <SelectItem value="BANNED">Banned</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
