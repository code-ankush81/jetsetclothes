import { createContext, useContext, useState, type ReactNode } from "react";

interface TripData {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

interface CartData {
  packageId: string;
  days: number;
  items: string[];
}

interface AppContextType {
  trip: TripData | null;
  setTrip: (trip: TripData) => void;
  cart: CartData | null;
  setCart: (cart: CartData) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [trip, setTrip] = useState<TripData | null>(null);
  const [cart, setCart] = useState<CartData | null>(null);
  return (
    <AppContext.Provider value={{ trip, setTrip, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
