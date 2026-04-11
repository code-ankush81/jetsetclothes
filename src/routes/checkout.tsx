import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { packages } from "@/lib/mock-data";
import { useApp } from "@/lib/app-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, MapPin, Lock, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — JetSetClothes" },
      { name: "description", content: "Complete your clothing rental order." },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const navigate = useNavigate();
  const { cart } = useApp();
  const pkg = cart ? packages.find((p) => p.id === cart.packageId) : null;
  const days = cart?.days ?? 7;

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const rentalTotal = pkg ? pkg.pricePerDay * days : 0;
  const total = pkg ? rentalTotal + pkg.deposit : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setDone(true);
    }, 1500);
  };

  if (done) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">Order Confirmed!</h1>
          <p className="mt-2 text-muted-foreground">
            Your order <strong>ORD-{Math.random().toString(36).slice(2, 8).toUpperCase()}</strong> has been placed.
            Your clothes will be delivered before you arrive.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button onClick={() => navigate({ to: "/orders" })}>View Orders</Button>
            <Button variant="outline" onClick={() => navigate({ to: "/" })}>Go Home</Button>
          </div>
        </div>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-muted-foreground">No package selected. <a href="/packages" className="text-primary hover:underline">Browse packages</a></p>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="mb-8 font-display text-3xl font-bold text-foreground">Checkout</h1>

        <div className="grid gap-8 lg:grid-cols-5">
          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-display text-lg">
                  <MapPin className="h-5 w-5 text-primary" /> Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Hotel / Address</Label>
                  <Input id="address" placeholder="Radisson Blu, Vasagatan 1" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Stockholm" value={city} onChange={(e) => setCity(e.target.value)} required />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-display text-lg">
                  <CreditCard className="h-5 w-5 text-primary" /> Payment (Mock)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
                  <Lock className="mr-1 inline h-3 w-3" /> This is a demo — no real charges will be made.
                </div>
                <div className="space-y-2">
                  <Label htmlFor="card">Card Number</Label>
                  <Input id="card" placeholder="4242 4242 4242 4242" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry</Label>
                    <Input id="expiry" placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" value={cvc} onChange={(e) => setCvc(e.target.value)} required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button type="submit" size="lg" className="w-full" disabled={processing}>
              {processing ? "Processing..." : `Pay $${total}`}
            </Button>
          </form>

          <div className="lg:col-span-2">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-display text-lg font-semibold">Order Summary</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <img src={pkg.image} alt={pkg.name} className="h-16 w-16 rounded-lg object-cover" />
                    <div>
                      <p className="font-medium text-foreground">{pkg.name}</p>
                      <p className="text-xs text-muted-foreground">{pkg.itemCount} items · {days} days</p>
                    </div>
                  </div>
                  <div className="space-y-1 border-t pt-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rental</span>
                      <span>${rentalTotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deposit (refundable)</span>
                      <span>${pkg.deposit}</span>
                    </div>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold text-foreground">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
