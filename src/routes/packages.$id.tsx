import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { packages, destinations } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ShoppingBag, Minus, Plus } from "lucide-react";

export const Route = createFileRoute("/packages/$id")({
  head: () => ({
    meta: [
      { title: "Package Details — JetSetClothes" },
      { name: "description", content: "Customize your clothing rental package." },
    ],
  }),
  component: PackageDetailPage,
  notFoundComponent: () => (
    <div className="py-20 text-center">
      <p className="text-lg font-medium">Package not found</p>
    <Link to="/packages" search={{}} className="mt-2 text-primary hover:underline">Browse all packages</Link>
    </div>
  ),
});

function PackageDetailPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const pkg = packages.find((p) => p.id === id);

  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    () => Object.fromEntries(pkg?.items.map((i) => [i.id, true]) ?? [])
  );
  const [sizes, setSizes] = useState<Record<string, string>>(
    () => Object.fromEntries(pkg?.items.map((i) => [i.id, "M"]) ?? [])
  );
  const [days, setDays] = useState(7);

  if (!pkg) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg font-medium">Package not found</p>
        <Link to="/packages" search={{}} className="mt-2 text-primary hover:underline">Browse all packages</Link>
      </div>
    );
  }

  const dest = destinations.find((d) => d.id === pkg.destinationId);
  const activeItemCount = Object.values(selectedItems).filter(Boolean).length;
  const rentalTotal = pkg.pricePerDay * days;
  const grandTotal = rentalTotal + pkg.deposit;

  const handleCheckout = () => {
    navigate({
      to: "/checkout",
      search: { packageId: pkg.id, days, items: Object.keys(selectedItems).filter((k) => selectedItems[k]).join(",") },
    });
  };

  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Link to="/packages" search={{}} className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to packages
        </Link>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-xl bg-muted">
              <img src={pkg.image} alt={pkg.name} className="h-64 w-full object-cover md:h-80" />
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{pkg.weatherBadge}</Badge>
                <Badge variant="outline" className="capitalize">{pkg.style}</Badge>
              </div>
              <h1 className="mt-3 font-display text-2xl font-bold text-foreground md:text-3xl">{pkg.name}</h1>
              {dest && <p className="mt-1 text-sm text-muted-foreground">{dest.city}, {dest.country}</p>}
              <p className="mt-4 text-muted-foreground">{pkg.description}</p>
            </div>

            <div className="mt-8">
              <h2 className="mb-4 font-display text-lg font-semibold">Items in this package</h2>
              <div className="space-y-3">
                {pkg.items.map((item) => (
                  <Card key={item.id} className={selectedItems[item.id] ? "" : "opacity-50"}>
                    <CardContent className="flex items-center gap-4 p-4">
                      <Checkbox
                        checked={selectedItems[item.id]}
                        onCheckedChange={(checked) =>
                          setSelectedItems((p) => ({ ...p, [item.id]: !!checked }))
                        }
                      />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.material}</p>
                      </div>
                      <Select value={sizes[item.id]} onValueChange={(v) => setSizes((p) => ({ ...p, [item.id]: v }))}>
                        <SelectTrigger className="w-20"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {item.sizes.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-display text-lg font-semibold">Order Summary</h3>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Rental days</span>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => setDays((d) => Math.max(1, d - 1))}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{days}</span>
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => setDays((d) => d + 1)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Items selected</span>
                    <span>{activeItemCount} of {pkg.items.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rental ({days} days × ${pkg.pricePerDay})</span>
                    <span>${rentalTotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Refundable deposit</span>
                    <span>${pkg.deposit}</span>
                  </div>
                </div>

                <div className="mt-4 border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${grandTotal}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Deposit of ${pkg.deposit} refunded on return</p>
                </div>

                <Button size="lg" className="mt-6 w-full gap-2" onClick={handleCheckout} disabled={activeItemCount === 0}>
                  <ShoppingBag className="h-5 w-5" /> Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
