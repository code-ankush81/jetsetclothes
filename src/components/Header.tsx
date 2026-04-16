import { Link } from "@tanstack/react-router";
import { Plane, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Plane className="h-4 w-4 text-primary-foreground" />
          </div>
          JetSetClothes
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            { to: "/book" as const, label: "Book" },
            { to: "/packages" as const, label: "Packages" },
            { to: "/orders" as const, label: "Orders" },
            { to: "/profile" as const, label: "Profile" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-lg px-4 py-2 text-sm font-medium bg-secondary text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/login" className="ml-2">
            <Button size="sm" className="rounded-full px-6 font-semibold">Sign In</Button>
          </Link>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            <Link to="/book" className="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-secondary" onClick={() => setMobileOpen(false)}>Book</Link>
            <Link to="/packages" className="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-secondary" onClick={() => setMobileOpen(false)}>Packages</Link>
            <Link to="/orders" className="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-secondary" onClick={() => setMobileOpen(false)}>Orders</Link>
            <Link to="/profile" className="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-secondary" onClick={() => setMobileOpen(false)}>Profile</Link>
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="mt-2 w-full rounded-full font-semibold">Sign In</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
