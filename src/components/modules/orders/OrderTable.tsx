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
import OrderDetails from "./OrderDetails";
import PaginationControls from "@/components/ui/pagination";
import { Order } from "@/types";

export default function OrdersTable({
  orders,
  meta,
  adminOnly = false,
  showSeller = false,
}: {
  orders: Order[];
  meta: any;
  adminOnly?: boolean;
  showSeller?: boolean;
}) {
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <>
      {/* Desktop Table  */}
      <div className="hidden md:block rounded-lg border bg-background shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Order ID</TableHead>
                {showSeller && <TableHead>Seller</TableHead>}
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.map((order: any) => (
                <TableRow key={order.id} className="hover:bg-muted/40">
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {order.id}
                  </TableCell>

                  {showSeller && (
                    <TableCell>
                      {order.orderItems[0]?.medicine?.seller?.name}
                    </TableCell>
                  )}

                  <TableCell>{order.customer.name}</TableCell>

                  <TableCell>
                    <span className="rounded-md bg-muted px-2 py-1 text-xs">
                      {order.status}
                    </span>
                  </TableCell>

                  <TableCell className="font-medium">
                    ৳{order.totalAmount}
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedOrder(order)}
                      className="cursor-pointer"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="border-t p-4">
          <PaginationControls meta={meta} />
        </div>
      </div>

      {/*  Mobile Cards */}
      <div className="md:hidden space-y-4">
        {orders.map((order: any) => (
          <div
            key={order.id}
            className="rounded-lg border bg-background p-4 shadow-sm space-y-3"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-muted-foreground">Order ID</p>
                <p className="font-mono text-xs">{order.id}</p>
              </div>
              <span className="rounded-md bg-muted px-2 py-1 text-xs">
                {order.status}
              </span>
            </div>

            {showSeller && (
              <div>
                <p className="text-xs text-muted-foreground">Seller</p>
                <p>{order.orderItems[0]?.medicine?.seller?.name}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-xs text-muted-foreground">Customer</p>
                <p>{order.customer.name}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total</p>
                <p className="font-medium">৳{order.totalAmount}</p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t">
              <p className="text-xs text-muted-foreground">
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedOrder(order)}
              >
                View
              </Button>
            </div>
          </div>
        ))}

        <PaginationControls meta={meta} />
      </div>

      <OrderDetails
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
        adminOnly={adminOnly}
      />
    </>
  );
}
