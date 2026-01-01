// proxy.ts
import { auth } from "@/auth"; // তোমার auth.ts ফাইল থেকে auth function import
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default auth(function proxy(request: NextRequest) {
  // const { nextUrl } = request;
  // const session = request.auth; // JWT থেকে user, role ইত্যাদি পাওয়া যাবে

  //  শুধু লগইন করা ইউজাররা /checkout দেখতে পারবে
  // if (nextUrl.pathname.startsWith("/checkout")) {
  //   if (!session) {
  //     const callbackUrl = encodeURIComponent(nextUrl.pathname + nextUrl.search);
  //     return NextResponse.redirect(new URL(`/sign-in?callbackUrl=${callbackUrl}`, nextUrl));
  //   }
  // }

  //  /account routes শুধু লগইন করা ইউজারদের জন্য
  // if (nextUrl.pathname.startsWith("/account")) {
  //   if (!session) {
  //     return NextResponse.redirect(new URL("/sign-in", nextUrl));
  //   }
  // }

  //  /admin routes শুধু admin role এর জন্য
  // if (nextUrl.pathname.startsWith("/admin")) {
  //   if (session?.user?.role !== "admin") {
  //     return NextResponse.redirect(new URL("/sign-in", nextUrl));
  //   }
  // }

  // যদি কোনো condition match না করে, তাহলে স্বাভাবিকভাবে চলতে হয় ...
  return NextResponse.next();
});

export const config = {
  matcher: [
    // সব request-এ proxy চালাবে, কিন্তু এই paths গুলো বাদ দিয়ে
    // (যাতে sign-in, sign-up এ redirect loop না হয়)
    "/((?!api|_next/static|_next/image|favicon.ico|sign-in|sign-up).*)",
  ],
};
