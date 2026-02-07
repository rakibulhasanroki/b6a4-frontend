"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrderStatus } from "@/types";

const STATUSES = [
  OrderStatus.PROCESSING,
  OrderStatus.SHIPPED,
  OrderStatus.DELIVERED,
];

export default function StatusSelect({
  current,
  onChange,
}: {
  current: OrderStatus;
  onChange: (value: OrderStatus) => void;
}) {
  if (current === OrderStatus.CANCELLED) {
    return (
      <div className="rounded-md border px-3 py-2 text-sm bg-muted">
        {current}
      </div>
    );
  }
  return (
    <Select
      defaultValue={current}
      onValueChange={(value) => onChange(value as OrderStatus)}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select status" />
      </SelectTrigger>
      <SelectContent>
        {STATUSES.map((status) => (
          <SelectItem key={status} value={status}>
            {status}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
