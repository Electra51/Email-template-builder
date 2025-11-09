import Link from "next/link";
import React from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-[#4a7887] text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">Email Builder</h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Email Builder. All rights reserved.
      </footer>
    </div>
  );
}
