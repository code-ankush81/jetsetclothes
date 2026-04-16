import { Plane } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
                <Plane className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              JetSetClothes
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Travel light. Dress right. Rent climate-perfect clothing at your destination.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <Link to="/book" className="text-sm text-muted-foreground hover:text-foreground">Book</Link>
            <Link to="/packages" className="text-sm text-muted-foreground hover:text-foreground">Packages</Link>
            <Link to="/orders" className="text-sm text-muted-foreground hover:text-foreground">Orders</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-foreground">Account</h4>
            <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground">Sign In</Link>
            <Link to="/signup" className="text-sm text-muted-foreground hover:text-foreground">Sign Up</Link>
            <Link to="/profile" className="text-sm text-muted-foreground hover:text-foreground">Profile</Link>
          </div>
        </div>
        <div className="mt-10 border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© 2026 JetSetClothes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
