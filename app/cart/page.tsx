'use client';
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, clearCart, total, itemCount } = useCart();
  const router = useRouter();

  if (cart.length === 0) return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <p className="text-8xl mb-6">🛒</p>
      <h2 className="text-2xl font-serif font-bold mb-3">Your cart is empty</h2>
      <p className="text-gray-500 mb-8">The ravens have brought no goods to your keep</p>
      <Link href="/" className="btn-gold px-8 py-3 rounded-xl inline-block">Browse the Market</Link>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">🛒 Your Cart ({itemCount} item{itemCount !== 1 ? 's' : ''})</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="bg-cardbg border border-border rounded-xl p-6 flex gap-6">
              <div className="text-5xl">{item.emoji}</div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-500 text-sm">House {item.house}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-600 hover:text-red-400 transition-colors">✕</button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button onClick={() => updateQty(item.id, item.quantity - 1)} className="px-3 py-2 text-gold-500 hover:bg-darkbg">-</button>
                    <span className="px-3 py-2">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, item.quantity + 1)} className="px-3 py-2 text-gold-500 hover:bg-darkbg">+</button>
                  </div>
                  <p className="text-gold-400 font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className="text-gray-500 hover:text-red-400 text-sm transition-colors">✕ Clear cart</button>
        </div>
        {/* Order Summary */}
        <div className="bg-cardbg border border-border rounded-xl p-6 h-fit sticky top-4">
          <h2 className="text-xl font-serif font-bold mb-6">Order Summary</h2>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal ({itemCount} items)</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Shipping</span>
              <span className="text-green-400">FREE</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Tax (8%)</span>
              <span>${(total * 0.08).toFixed(2)}</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between font-bold text-xl">
              <span>Total</span>
              <span className="text-gold-400">${(total * 1.08).toFixed(2)}</span>
            </div>
          </div>
          <button onClick={() => router.push('/checkout')} className="w-full btn-gold py-4 rounded-xl text-lg font-bold">
            Proceed to Checkout →
          </button>
          <Link href="/" className="block text-center text-gold-500 hover:underline mt-4 text-sm">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
