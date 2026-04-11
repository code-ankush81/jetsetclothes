import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { packages, destinations } from "@/lib/mock-data";
import { Package, Filter } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Clothing Packages — JetSetClothes" },
      { name: "description", content: "Browse curated clothing packages for your travel destination." },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    dest: (search.dest as string) || undefined,
    purpose: (search.purpose as string) || undefined,
  }),
  component: PackagesPage,
});

function PackagesPage() {
  const { dest, purpose } = Route.useSearch();
  const [styleFilter, setStyleFilter] = useState<string>(
    purpose === "business" ? "business" : purpose === "adventure" ? "outdoor" : ""
  );

  let filtered = packages;
  if (dest) filtered = filtered.filter((p) => p.destinationId === dest);
  if (styleFilter) filtered = filtered.filter((p) => p.style === styleFilter);

  const destInfo = destinations.find((d) => d.id === dest);

  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            {destInfo ? `Packages for ${destInfo.city}` : "All Packages"}
          </h1>
          {destInfo && (
            <p className="mt-2 text-muted-foreground">
              {destInfo.weather.icon} {destInfo.weather.condition} · Average {destInfo.weather.temp}°C
            </p>
          )}
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          <Button variant={styleFilter === "" ? "default" : "outline"} size="sm" onClick={() => setStyleFilter("")}>
            <Filter className="mr-1 h-4 w-4" /> All
          </Button>
          {["casual", "business", "outdoor"].map((s) => (
            <Button key={s} variant={styleFilter === s ? "default" : "outline"} size="sm" onClick={() => setStyleFilter(s)}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <Package className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-lg font-medium text-foreground">No packages found</p>
            <p className="text-sm text-muted-foreground">Try changing your filters or destination.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((pkg) => {
              const dest = destinations.find((d) => d.id === pkg.destinationId);
              return (
                <Link key={pkg.id} to="/packages/$id" params={{ id: pkg.id }} search={{}} className="group">
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="aspect-[3/2] overflow-hidden bg-muted">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">{pkg.weatherBadge}</Badge>
                        <Badge variant="outline" className="text-xs capitalize">{pkg.style}</Badge>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{pkg.name}</h3>
                      {dest && <p className="text-xs text-muted-foreground">{dest.city}, {dest.country}</p>}
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{pkg.description}</p>
                      <div className="mt-4 flex items-end justify-between">
                        <div>
                          <span className="text-xl font-bold text-foreground">${pkg.pricePerDay}</span>
                          <span className="text-sm text-muted-foreground">/day</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{pkg.itemCount} items</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
