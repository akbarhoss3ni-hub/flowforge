import type { Metadata } from "next";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowForge",
  description: "Describe a workflow → get a validated JSON flow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen text-gray-900">
          <header className="border-b">
            <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
              <Link href="/" className="text-xl font-semibold">FlowForge</Link>
              <nav className="flex items-center gap-4">
                <Link href="/dashboard" className="text-sm underline underline-offset-4">Dashboard</Link>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="rounded-xl px-3 py-1.5 text-sm border">Sign in</button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
