'use client';
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(product.rating) ? '★' : '☆');

  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="bg-cardbg border border-border rounded-xl overflow-hidden card-hover cursor-pointer h-full flex flex-col">
        {/* Image / Emoji Area */}
        <div className="bg-darkbg p-8 text-center relative">
          {product.badge && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
              {product.badge}
            </span>
          )}
          <div className="text-7xl mb-2">{product.emoji}</div>
          <div className="text-xs text-gold-500 uppercase tracking-widest">House {product.house}</div>
        </div>
        {/* Info */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-white mb-1 line-clamp-2">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1">{product.description}</p>
          <div className="flex items-center justify-between mb-3">
            <span className="text-gold-400 text-sm">{stars.join('')}</span>
            <span className="text-gray-600 text-xs">({product.reviews})</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gold-400 font-bold text-xl">${product.price.toFixed(2)}</span>
            <button
              onClick={handleAdd}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                added ? 'bg-green-600 text-white' : 'btn-gold'
              }`}
            >
              {added ? '✓' : '+ Cart'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
