import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { destinations } from "@/lib/mock-data";
import { useApp } from "@/lib/app-context";
import { MapPin, Calendar, Briefcase, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Your Wardrobe — JetSetClothes" },
      { name: "description", content: "Enter your trip details and find the perfect wardrobe for your destination." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const navigate = useNavigate();
  const { setTrip } = useApp();
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [purpose, setPurpose] = useState("");

  const selectedDest = destinations.find((d) => d.id === destination);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrip({ destination, startDate, endDate, purpose });
    navigate({ to: "/packages" });
  };

  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">Plan your wardrobe</h1>
          <p className="mt-2 text-muted-foreground">Tell us about your trip and we'll find the perfect clothes.</p>
        </div>

        <Card>
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Destination</Label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger><SelectValue placeholder="Select a city" /></SelectTrigger>
                  <SelectContent>
                    {destinations.map((d) => (
                      <SelectItem key={d.id} value={d.id}>
                        {d.weather.icon} {d.city}, {d.country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedDest && (
                  <div className="mt-2 flex items-center gap-2 rounded-lg bg-muted/50 p-3">
                    <span className="text-2xl">{selectedDest.weather.icon}</span>
                    <div>
                      <p className="text-sm font-medium">{selectedDest.weather.condition}</p>
                      <p className="text-xs text-muted-foreground">Average {selectedDest.weather.temp}°C</p>
                    </div>
                    <Badge variant="secondary" className="ml-auto">{selectedDest.weather.condition}</Badge>
                  </div>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Arrival</Label>
                  <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Departure</Label>
                  <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-primary" /> Trip purpose</Label>
                <Select value={purpose} onValueChange={setPurpose}>
                  <SelectTrigger><SelectValue placeholder="What's the trip for?" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="leisure">Leisure</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="w-full gap-2" disabled={!destination || !startDate || !endDate || !purpose}>
                Find My Wardrobe <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
