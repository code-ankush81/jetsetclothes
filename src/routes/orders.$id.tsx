import { createFileRoute, Link } from "@tanstack/react-router";
import { sampleOrders } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Package, Truck, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/orders/$id")({
  head: () => ({
    meta: [
      { title: "Order Details — JetSetClothes" },
      { name: "description", content: "Track your clothing rental order." },
    ],
  }),
  component: OrderDetailPage,
  notFoundComponent: () => (
    <div className="py-20 text-center">
      <p className="text-lg font-medium">Order not found</p>
      <Link to="/orders" className="mt-2 text-primary hover:underline">View all orders</Link>
    </div>
  ),
});

const steps = [
  { key: "preparing", label: "Preparing", icon: Package },
  { key: "shipped", label: "Shipped", icon: Truck },
  { key: "delivered", label: "Delivered", icon: CheckCircle },
];

function OrderDetailPage() {
  const { id } = Route.useParams();
  const order = sampleOrders.find((o) => o.id === id);

  if (!order) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg font-medium">Order not found</p>
        <Link to="/orders" className="mt-2 text-primary hover:underline">View all orders</Link>
      </div>
    );
  }

  const currentStep = steps.findIndex((s) => s.key === order.status);

  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <Link to="/orders" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to orders
        </Link>

        <h1 className="font-display text-2xl font-bold text-foreground">Order {order.id}</h1>
        <p className="mt-1 text-sm text-muted-foreground">Placed on {order.createdAt}</p>

        {/* Timeline */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h2 className="mb-4 font-display text-lg font-semibold">Delivery Status</h2>
            <div className="flex items-center justify-between">
              {steps.map((step, i) => {
                const active = i <= currentStep;
                const Icon = step.icon;
                return (
                  <div key={step.key} className="flex flex-1 flex-col items-center">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className={`mt-2 text-xs font-medium ${active ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</p>
                    {i < steps.length - 1 && (
                      <div className={`absolute hidden`} />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-2 flex">
              {steps.map((_, i) => (
                <div key={i} className={`flex-1 ${i < steps.length - 1 ? "" : "hidden"}`}>
                  {i < steps.length - 1 && (
                    <div className={`mx-auto mt-[-2rem] h-0.5 w-3/4 ${i < currentStep ? "bg-primary" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Details */}
        <Card className="mt-4">
          <CardContent className="space-y-4 p-6">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Package</span>
              <span className="text-sm font-medium">{order.packageName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Destination</span>
              <span className="text-sm">{order.destination}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Dates</span>
              <span className="text-sm">{order.dates}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Delivery</span>
              <span className="text-sm">{order.deliveryAddress}</span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${order.total}</span>
            </div>
          </CardContent>
        </Card>

        {order.status === "delivered" && (
          <div className="mt-6 flex gap-3">
            <Button className="gap-2"><Package className="h-4 w-4" /> Request Pickup</Button>
            <Button variant="outline" className="gap-2"><ShoppingBag className="h-4 w-4" /> Buy Instead</Button>
          </div>
        )}
      </div>
    </div>
  );
}
