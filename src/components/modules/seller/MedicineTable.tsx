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
    try {
      await updateMedicineAction(id, {
        name: form.name,
        price: Number(form.price),
        stock: Number(form.stock),
      });

      toast.success("Medicine updated");
      setEditingId(null);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const deleteMedicine = async (id: string) => {
    const res = await deleteMedicineAction(id);

    if (!res) return;

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    toast.success(res.message || "Medicine deleted");
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {medicines.map((med) => (
          <TableRow key={med.id}>
            <TableCell>
              <img
                src={med.image}
                alt={med.name}
                className="h-12 w-12 rounded object-cover"
              />
            </TableCell>

            <TableCell>
              {editingId === med.id ? (
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              ) : (
                `$${med.price}`
              )}
            </TableCell>

            <TableCell>
              {editingId === med.id ? (
                <Input
                  type="number"
                  value={form.stock}
                  onChange={(e) => setForm({ ...form, stock: e.target.value })}
                />
              ) : (
                med.stock
              )}
            </TableCell>

            <TableCell className="space-x-2">
              {editingId === med.id ? (
                <Button size="sm" onClick={() => saveEdit(med.id)}>
                  Save
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => startEdit(med)}
                >
                  Edit
                </Button>
              )}

              <Button
                size="sm"
                variant="destructive"
                onClick={() => deleteMedicine(med.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
