"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Pencil, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { updateCategoryAction } from "@/actions/category.action";

export default function UpdateCategory({
  categoryId,
  categoryName,
}: {
  categoryId: string;
  categoryName: string;
}) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(categoryName);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!name.trim() || name === categoryName) {
      setEditing(false);
      return;
    }
    const toastId = toast.loading("Updating category...");

    setLoading(true);
    const res = await updateCategoryAction({ categoryId, name });

    if (res.success) {
      toast.success(res.message, { id: toastId });
      setEditing(false);
      setLoading(false);
    } else {
      toast.error(res.message, { id: toastId });
      setLoading(false);
    }
  };

  if (!editing) {
    return (
      <div className="flex items-center gap-2">
        <span className="font-medium">{categoryName}</span>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setEditing(true)}
          className="cursor-pointer"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-8"
      />
      <Button
        size="icon"
        onClick={handleUpdate}
        disabled={loading}
        className="cursor-pointer"
      >
        <Check className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => {
          setName(categoryName);
          setEditing(false);
        }}
        className="cursor-pointer"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}
