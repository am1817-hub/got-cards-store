'use client';
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', address: '', city: '', zip: '', country: 'US',
    cardNumber: '', expiry: '', cvv: '', cardName: ''
  });
  const [loading, setLoading] = useState(false);
  const [ordered, setOrdered] = useState(false);

  const orderId = 'GOT-' + Math.random().toString(36).substr(2, 9).toUpperCase();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) { setStep(2); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setOrdered(true);
    clearCart();
  };

  if (ordered) return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-8xl mb-6">🎉</div>
      <h1 className="text-4xl font-serif font-bold text-gold-400 mb-4">Order Confirmed!</h1>
      <p className="text-gray-400 mb-2">Order ID: <span className="text-gold-500 font-mono">{orderId}</span></p>
      <p className="text-gray-400 mb-8">The ravens have been dispatched. Your cards shall arrive within 3-5 moons.</p>
      <div className="bg-cardbg border border-border rounded-xl p-6 mb-8 text-left">
        <h3 className="font-semibold mb-3 text-gold-400">📦 Shipping to:</h3>
        <p className="text-gray-400">{form.name}</p>
        <p className="text-gray-400">{form.address}, {form.city} {form.zip}</p>
        <p className="text-gray-400">{form.email}</p>
      </div>
      <Link href="/" className="btn-gold px-8 py-4 rounded-xl inline-block text-lg font-bold">
        Continue Shopping
      </Link>
    </div>
  );

  if (cart.length === 0) return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <p className="text-gray-500 mb-4">Your cart is empty</p>
      <Link href="/" className="text-gold-500 hover:underline">Return to Market</Link>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">📜 Checkout</h1>
      {/* Steps */}
      <div className="flex items-center gap-4 mb-8">
        {['Shipping', 'Payment'].map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step > i + 1 ? 'bg-green-600 text-white' : step === i + 1 ? 'bg-gold-500 text-black' : 'bg-cardbg border border-border text-gray-500'
            }`}>{step > i + 1 ? '✓' : i + 1}</div>
            <span className={step === i + 1 ? 'text-gold-400 font-medium' : 'text-gray-500'}>{s}</span>
            {i < 1 && <span className="text-gray-600 mx-2">→</span>}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-4">
          {step === 1 && (
            <div className="bg-cardbg border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">🏰 Shipping Information</h2>
              {[['name','Full Name'],['email','Email Address'],['address','Street Address'],['city','City'],['zip','ZIP Code']].map(([name, label]) => (
                <div key={name}>
                  <label className="text-sm text-gray-400 mb-1 block">{label}</label>
                  <input
                    type={name === 'email' ? 'email' : 'text'}
                    name={name}
                    value={form[name as keyof typeof form]}
                    onChange={handleChange}
                    required
                    className="w-full bg-darkbg border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
              ))}
            </div>
          )}
          {step === 2 && (
            <div className="bg-cardbg border border-border rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">💳 Payment Information</h2>
              <p className="text-xs text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                ⚠️ This is a mock checkout. No real payment will be processed.
              </p>
              {[['cardName','Name on Card'],['cardNumber','Card Number','4242 4242 4242 4242'],['expiry','Expiry (MM/YY)','12/26'],['cvv','CVV','123']].map(([name, label, placeholder]) => (
                <div key={name}>
                  <label className="text-sm text-gray-400 mb-1 block">{label}</label>
                  <input
                    type="text"
                    name={name}
                    value={form[name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={placeholder || '' }
                    required
                    className="w-full bg-darkbg border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
              ))}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-gold py-4 rounded-xl text-lg font-bold disabled:opacity-50"
          >
            {loading ? 'Processing your order...' : step === 1 ? 'Continue to Payment →' : 'Place Order ⚔️'}
          </button>
          {step === 2 && <button type="button" onClick={() => setStep(1)} className="w-full text-gray-500 hover:text-white py-2">← Back to Shipping</button>}
        </form>
        {/* Order Summary */}
        <div className="bg-cardbg border border-border rounded-xl p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3 mb-4">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-400">{item.emoji} {item.name} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-3 space-y-2">
            <div className="flex justify-between text-gray-400 text-sm"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
            <div className="flex justify-between text-gray-400 text-sm"><span>Shipping</span><span className="text-green-400">FREE</span></div>
            <div className="flex justify-between text-gray-400 text-sm"><span>Tax (8%)</span><span>${(total * 0.08).toFixed(2)}</span></div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
              <span>Total</span>
              <span className="text-gold-400">${(total * 1.08).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
