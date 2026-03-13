'use client';
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-cardbg border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl">⚔️</span>
          <div>
            <p className="text-gold-400 font-serif font-bold text-xl leading-none">The Iron Market</p>
            <p className="text-gray-600 text-xs">Game of Thrones Cards</p>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-gray-400 hover:text-gold-400 transition-colors hidden md:block">Shop</Link>
          <Link href="/cart" className="relative flex items-center gap-2 bg-darkbg border border-border rounded-xl px-4 py-2 hover:border-gold-500 transition-all">
            <span className="text-xl">🛒</span>
            <span className="text-white font-medium">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-500 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
