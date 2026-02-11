# MediStore

### "Your Trusted Online Medicine Shop" [Medistore](https://medistore-pharma.vercel.app)

MediStore is a full-stack e-commerce web application for purchasing over-the-counter (OTC) medicines.  
This repository contains the **frontend implementation**, built with **Next.js App Router**, following clean UI/UX principles and role-based navigation.

## Live Demo

### [Frontend](https://medistore-pharma.vercel.app)

### [Backend API](https://medistore-pharma-api.vercel.app)

## 📌 Project Overview

MediStore allows users to browse medicines, manage carts, place orders, and track order status.  
Different user roles (Customer, Seller, Admin) experience tailored dashboards and routes.

> **Note:**
>
> - OTC medicines only (no prescription required)
> - Cash on Delivery (COD) is used for orders
> - Admin accounts are pre-seeded in the backend

---

## Roles & Permissions

| Role     | Description                  | Frontend Access                    |
| -------- | ---------------------------- | ---------------------------------- |
| Customer | Purchases medicines          | Shop, Cart, Orders, Profile        |
| Seller   | Manages medicine inventory   | Seller Dashboard, Orders           |
| Admin    | Oversees platform operations | Admin Dashboard, Users, Categories |

Users select **Customer / Seller** during registration.  
Admin users are created manually in the backend.

## 🛠️ Tech Stack (Frontend)

- **Next.js (App Router)** – Routing, layouts, SSR/SSG
- **TypeScript** – Type safety
- **Tailwind CSS** – Responsive UI styling
- **shadcn/ui** – Accessible UI components
- **Sonner** – Toast notifications

## Core Features

### Public Features

- Browse all medicines
- Search and filter by:
  - Category
  - Price range
  - Manufacturer
- View medicine details

### Customer Features

- Register & login
- Add medicines to cart
- Place orders (Cash on Delivery)
- Track order status
- Leave reviews after delivery
- Manage profile

### Seller Features

- Seller dashboard
- Add / update / delete medicines
- Manage stock levels
- View customer orders
- Update order status

### Admin Features

- Admin dashboard
- View all users
- Active / Banned users
- Manage categories
- View all orders & medicines

## Pages & Routes

> ⚠️ Routes may vary slightly depending on implementation, but core structure remains the same.

### Public Routes

| Route        | Page             | Description                         |
| ------------ | ---------------- | ----------------------------------- |
| `/`          | Home             | Hero, featured sections, categories |
| `/shop`      | Shop             | Browse medicines with filters       |
| `/shop/[id]` | Medicine Details | Product info, reviews               |
| `/login`     | Login            | User authentication                 |
| `/signup`    | Register         | Role selection & signup             |

---

### Customer Routes (Protected)

| Route          | Page          | Description      |
| -------------- | ------------- | ---------------- |
| `/cart`        | Cart          | View cart items  |
| `/checkout`    | Checkout      | Shipping address |
| `/orders`      | My Orders     | Order history    |
| `/orders/[id]` | Order Details | Status & items   |

### Customer,Admin and Seller(Protected)

| `/profile` | Profile | Update user info |

---

### Seller Routes (Protected)

| Route               | Page      | Description         |
| ------------------- | --------- | ------------------- |
| `/seller`           | Dashboard | Stats overview      |
| `/seller/medicines` | Inventory | Manage medicines    |
| `/seller/orders`    | Orders    | Update order status |

---

### Admin Routes (Protected)

| Route               | Page       | Description         |
| ------------------- | ---------- | ------------------- |
| `/admin`            | Dashboard  | Platform statistics |
| `/admin/users`      | Users      | Manage users        |
| `/admin/orders`     | Orders     | View all orders     |
| `/admin/categories` | Categories | Manage categories   |

## Project Structure

```bash
├── public/
│
├── src/
│   ├── actions/                     # Server actions
│   │   ├── category.action.ts
│   │   ├── medicine.action.ts
│   │   ├── orders.action.ts
│   │   └── user.action.ts
│   │
│   ├── app/                         # Next.js App Router
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── favicon.ico
│   │   │
│   │   ├── (protected)/             # Auth-protected routes
│   │   │   ├── (customer)/
│   │   │   ├── (dashboard)/
│   │   │   ├── profile/
│   │   │   └── layout.tsx
│   │   │
│   │   └── (public)/                # Public routes
│   │       ├── page.tsx
│   │       ├── about/
│   │       ├── login/
│   │       ├── signup/
│   │       ├── shop/
│   │       └── layout.tsx
│   │
│   ├── components/
│   │   ├── layouts/                 # Global layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── CartIcon.tsx
│   │   │   ├── UserMenu.tsx
│   │   │   └── ModeToggle.tsx
│   │   │
│   │   ├── modules/                 # Feature-based components
│   │   │   ├── admin/
│   │   │   ├── authentication/
│   │   │   ├── cart/
│   │   │   ├── checkout/
│   │   │   ├── dashboard/
│   │   │   ├── homepage/
│   │   │   ├── orders/
│   │   │   ├── profile/
│   │   │   ├── seller/
│   │   │   └── shop/
│   │   │
│   │   └── ui/                      # Reusable UI components (shadcn)
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── table.tsx
│   │       ├── pagination.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── tooltip.tsx
│   │       ├── skeleton.tsx
│   │       ├── sonner.tsx
│   │       └── page-error.tsx
│   │
│   ├── context/                     # React contexts
│   │   └── cart-context.tsx
│   │
│   ├── hooks/                       # Custom hooks
│   │   └── use-mobile.ts
│   │
│   ├── lib/                         # Utilities & helpers
│   │   ├── auth-client.ts
│   │   ├── getSessionUser.ts
│   │   └── utils.ts
│   │
│   ├── providers/                   # App providers
│   │   └── ThemeProviders.tsx
│   │
│   ├── services/                    # API service layer
│   │   ├── category.service.ts
│   │   ├── medicine.service.ts
│   │   ├── order.service.ts
│   │   └── user.services.ts
│   │
│   ├── types/                       # TypeScript types
│   │   ├── cart.ts
│   │   ├── category.ts
│   │   ├── medicine.ts
│   │   ├── order.ts
│   │   ├── user.ts
│   │   └── index.ts
│   │
│   ├── env.ts
│   └── proxy.ts
│
├── components.json                  # shadcn/ui config
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
│
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
│
├── README.md
└── next-env.d.ts
```

## Environment Variables

Create a `.env` file and configure:

API_URL=

NEXT_PUBLIC_API_URL=

NEXT_PUBLIC_FRONTEND_URL =

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# The app will be available at:

http://localhost:3000

```

# Deployment

This Frontend is deployed on Vercel.

Thank You

Github: [rakibulhasanroki](https://github.com/rakibulhasanroki)
