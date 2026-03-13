import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "The Iron Market - Game of Thrones Playing Cards",
  description: "Premium Game of Thrones themed playing cards from Westeros and beyond",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-cardbg border-t border-border py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-gold-500 font-serif text-lg mb-2">⚔️ The Iron Market ⚔️</p>
              <p className="text-gray-500 text-sm">"When you play the game of thrones, you win or you die."</p>
              <p className="text-gray-600 text-xs mt-4">© 2024 The Iron Market. All rights reserved.</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
