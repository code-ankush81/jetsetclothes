import { Plane } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-primary">
            <Plane className="h-5 w-5" />
            JetSetClothes
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Travel light. Dress right. Rent climate-perfect clothing at your destination.
          </p>
          <p className="text-xs text-muted-foreground">© 2026 JetSetClothes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
