'use client';
import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const houses = ["All", "Stark", "Lannister", "Targaryen", "Baratheon", "Tyrell", "Greyjoy", "Special"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 100]);

  const filtered = useMemo(() => {
    let result = products;
    if (search) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (selectedHouse !== "All") {
      result = result.filter(p => p.house === selectedHouse);
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (sortBy === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [search, selectedHouse, sortBy, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-12 py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/10 to-transparent rounded-2xl" />
        <div className="relative z-10">
          <p className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-3">Premium Collection</p>
          <h1 className="text-5xl font-serif font-bold mb-4">
            <span className="text-gold-400">The Iron Market</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exquisite playing cards bearing the sigils of the Great Houses of Westeros
          </p>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="bg-cardbg border border-border rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="🔍 Search cards, houses, editions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-darkbg border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500"
            />
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="bg-darkbg border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {houses.map(house => (
            <button
              key={house}
              onClick={() => setSelectedHouse(house)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedHouse === house
                  ? "bg-gold-500 text-black"
                  : "bg-darkbg border border-border text-gray-400 hover:border-gold-500"
              }`}
            >
              {house}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500">{filtered.length} card set{filtered.length !== 1 ? 's' : '' } found</p>
      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-6xl mb-4">🐉</p>
          <p className="text-xl text-gray-500">No cards found for your search</p>
          <button onClick={() => { setSearch(''); setSelectedHouse('All'); }} className="mt-4 text-gold-500 hover:underline">
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
