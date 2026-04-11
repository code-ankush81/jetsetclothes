import { createFileRoute, Link } from "@tanstack/react-router";
import { sampleOrders } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

export const Route = createFileRoute("/orders")({
  head: () => ({
    meta: [
      { title: "My Orders — JetSetClothes" },
      { name: "description", content: "View your clothing rental orders." },
    ],
  }),
  component: OrdersPage,
});

const statusColors: Record<string, string> = {
  preparing: "bg-yellow-100 text-yellow-800",
  shipped: "bg-blue-100 text-blue-800",
  delivered: "bg-green-100 text-green-800",
  returned: "bg-muted text-muted-foreground",
  purchased: "bg-purple-100 text-purple-800",
};

function OrdersPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-8 font-display text-3xl font-bold text-foreground">My Orders</h1>

        {sampleOrders.length === 0 ? (
          <div className="py-20 text-center">
            <Package className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-lg font-medium">No orders yet</p>
            <p className="text-sm text-muted-foreground">Book your first wardrobe to get started.</p>
            <Link to="/book" className="mt-4 inline-block text-primary hover:underline">Book now</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sampleOrders.map((order) => (
              <Link key={order.id} to="/orders/$id" params={{ id: order.id }}>
                <Card className="transition-all hover:shadow-md">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground">{order.packageName}</p>
                        <Badge className={statusColors[order.status] + " border-0 text-xs capitalize"}>
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{order.destination} · {order.dates}</p>
                      <p className="text-xs text-muted-foreground">Order {order.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">${order.total}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
