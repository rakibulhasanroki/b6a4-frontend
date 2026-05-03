"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Suggestion = {
  id: string;
  name: string;
};

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(currentSearch);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const abortRef = useRef<AbortController | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null); // ✅ NEW

  useEffect(() => {
    setSearch(currentSearch);
  }, [currentSearch]);

  // ✅ CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setSuggestions([]);
        setActiveIndex(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // reset when empty
  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([]);
      setActiveIndex(-1);
      router.push("/shop");
    }
  }, [search, router]);

  // suggestions
  useEffect(() => {
    if (!search.trim()) return;

    const delay = setTimeout(async () => {
      try {
        setLoading(true);

        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/medicines/suggestions?q=${search}`,
          { signal: controller.signal },
        );

        const data = await res.json();
        setSuggestions(data.data || []);
        setActiveIndex(-1);
      } catch {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => clearTimeout(delay);
  }, [search]);

  function updateURL(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("search", value.trim());
    } else {
      params.delete("search");
    }

    params.delete("page");
    router.push(`/shop?${params.toString()}`);
  }

  function handleSelect(value: string) {
    setSearch(value);
    setSuggestions([]);
    setActiveIndex(-1);
    updateURL(value);
  }

  function handleSearch() {
    const value =
      activeIndex >= 0 && suggestions[activeIndex]
        ? suggestions[activeIndex].name
        : search;

    setSuggestions([]);
    setActiveIndex(-1);
    updateURL(value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    }

    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }

    if (e.key === "Escape") {
      setSuggestions([]);
      setActiveIndex(-1);
    }
  }

  function handleClear() {
    setSearch("");
    setSuggestions([]);
    setActiveIndex(-1);
    router.push("/shop");
  }

  function highlight(text: string, query: string) {
    if (!query) return text;

    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escaped})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="font-bold text-primary">
          {part}
        </span>
      ) : (
        part
      ),
    );
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="flex gap-2">
        <Input
          placeholder="Search medicine or manufacturer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {search && (
          <Button variant="outline" onClick={handleClear}>
            ✕
          </Button>
        )}

        <Button onClick={handleSearch}>Search</Button>
      </div>

      {search && suggestions.length > 0 && (
        <div className="absolute z-50 mt-2 w-full rounded-md border bg-background shadow-md">
          {suggestions.map((item, index) => (
            <div
              key={item.id}
              className={`px-3 py-2 text-sm cursor-pointer flex justify-between ${
                index === activeIndex ? "bg-muted" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleSelect(item.name)}
            >
              <span>{highlight(item.name, search)}</span>
              <span className="text-xs text-muted-foreground">Enter</span>
            </div>
          ))}
        </div>
      )}

      {loading && (
        <p className="text-xs text-muted-foreground mt-1 px-1">Searching...</p>
      )}
    </div>
  );
}
