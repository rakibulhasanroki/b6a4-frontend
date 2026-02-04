"use client";

import { redirect } from "next/navigation";
import Navbar from "@/components/layouts/Navbar";
import { getSessionUser } from "@/lib/getSessionUser";
import { Role } from "@/types";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
