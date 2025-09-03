"use client";

import { ModeToggle } from "./mode-toggle";
// import Link from "next/link"; // Will be used for footer navigation in the future

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <ModeToggle />
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; 2025 Andreas Kwik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
