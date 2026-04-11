export interface Destination {
  id: string;
  city: string;
  country: string;
  weather: { temp: number; condition: string; icon: string };
}

export interface ClothingItem {
  id: string;
  name: string;
  material: string;
  sizes: string[];
}

export interface ClothingPackage {
  id: string;
  name: string;
  destinationId: string;
  style: "casual" | "business" | "outdoor";
  description: string;
  pricePerDay: number;
  deposit: number;
  itemCount: number;
  weatherBadge: string;
  image: string;
  items: ClothingItem[];
}

export interface Order {
  id: string;
  packageId: string;
  packageName: string;
  destination: string;
  dates: string;
  status: "preparing" | "shipped" | "delivered" | "returned" | "purchased";
  total: number;
  deliveryAddress: string;
  createdAt: string;
}

export const destinations: Destination[] = [
  { id: "stockholm", city: "Stockholm", country: "Sweden", weather: { temp: -2, condition: "Snowy", icon: "❄️" } },
  { id: "tokyo", city: "Tokyo", country: "Japan", weather: { temp: 12, condition: "Mild", icon: "🌤️" } },
  { id: "new-york", city: "New York", country: "USA", weather: { temp: 5, condition: "Cold", icon: "🌬️" } },
  { id: "reykjavik", city: "Reykjavik", country: "Iceland", weather: { temp: -5, condition: "Freezing", icon: "🥶" } },
  { id: "dubai", city: "Dubai", country: "UAE", weather: { temp: 35, condition: "Hot", icon: "☀️" } },
];

const makeItems = (names: string[]): ClothingItem[] =>
  names.map((name, i) => ({
    id: `item-${i}`,
    name,
    material: ["Merino Wool", "Cotton Blend", "Nylon", "Cashmere", "Polyester"][i % 5],
    sizes: ["XS", "S", "M", "L", "XL"],
  }));

export const packages: ClothingPackage[] = [
  {
    id: "stk-winter",
    name: "Stockholm Winter Essentials",
    destinationId: "stockholm",
    style: "casual",
    description: "Stay warm and stylish in Stockholm's sub-zero winters with cozy layers and sleek Scandinavian style.",
    pricePerDay: 18,
    deposit: 120,
    itemCount: 6,
    weatherBadge: "❄️ Sub-zero",
    image: "https://images.unsplash.com/photo-1544923246-77307dd270cb?w=600&h=400&fit=crop",
    items: makeItems(["Puffer Jacket", "Wool Sweater", "Thermal Leggings", "Beanie", "Insulated Boots", "Scarf"]),
  },
  {
    id: "stk-business",
    name: "Stockholm Business Ready",
    destinationId: "stockholm",
    style: "business",
    description: "Polished looks for Nordic boardrooms with warm underlayers.",
    pricePerDay: 25,
    deposit: 180,
    itemCount: 5,
    weatherBadge: "❄️ Sub-zero",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    items: makeItems(["Wool Overcoat", "Cashmere Blazer", "Dress Shirt", "Wool Trousers", "Leather Boots"]),
  },
  {
    id: "tok-casual",
    name: "Tokyo Street Style",
    destinationId: "tokyo",
    style: "casual",
    description: "Trendy layers perfect for Tokyo's mild weather and fashion-forward streets.",
    pricePerDay: 15,
    deposit: 100,
    itemCount: 5,
    weatherBadge: "🌤️ Mild",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop",
    items: makeItems(["Light Jacket", "Graphic Tee", "Slim Chinos", "Canvas Sneakers", "Crossbody Bag"]),
  },
  {
    id: "ny-outdoor",
    name: "New York City Explorer",
    destinationId: "new-york",
    style: "outdoor",
    description: "Rugged yet stylish pieces for pounding NYC pavement in cold weather.",
    pricePerDay: 20,
    deposit: 140,
    itemCount: 6,
    weatherBadge: "🌬️ Cold",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop",
    items: makeItems(["Parka", "Hoodie", "Cargo Pants", "Hiking Boots", "Gloves", "Backpack"]),
  },
  {
    id: "ryk-extreme",
    name: "Reykjavik Arctic Pack",
    destinationId: "reykjavik",
    style: "outdoor",
    description: "Extreme cold-weather gear for Iceland's dramatic landscapes.",
    pricePerDay: 28,
    deposit: 200,
    itemCount: 7,
    weatherBadge: "🥶 Freezing",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=400&fit=crop",
    items: makeItems(["Down Parka", "Fleece Base Layer", "Snow Pants", "Thermal Socks", "Winter Boots", "Balaclava", "Heated Gloves"]),
  },
  {
    id: "dub-casual",
    name: "Dubai Breeze Collection",
    destinationId: "dubai",
    style: "casual",
    description: "Lightweight, breathable fabrics to keep cool in Dubai's desert heat.",
    pricePerDay: 14,
    deposit: 90,
    itemCount: 5,
    weatherBadge: "☀️ Hot",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop",
    items: makeItems(["Linen Shirt", "Cotton Shorts", "Sandals", "Sun Hat", "Sunglasses"]),
  },
  {
    id: "dub-business",
    name: "Dubai Executive",
    destinationId: "dubai",
    style: "business",
    description: "Smart, breathable business attire suited for Dubai's climate.",
    pricePerDay: 22,
    deposit: 150,
    itemCount: 5,
    weatherBadge: "☀️ Hot",
    image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&h=400&fit=crop",
    items: makeItems(["Linen Blazer", "Cotton Dress Shirt", "Light Chinos", "Loafers", "Leather Belt"]),
  },
];

export const sampleOrders: Order[] = [
  {
    id: "ORD-001",
    packageId: "stk-winter",
    packageName: "Stockholm Winter Essentials",
    destination: "Stockholm, Sweden",
    dates: "Jan 15 – Jan 22, 2026",
    status: "delivered",
    total: 246,
    deliveryAddress: "Radisson Blu, Stockholm",
    createdAt: "2026-01-10",
  },
  {
    id: "ORD-002",
    packageId: "tok-casual",
    packageName: "Tokyo Street Style",
    destination: "Tokyo, Japan",
    dates: "Mar 5 – Mar 12, 2026",
    status: "preparing",
    total: 205,
    deliveryAddress: "Shinjuku Hotel, Tokyo",
    createdAt: "2026-02-28",
  },
];
