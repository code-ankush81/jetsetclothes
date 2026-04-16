import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, Package, Truck, Star, ArrowRight, Luggage, Clock, CreditCard, Sparkles, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-40">
        {/* Glow effects */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Now in 5 cities worldwide
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Travel light.
              <br />
              <span className="text-primary">Dress right.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
              Rent climate-perfect clothing at your destination. No heavy luggage, no extra fees, no stress. Just show up and look great.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/book">
                <Button size="lg" className="gap-2 rounded-full px-8 text-base font-semibold">
                  Plan Your Wardrobe <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/packages">
                <Button variant="outline" size="lg" className="rounded-full px-8 text-base font-semibold">
                  Browse Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border/50 bg-card/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border/50 md:grid-cols-4">
          {[
            { value: "5", label: "Cities" },
            { value: "2,800+", label: "Happy travelers" },
            { value: "4.9/5", label: "User rating" },
            { value: "100%", label: "Refundable deposit" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="font-display text-2xl font-bold text-foreground md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why travelers love us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">
              Built for the modern traveler
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: Luggage, title: "Ditch the heavy bags", desc: "Skip airline baggage fees and long waits at baggage claim." },
              { icon: Clock, title: "Save time & money", desc: "No shopping for weather gear you'll only wear once." },
              { icon: Shield, title: "Fully refundable deposit", desc: "Return the clothes after your trip and get your deposit back." },
            ].map((b) => (
              <Card key={b.title} className="group border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-[0_0_30px_-10px] hover:shadow-primary/20">
                <CardContent className="flex flex-col p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border/50 bg-card/30 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Simple process</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">How it works</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { step: "01", icon: Globe, title: "Enter your trip", desc: "Tell us where you're going, when, and what for." },
              { step: "02", icon: Package, title: "Pick your clothes", desc: "Browse curated packages matched to your destination's climate." },
              { step: "03", icon: Truck, title: "Get delivered", desc: "Your clothes arrive at your hotel before you do." },
            ].map((s) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                <span className="font-display text-6xl font-black text-muted/60">{s.step}</span>
                <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/book">
              <Button size="lg" className="gap-2 rounded-full px-8 font-semibold">
                Start Booking <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">What travelers say</h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { name: "Priya M.", location: "Mumbai → Stockholm", text: "Saved ₹15,000 on winter clothes and arrived with just a backpack!" },
              { name: "James K.", location: "London → Dubai", text: "Perfect linen outfits delivered right to my hotel. Game changer." },
              { name: "Aiko S.", location: "Tokyo → Reykjavik", text: "The arctic gear was top-quality and the pickup service was seamless." },
            ].map((r) => (
              <Card key={r.name} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">"{r.text}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-card/50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Ready to travel lighter?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join 2,800+ travelers who've ditched the heavy suitcases.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/book">
              <Button size="lg" className="gap-2 rounded-full px-8 text-base font-semibold">
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
