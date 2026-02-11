import { NextRequest, NextResponse } from "next/server";
import { userService } from "@/services/user.services";
import { Role } from "@/types";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  let isAuthenticated = false;
  let role: Role | null = null;

  const { data } = await userService.getSession();

  if (data?.user) {
    isAuthenticated = true;
    role = data.user.role;
  }

  if (
    pathname === "/" ||
    pathname.startsWith("/shop") ||
    pathname === "/cart" ||
    pathname === "/about" ||
    pathname === "/login" ||
    pathname === "/signup"
  ) {
    return NextResponse.next();
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/orders") || pathname.startsWith("/checkout")) {
    if (role !== Role.customer) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (pathname.startsWith("/seller")) {
    if (role !== Role.seller) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (pathname.startsWith("/admin")) {
    if (role !== Role.admin) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/orders/:path*",
    "/checkout",
    "/seller",
    "/seller/:path*",
    "/admin",
    "/admin/:path*",
  ],
};
