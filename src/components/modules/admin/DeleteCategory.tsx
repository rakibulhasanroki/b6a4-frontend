"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { useState } from "react";
import { deleteCategoryAction } from "@/actions/category.action";

export default function DeleteCategory({ categoryId }: { categoryId: string }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const toastId = toast.loading("Deleting category...");
    setLoading(true);

    const res = await deleteCategoryAction({ categoryId });

    if (res.success) {
      toast.success(res.message, { id: toastId });
    } else {
      toast.error(res.message, { id: toastId });
      setLoading(false);
    }
  };

  return (
    <Button
      size="icon"
      variant="destructive"
      onClick={handleDelete}
      disabled={loading}
      className="cursor-pointer"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
