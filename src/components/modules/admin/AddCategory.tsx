"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { addCategoryAction } from "@/actions/category.action";

export default function AddCategoryForm() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!name.trim()) return;
    const toastId = toast.loading("Adding category...");

    setLoading(true);
    const res = await addCategoryAction({ name });

    if (res.success) {
      toast.success(res.message, { id: toastId });
      setName("");
    } else {
      toast.error(res.message, { id: toastId });
    }

    setLoading(false);
  };

  return (
    <div className="flex w-full items-center gap-2 sm:w-auto">
      <Input
        placeholder="New category"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="sm:w-64"
      />
      <Button onClick={handleAdd} disabled={loading} className="cursor-pointer">
        Add
      </Button>
    </div>
  );
}
