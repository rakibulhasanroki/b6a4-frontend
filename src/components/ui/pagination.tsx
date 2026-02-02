"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

interface PaginationControlsProps {
  meta: {
    limit: number;
    page: number;
    total: number;
    totalPages: number;
  };
}

export default function PaginationControls({ meta }: PaginationControlsProps) {
  const { limit, page: currentPage, total, totalPages } = meta;

  const searchParams = useSearchParams();
  const router = useRouter();

  const navigateToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, total);

  if (totalPages <= 1) return null;

  return (
    <Card className="mt-8 p-0.5">
      <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Showing <span className="font-medium">{start}</span> to{" "}
          <span className="font-medium">{end}</span> of{" "}
          <span className="font-medium">{total}</span> results
        </p>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateToPage(1)}
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <span className="text-sm font-medium px-2">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateToPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
