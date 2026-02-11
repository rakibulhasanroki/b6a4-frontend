"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { env } from "@/env";

const API_URL = env.NEXT_PUBLIC_API_URL;

export default function Review({ medicineId }: { medicineId: string }) {
  const [rating, setRating] = useState<number | "">("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const toastId = toast.loading("Submitting your review...", {
      position: "bottom-center",
    });
    try {
      setLoading(true);
      const data = {
        medicineId,
        rating: Number(rating),
        comment,
      };

      const res = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      const result = await res.json();
      if (!res.ok) {
        const message = result?.message?.toLowerCase().includes("duplicate")
          ? "You have already reviewed this medicine"
          : "Failed to submit review";

        toast.error(message, {
          id: toastId,
        });
        return;
      }

      toast.success("Review submitted successfully", { id: toastId });
      setComment("");
      setRating("");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-muted-foreground">
        Leave a review for this item
      </p>

      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="number"
          min={1}
          max={5}
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) =>
            setRating(e.target.value ? Number(e.target.value) : "")
          }
          className="sm:w-28 h-8 text-xs"
        />

        <Textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-15 text-xs flex-1"
        />
      </div>

      <div className="flex justify-end">
        <Button
          size="sm"
          disabled={loading}
          onClick={handleSubmit}
          className="h-8 text-xs px-4 cursor-pointer"
        >
          Submit Review
        </Button>
      </div>
    </div>
  );
}
