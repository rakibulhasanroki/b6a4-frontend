"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(currentSearch);

  useEffect(() => {
    setSearch(currentSearch);
  }, [currentSearch]);

  function handleSearch() {
    const params = new URLSearchParams(searchParams.toString());

    if (search.trim()) {
      params.set("search", search.trim());
    } else {
      params.delete("search");
    }

    router.push(`/shop?${params.toString()}`);
  }

  function clearSearch() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.push(`/shop?${params.toString()}`);
  }

  return (
    <div className="flex gap-2 w-full max-w-md">
      <Input
        placeholder="Search medicine or manufacturer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {currentSearch && (
        <Button variant="outline" onClick={clearSearch}>
          ✕
        </Button>
      )}
      <Button onClick={handleSearch} className="cursor-pointer">
        Search
      </Button>
    </div>
  );
}
