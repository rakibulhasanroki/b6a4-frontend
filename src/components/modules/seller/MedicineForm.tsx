"use client";

import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { env } from "@/env";

const URL = env.NEXT_PUBLIC_API_URL;
export const formSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(5),
  manufacturer: z.string().min(2),
  price: z.number(),
  stock: z.number(),
  image: z.string(),
  categoryId: z.string(),
});

export type MedicineInput = z.infer<typeof formSchema>;

export default function MedicineForm({
  categories,
}: {
  categories: { id: string; name: string }[];
}) {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      manufacturer: "",
      price: 0,
      stock: 0,
      image: "",
      categoryId: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const res = await fetch(`${URL}/api/seller/medicines`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
          credentials: "include",
        });
        if (!res.ok) {
          const data = await res.json();
          toast.error(data.message);
        }
        toast.success("Medicine added");
        form.reset();
      } catch (err: any) {
        toast.error("Something went wrong");
        console.log(err);
      }
    },
  });

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>Add Medicine</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          {/* Name */}
          <form.Field name="name">
            {(field) => (
              <div className="space-y-1">
                <Label>Name</Label>
                <Input
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>

          {/* Description */}
          <form.Field name="description">
            {(field) => (
              <div className="space-y-1">
                <Label>Description</Label>
                <Textarea
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>

          {/* Manufacturer */}
          <form.Field name="manufacturer">
            {(field) => (
              <div className="space-y-1">
                <Label>Manufacturer</Label>
                <Input
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>

          {/* Price & Stock */}
          <div className="grid grid-cols-2 gap-4">
            <form.Field name="price">
              {(field) => (
                <div className="space-y-1">
                  <Label>Price</Label>
                  <Input
                    type="number"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                  />
                </div>
              )}
            </form.Field>

            <form.Field name="stock">
              {(field) => (
                <div className="space-y-1">
                  <Label>Stock</Label>
                  <Input
                    type="number"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                  />
                </div>
              )}
            </form.Field>
          </div>

          {/* Image */}
          <form.Field name="image">
            {(field) => (
              <div className="space-y-1">
                <Label>Image URL</Label>
                <Input
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          </form.Field>

          {/* Category */}
          <form.Field name="categoryId">
            {(field) => (
              <div className="space-y-1">
                <Label>Category</Label>
                <Select
                  value={field.state.value}
                  onValueChange={field.handleChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </form.Field>

          <Button
            type="submit"
            className="w-full"
            disabled={form.state.isSubmitting}
          >
            {form.state.isSubmitting ? "Saving..." : "Add Medicine"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
