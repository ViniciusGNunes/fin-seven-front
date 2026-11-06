import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("X-Access-Token")?.value;
  const { pathname } = request.nextUrl;

  // Redirecionamento de rotas legadas (/login e /register -> /access)
  if (pathname === "/login" || pathname === "/register") {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.redirect(new URL("/access", request.url));
  }

  const isAuthPage =
    pathname === "/access" ||
    pathname === "/forgot-password" ||
    pathname === "/reset-password" ||
    pathname === "/verify-email";

  const isOAuthCallback = pathname.startsWith("/oauth");

  const isPublicPage =
    pathname === "/" ||
    pathname === "/404" ||
    isAuthPage ||
    isOAuthCallback;

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!isPublicPage && !token) {
    return NextResponse.redirect(new URL("/access", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"
  ],
};
