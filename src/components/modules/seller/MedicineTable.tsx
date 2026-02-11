"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  deleteMedicineAction,
  updateMedicineAction,
} from "@/actions/medicine.action";
export default function MedicinesTable({ medicines }: { medicines: any[] }) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<any>({});

  const startEdit = (medicine: any) => {
    setEditingId(medicine.id);
    setForm({
      name: medicine.name,
      price: medicine.price,
      stock: medicine.stock,
    });
  };

  const saveEdit = async (id: string) => {
    const toastId = toast.loading("Updating medicine...");
    const res = await updateMedicineAction(id, {
      name: form.name,
      price: Number(form.price),
      stock: Number(form.stock),
    });

    if (!res.success) {
      toast.error(res.message, { id: toastId });
      return;
    }
    toast.success(res.message, { id: toastId });
    setEditingId(null);
  };

  const deleteMedicine = async (id: string) => {
    const toastId = toast.loading("Deleting medicine...");
    const res = await deleteMedicineAction(id);

    if (!res.success) {
      toast.error(res.message, { id: toastId });
      return;
    }

    toast.success(res.message, { id: toastId });
  };

  return (
    <div className="space-y-4">
      {/* Desktop & Tablet Table */}
      <div className="hidden md:block rounded-lg border border-border bg-background">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {medicines.map((med) => (
              <TableRow key={med.id}>
                <TableCell>
                  <img
                    src={med.image}
                    alt={med.name}
                    className="h-12 w-12 rounded-md object-cover border border-border"
                  />
                </TableCell>

                <TableCell className="font-medium">
                  {editingId === med.id ? (
                    <Input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  ) : (
                    med.name
                  )}
                </TableCell>

                <TableCell>
                  {editingId === med.id ? (
                    <Input
                      type="number"
                      value={form.price}
                      onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                      }
                    />
                  ) : (
                    `৳${med.price}`
                  )}
                </TableCell>

                <TableCell>
                  {editingId === med.id ? (
                    <Input
                      type="number"
                      value={form.stock}
                      onChange={(e) =>
                        setForm({ ...form, stock: e.target.value })
                      }
                    />
                  ) : (
                    med.stock
                  )}
                </TableCell>

                <TableCell className="text-right space-x-2">
                  {editingId === med.id ? (
                    <Button
                      size="sm"
                      onClick={() => saveEdit(med.id)}
                      className="cursor-pointer"
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => startEdit(med)}
                      className="cursor-pointer"
                    >
                      Edit
                    </Button>
                  )}

                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteMedicine(med.id)}
                    className="cursor-pointer"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-3">
        {medicines.map((med) => (
          <div
            key={med.id}
            className="rounded-lg border border-border bg-background p-4 space-y-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={med.image}
                alt={med.name}
                className="h-14 w-14 rounded-md object-cover border border-border"
              />
              <div className="flex-1">
                {editingId === med.id ? (
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                ) : (
                  <p className="font-medium text-foreground">{med.name}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground">Price</p>
                {editingId === med.id ? (
                  <Input
                    type="number"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                  />
                ) : (
                  <p className="font-medium">৳{med.price}</p>
                )}
              </div>

              <div>
                <p className="text-muted-foreground">Stock</p>
                {editingId === med.id ? (
                  <Input
                    type="number"
                    value={form.stock}
                    onChange={(e) =>
                      setForm({ ...form, stock: e.target.value })
                    }
                  />
                ) : (
                  <p className="font-medium">{med.stock}</p>
                )}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              {editingId === med.id ? (
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={() => saveEdit(med.id)}
                >
                  Save
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => startEdit(med)}
                >
                  Edit
                </Button>
              )}

              <Button
                size="sm"
                variant="destructive"
                className="flex-1"
                onClick={() => deleteMedicine(med.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
