"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Tags,
  ArrowLeft,
} from "lucide-react";

type Role = "SELLER" | "ADMIN";

const NAV_ITEMS: Record<
  Role,
  {
    label: string;
    href: string;
    icon: React.ElementType;
  }[]
> = {
  SELLER: [
    { label: "Dashboard", href: "/seller", icon: LayoutDashboard },
    { label: "Medicines", href: "/seller/medicines", icon: Package },
    { label: "Orders", href: "/seller/orders", icon: ShoppingBag },
  ],
  ADMIN: [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Users", href: "/admin/users", icon: Users },
    { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
    { label: "Categories", href: "/admin/categories", icon: Tags },
  ],
};

export default function DashboardSidebar({ role }: { role: Role }) {
  const items = NAV_ITEMS[role];

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MediStore</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
