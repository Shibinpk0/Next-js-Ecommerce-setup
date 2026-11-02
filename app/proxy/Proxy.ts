import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/products", "/cart"];

export function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isProtected = protectedRoutes.some(
    (route) => path === route || path.startsWith(`${route}/`),
  );

  const session = req.cookies.get("session")?.value;

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*", "/cart/:path*"],
};
