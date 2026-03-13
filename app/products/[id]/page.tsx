'use client';
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find(p => p.id === id);
  const related = products.filter(p => p.house === product?.house && p.id !== id).slice(0, 4);

  if (!product) return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <p className="text-6xl mb-4">🐉</p>
      <p className="text-xl text-gray-500">Product not found in the Seven Kingdoms</p>
      <button onClick={() => router.push(''/''')} className="mt-4 text-gold-500 hover:underline">Return to Market</button>
    </div>
  );

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(product.rating) ? '★' : '☆');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button onClick={() => router.back()} className="text-gold-500 hover:underline mb-6 flex items-center gap-2">
        ← Back to Market
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-cardbg border border-border rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="text-9xl mb-4">{product.emoji}</div>
            <div className="bg-darkbg rounded-lg px-4 py-2 inline-block">
              <p className="text-gold-500 text-sm font-medium">House {product.house}</p>
            </div>
          </div>
        </div>
        {/* Product Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-gold-500/20 text-gold-400 text-xs px-3 py-1 rounded-full">{product.house}</span>
            {product.badge && <span className="bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full">{product.badge}</span>}
          </div>
          <h1 className="text-3xl font-serif font-bold mb-3">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gold-400 text-lg">{stars.join('')}</span>
            <span className="text-gray-400">({product.reviews} reviews)</span>
          </div>
          <p className="text-3xl font-bold text-gold-400 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-400 leading-relaxed mb-6">{product.description}</p>
          <div className="bg-cardbg border border-border rounded-xl p-4 mb-6">
            <h3 className="font-semibold mb-3 text-gold-400">What's Included:</h3>
            <ul className="space-y-2">
              {product.features.map((f: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-gray-400">
                  <span className="text-gold-500">✓</span> {f}
                </li>
              ))}
            </ul>
          </div>
          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border border-border rounded-lg">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4 py-3 text-gold-500 hover:bg-cardbg">-</button>
              <span className="px-4 py-3 text-white">{qty}</span>
              <button onClick={() => setQty(q => Math.min(10, q + 1))} className="px-4 py-3 text-gold-500 hover:bg-cardbg">+</button>
            </div>
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all ${
                added ? 'bg-green-600 text-white' : 'btn-gold'
              }`}
            >
              {added ? '✓ Added to Cart!' : 'Add to Cart '}
            </button>
          </div>
          <button
            onClick={() => { handleAddToCart(); router.push('/cart'); }}
            className="w-full py-3 rounded-xl border border-gold-500 text-gold-500 font-bold hover:bg-gold-500/10 transition-all"
          >
            Buy Now
          </button>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="bg-cardbg border border-border rounded-lg p-3">
              <p className="text-2xl">📦</p>
              <p className="text-xs text-gray-500 mt-1">Free Shipping</p>
            </div>
            <div className="bg-cardbg border border-border rounded-lg p-3">
              <p className="text-2xl">🛡️</p>
              <p className="text-xs text-gray-500 mt-1">Sealed & Protected</p>
            </div>
            <div className="bg-cardbg border border-border rounded-lg p-3">
              <p className="text-2xl">⚔️</p>
              <p className="text-xs text-gray-500 mt-1">Official Licensed</p>
            </div>
          </div>
        </div>
      </div>
      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold mb-6 text-gold-400">More from House {product.house}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}
