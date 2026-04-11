import { Link } from "@tanstack/react-router";
import { Plane, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          <Plane className="h-6 w-6" />
          JetSetClothes
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/book" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-sm font-medium text-foreground" }}>
            Book
          </Link>
          <Link to="/packages" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-sm font-medium text-foreground" }}>
            Packages
          </Link>
          <Link to="/orders" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-sm font-medium text-foreground" }}>
            Orders
          </Link>
          <Link to="/profile" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-sm font-medium text-foreground" }}>
            Profile
          </Link>
          <Link to="/login">
            <Button size="sm">Sign In</Button>
          </Link>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link to="/book" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Book</Link>
            <Link to="/packages" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Packages</Link>
            <Link to="/orders" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Orders</Link>
            <Link to="/profile" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Profile</Link>
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full">Sign In</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
