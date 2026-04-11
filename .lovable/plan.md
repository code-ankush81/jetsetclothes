
# JetSetClothes MVP

## Overview
A clothing rental app for international travelers. Users sign up, enter trip details, browse climate-curated clothing packages, customize and checkout with mock payments, and track delivery.

## Pages & Features

### 1. Landing Page (`/`)
- Hero with tagline: "Travel light. Dress right."
- How it works (3 steps: Enter trip → Pick clothes → Get delivered)
- Trust elements (sample reviews, key benefits)
- CTA to get started

### 2. Auth (`/login`, `/signup`)
- Email/password signup & login
- Google OAuth sign-in
- Supabase Auth with user profiles (name, avatar, phone)

### 3. Trip Entry (`/book`)
- Form: destination country/city, travel dates, trip purpose (business/leisure/adventure)
- Auto-fetch weather info for destination (mock data for MVP)
- "Find My Wardrobe" CTA

### 4. Browse Packages (`/packages`)
- Display curated clothing packages based on trip details (e.g., "Stockholm Winter Essentials", "Business Ready")
- Each package shows: photo grid, item count, price/day, weather suitability badge
- Filter by style (casual, business, outdoor)
- Click to view package details

### 5. Package Detail & Customize (`/packages/:id`)
- Full item list with photos, sizes, materials
- Add/remove individual items
- Size selection per item
- Running total (rental fee + refundable deposit)
- "Add to Cart" button

### 6. Checkout (`/checkout`)
- Order summary with itemized pricing
- Delivery address input (hotel, Airbnb, etc.)
- Delivery date (auto-suggested based on trip dates)
- Mock payment form (card number UI, no real charges)
- Place order button

### 7. Order Confirmation & Tracking (`/orders/:id`)
- Confirmation screen with order number
- Delivery status timeline (Preparing → Shipped → Delivered)
- Mock status updates
- Option to request return pickup or buy items

### 8. My Orders (`/orders`)
- List of past and current orders
- Status badges (Active, Returned, Purchased)

### 9. Profile (`/profile`)
- Edit name, avatar, phone
- View order history

## Design
- Clean, modern UI with travel-inspired color palette (sky blue primary, warm neutrals)
- Card-based layouts for packages
- Weather/climate icons alongside clothing
- Mobile-responsive throughout
- shadcn/ui components

## Data (Mock/Seed)
- Pre-populated destinations (Stockholm, Tokyo, New York, Reykjavik, Dubai)
- Sample clothing packages per destination with images (placeholder)
- Mock weather data per destination

## Tech
- Supabase for auth (email + Google) and database (profiles, orders, packages, items)
- TanStack Start with file-based routing
- Tailwind CSS + shadcn/ui
- Mock payment flow (no Stripe)
