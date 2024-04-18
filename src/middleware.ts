import { NextResponse, NextRequest } from "next/server";
import getJwtSession from "./lib/jwt";

const rootUrl = "/";
const publicUrl = ["/about", "/contact", "/product", "/search"];
const authUrl = ["/sign-in", "/sign-up"];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const decodedToken = await getJwtSession();

  const isPublicUrl =
    publicUrl
      .map((p) => url.pathname.startsWith(p))
      .filter((p) => p === true)[0] || url.pathname === rootUrl;
  const isAuthUrl = authUrl.includes(url.pathname);

  if (isPublicUrl) return;
  if (isAuthUrl) {
    if (decodedToken) return NextResponse.redirect(new URL("/", url.origin));
    else return;
  }

  if (!decodedToken)
    return NextResponse.redirect(
      new URL(`/sign-in?callback=${url.href}`, url.origin)
    );

  return;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
