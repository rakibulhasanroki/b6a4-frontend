import Image from "next/image";
import { notFound } from "next/navigation";
import { orderService } from "@/services/order.service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Review from "@/components/modules/orders/Review";

interface Props {
  params: { id: string };
}

export default async function OrderDetailsPage({ params }: Props) {
  const { id } = await params;
  const { data } = await orderService.getOrderById(id);
  const order = data;

  if (!order) return notFound();

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight mb-6">
        Order Details
      </h1>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Items</CardTitle>
            </CardHeader>

            <CardContent className="divide-y">
              {order.orderItems.map((item: any) => (
                <div key={item.id} className="py-5 flex flex-col gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border bg-white">
                      <Image
                        src={item.medicine.image}
                        alt={item.medicine.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-1">
                      <p className="font-medium">{item.medicine.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Seller: {item.medicine.seller.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <p className="font-medium whitespace-nowrap">
                      ৳{item.price * item.quantity}
                    </p>
                  </div>

                  <div className="ml-24 border-l pl-4">
                    <Review medicineId={item.medicine.id} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">
                Order #{order.id}
              </CardTitle>
              <Badge
                variant={
                  order.status === "DELIVERED"
                    ? "default"
                    : order.status === "CANCELLED"
                      ? "destructive"
                      : "secondary"
                }
              >
                {order.status}
              </Badge>
            </CardHeader>

            <CardContent className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Placed on</p>
                <p className="font-medium">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">Shipping Address</p>
                <p className="font-medium">{order.shippingAddress}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/40">
            <CardContent className="p-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>৳{order.totalAmount}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment Method</span>
                <span>Cash on Delivery</span>
              </div>

              <Separator />

              <div className="flex justify-between text-base font-semibold">
                <span>Total Payment</span>
                <span>৳{order.totalAmount}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
