import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/(.*)"], // match everything to ensure Clerk is detected
};
