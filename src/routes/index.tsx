import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, Package, Truck, Star, ArrowRight, Luggage, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-sky/20 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Plane className="h-4 w-4" /> Now in 5 cities worldwide
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
              Travel light.<br />
              <span className="text-primary">Dress right.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Rent climate-perfect clothing at your destination. No heavy luggage, no extra fees, no stress. Just show up and look great.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/book">
                <Button size="lg" className="gap-2 text-base">
                  Plan Your Wardrobe <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/packages">
                <Button variant="outline" size="lg" className="text-base">
                  Browse Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-display text-3xl font-bold text-foreground">Why travelers love us</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: Luggage, title: "Ditch the heavy bags", desc: "Skip airline baggage fees and long waits at baggage claim." },
              { icon: Clock, title: "Save time & money", desc: "No shopping for weather gear you'll only wear once." },
              { icon: CreditCard, title: "Fully refundable deposit", desc: "Return the clothes after your trip and get your deposit back." },
            ].map((b) => (
              <Card key={b.title} className="border-0 bg-muted/50 shadow-none">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <b.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-display text-3xl font-bold text-foreground">How it works</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { step: "1", icon: Plane, title: "Enter your trip", desc: "Tell us where you're going, when, and what for." },
              { step: "2", icon: Package, title: "Pick your clothes", desc: "Browse curated packages matched to your destination's climate." },
              { step: "3", icon: Truck, title: "Get delivered", desc: "Your clothes arrive at your hotel before you do." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {s.step}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/book">
              <Button size="lg" className="gap-2">
                Start Booking <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-display text-3xl font-bold text-foreground">What travelers say</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Priya M.", location: "Mumbai → Stockholm", text: "Saved ₹15,000 on winter clothes and arrived with just a backpack!" },
              { name: "James K.", location: "London → Dubai", text: "Perfect linen outfits delivered right to my hotel. Game changer." },
              { name: "Aiko S.", location: "Tokyo → Reykjavik", text: "The arctic gear was top-quality and the pickup service was seamless." },
            ].map((r) => (
              <Card key={r.name} className="shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-3 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground">"{r.text}"</p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
