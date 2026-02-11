"use client";

import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { createMedicineAction } from "@/actions/medicine.action";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),

  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters" }),

  manufacturer: z
    .string()
    .min(2, { message: "Manufacturer must be at least 2 characters" }),

  price: z.number(),
  stock: z.number(),

  image: z.string().min(1, "Image URL is required"),
  categoryId: z.string().min(1, "Category is required"),
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
      const res = await createMedicineAction(value);

      if (!res.success) {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      form.reset();
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
          {/*Medicine Name */}
          <form.Field
            name="name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Medicine Name</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="text"
                    placeholder="Enter Medicine Name"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          ></form.Field>

          {/* Description */}
          <form.Field
            name="description"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    placeholder="Description"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          ></form.Field>

          {/* Manufacturer */}
          <form.Field
            name="manufacturer"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Manufacturer</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="text"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          ></form.Field>

          {/* Price & Stock */}
          <div className="grid grid-cols-2 gap-4">
            <form.Field
              name="price"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Price</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="number"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(Number(e.target.value))
                      }
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            ></form.Field>

            <form.Field
              name="stock"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Stock</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="number"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(Number(e.target.value))
                      }
                    />

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            ></form.Field>
          </div>

          {/* Image */}
          <form.Field
            name="image"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Image URL</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    placeholder="Please enter Img Url"
                    onChange={(e) => field.handleChange(e.target.value)}
                  />

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          ></form.Field>

          {/* Category */}

          <form.Field
            name="categoryId"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Select Category</FieldLabel>
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

                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          ></form.Field>

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
