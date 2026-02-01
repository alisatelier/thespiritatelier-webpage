"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  return (
    <header className="bg-gradient-to-b from-black to-brandnavy">
      <div className="h-20 flex items-center justify-between px-4 sm:px-6 md:px-10">
  <h1 className="font-display text-white text-4xl sm:text-2xl md:text-5xl">
          <Link href="/">THE SPIIT ATELIER</Link>
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link className="text-white hover:text-brandlightpink" href="/shop">Shop</Link>
          <Link className="text-white hover:text-brandlightpink" href="/features">Features</Link>
          <Link className="text-white hover:text-brandlightpink" href="/pricing">Pricing</Link>
          <Link className="text-white hover:text-brandlightpink" href="/about">About</Link>
          <Link className="text-white hover:text-brandlightpink" href="/contact">Contact</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          {/* Icons */}
          <svg className={`${open ? "hidden" : "block"} h-6 w-6`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className={`${open ? "block" : "hidden"} h-6 w-6`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden transition-[max-height,opacity] duration-200 ease-out overflow-hidden  ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <nav className="px-4 pb-4 pt-2 ">
          <ul className="space-y-2 rounded-xl bg-black/30 ring-1 ring-white/10 p-3 backdrop-blur">
            <li><Link href="/shop" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-white hover:bg-white/10 font-display">Shop</Link></li>
            <li><Link href="/features" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-white hover:bg-white/10 font-display">Features</Link></li>
            <li><Link href="/pricing" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-white hover:bg-white/10 font-display">Pricing</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-white hover:bg-white/10 font-display">About</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-white hover:bg-white/10 font-display">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
