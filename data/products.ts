export interface Product {
  id: string;
  name: string;
  house: string;
  price: number;
  description: string;
  emoji: string;
  rating: number;
  reviews: number;
  badge?: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 'stark-wolves',
    name: 'House Stark - Winter Wolves Edition',
    house: 'Stark',
    price: 24.99,
    description: 'Premium playing cards featuring the direwolf sigil of House Stark. Each card showcases intricate Winterfell-inspired artwork with icy blue accents.',
    emoji: '🐺',
    rating: 4.9,
    reviews: 847,
    badge: 'Best Seller',
    features: ['54 cards (52 + 2 jokers)', 'Direwolf court cards', 'Linen finish for smooth handling', 'Collector's tin included', 'Certificate of authenticity']
  },
  {
    id: 'lannister-lions',
    name: 'House Lannister - Golden Lions Edition',
    house: 'Lannister',
    price: 34.99,
    description: 'Luxurious gold-foil playing cards bearing the lion sigil of House Lannister. A Lannister always pays his debts — in style.',
    emoji: '🦁',
    rating: 4.8,
    reviews: 623,
    badge: 'Premium',
    features: ['54 cards with gold foil accents', 'Cersei & Jaime as Queen/Jack', 'Gilded edges', 'Velvet pouch included', 'Limited edition numbering']
  },
  {
    id: 'targaryen-dragons',
    name: 'House Targaryen - Fire & Blood Edition',
    house: 'Targaryen',
    price: 39.99,
    description: 'Breathtaking dragon-themed playing cards in crimson and black. Three-headed dragon artwork on every face card. Fire cannot kill a dragon.',
    emoji: '🐉',
    rating: 5.0,
    reviews: 1204,
    badge: '🔥 Hot',
    features: ['54 cards with dragon artwork', 'Daenerys & Jon as Queen/King', 'Heat-reactive tuck box', '3 dragon jokers', 'Signed by artist']
  },
  {
    id: 'baratheon-stags',
    name: 'House Baratheon - Storm's End Edition',
    house: 'Baratheon',
    price: 22.99,
    description: 'Bold playing cards featuring the crowned stag of House Baratheon. Storm's End-inspired stormy artwork with gold and black coloring.',
    emoji: '🦸',
    rating: 4.6,
    reviews: 312,
    features: ['54 standard cards', 'Stag court cards', 'Weather-resistant coating', 'Storm grey tuck box', 'Collectible bookmark included']
  },
  {
    id: 'tyrell-roses',
    name: 'House Tyrell - Growing Strong Edition',
    house: 'Tyrell',
    price: 27.99,
    description: 'Elegant rose-adorned playing cards from House Tyrell of Highgarden. Floral patterns on every card back with emerald and gold tones.',
    emoji: '🌹',
    rating: 4.7,
    reviews: 445,
    features: ['54 cards with floral borders', 'Margaery & Olenna as Queen cards', 'Embossed rose pattern', 'Highgarden green tuck box', 'Scented card sleeve']
  },
  {
    id: 'greyjoy-krakens',
    name: 'House Greyjoy - We Do Not Sow Edition',
    house: 'Greyjoy',
    price: 21.99,
    description: 'Dark oceanic playing cards featuring the Kraken of House Greyjoy. Deep sea blue and black with silver tentacle details. What is dead may never die.',
    emoji: '🐙',
    rating: 4.5,
    reviews: 289,
    features: ['54 cards with kraken artwork', 'Theon & Yara as Jack cards', 'Water-resistant finish', 'Driftwood-themed tuck box', 'Iron Islands coin replica']
  },
  {
    id: 'nights-watch',
    name: "Night's Watch - The Wall Edition",
    house: 'Special',
    price: 29.99,
    description: 'Stark black playing cards inspired by the brave brothers of the Night's Watch. White Walker artwork on jokers. The night is dark and full of terrors.',
    emoji: '❄️',
    rating: 4.8,
    reviews: 567,
    badge: 'Limited',
    features: ['54 cards in matte black', 'White Walker jokers', 'Jon Snow as King of Spades', 'Velvet black tuck box', 'Crow feather bookmark']
  },
  {
    id: 'iron-throne',
    name: 'The Iron Throne - Master Set',
    house: 'Special',
    price: 89.99,
    description: 'The ultimate Game of Thrones playing card collection. All 7 house decks in a collector's chest with Iron Throne centerpiece. For the true fan who sits on the Iron Throne.',
    emoji: '👑',
    rating: 5.0,
    reviews: 2341,
    badge: '👑 Ultimate',
    features: ['7 full decks (all Great Houses)', 'Iron Throne display stand', 'Westeros map poster', 'Certificate of authenticity', 'Collector's wooden chest', 'Free shipping worldwide']
  },
  {
    id: 'wildfire-special',
    name: 'Wildfire Edition - Pyromancer's Deck',
    house: 'Special',
    price: 44.99,
    description: 'Electrifying green-tinted playing cards inspired by the wildfire of the Alchemists' Guild. UV-reactive ink glows under blacklight.',
    emoji: '💚',
    rating: 4.9,
    reviews: 789,
    badge: 'New',
    features: ['54 UV-reactive cards', 'Glows green under blacklight', 'Cersei's wildfire artwork', 'Flask-shaped tuck box', 'UV light keychain included']
  },
  {
    id: 'red-wedding',
    name: 'Red Wedding Commemorative Deck',
    house: 'Special',
    price: 32.99,
    description: 'A haunting tribute to the most shocking event in Westeros. Crimson-stained card backs with Rains of Castamere musical notes. The Lannisters send their regards.',
    emoji: '🌹',
    rating: 4.7,
    reviews: 934,
    features: ['54 crimson-stained cards', 'Sheet music jokers', 'Robb Stark as King of Swords', 'Velvet red tuck box', 'Commemorative booklet']
  },
  {
    id: 'stark-bundle',
    name: 'Stark + Lannister Rivalry Bundle',
    house: 'Stark',
    price: 49.99,
    description: 'The ultimate rivalry bundle. House Stark vs House Lannister decks in a dual-sided collector's box. Perfect for 2-player games.',
    emoji: '⚔️',
    rating: 4.8,
    reviews: 412,
    badge: 'Bundle',
    features: ['2 full decks (Stark + Lannister)', 'Dual-sided collector box', 'Rivalry poster included', 'Exclusive crossover jokers', 'Save 30% vs separate purchase']
  },
  {
    id: 'dragon-glass',
    name: 'Dragonglass Edition - Beyond the Wall',
    house: 'Special',
    price: 36.99,
    description: 'Obsidian-black cards with dragonglass-inspired shimmer. The only weapon that can truly kill a White Walker — and these cards.',
    emoji: '🖤',
    rating: 4.6,
    reviews: 356,
    features: ['54 obsidian shimmer cards', 'White Walker court cards', 'Dragonglass shard bookmark', 'Matte black tuck box', 'Night King as Joker']
  },
];
