export interface Product {
  id: string
  name: string
  description: string
  price: number
  currency: string
  category: string
  image: string
  rating: number
  reviews: number
  inStock: boolean
  featured: boolean
  tags: string[]
}

export const products: Product[] = [
  // Automobile Category
  {
    id: 'auto-001',
    name: 'Toyota Corolla 2024',
    description: 'Brand new Toyota Corolla with advanced safety features, fuel-efficient engine, and modern technology.',
    price: 28500,
    currency: 'USD',
    category: 'automobile',
    image: 'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800&q=80',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    featured: true,
    tags: ['New', 'Sedan', 'Fuel Efficient']
  },
  {
    id: 'auto-002',
    name: 'Auto Parts - Brake System',
    description: 'Premium brake pads and rotors compatible with most vehicle models. High-performance and durable.',
    price: 450,
    currency: 'USD',
    category: 'automobile',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: false,
    tags: ['Parts', 'Brakes', 'Safety']
  },
  {
    id: 'auto-003',
    name: 'Car Accessories Kit',
    description: 'Complete car accessories package including seat covers, floor mats, and dashboard organizer.',
    price: 180,
    currency: 'USD',
    category: 'automobile',
    image: 'https://images.unsplash.com/photo-1449130015084-2bad90c50ca4?w=800&q=80',
    rating: 4.5,
    reviews: 234,
    inStock: true,
    featured: false,
    tags: ['Accessories', 'Interior', 'Kit']
  },

  // Buildware Category
  {
    id: 'build-001',
    name: 'Premium Cement - 50kg',
    description: 'High-quality Portland cement suitable for all construction projects. Fast-setting and durable.',
    price: 15,
    currency: 'USD',
    category: 'buildware',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    rating: 4.7,
    reviews: 312,
    inStock: true,
    featured: true,
    tags: ['Cement', 'Construction', 'Bulk']
  },
  {
    id: 'build-002',
    name: 'Power Tools Set',
    description: 'Professional-grade power tools including drill, saw, and sander. Perfect for construction projects.',
    price: 850,
    currency: 'USD',
    category: 'buildware',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80',
    rating: 4.9,
    reviews: 187,
    inStock: true,
    featured: true,
    tags: ['Tools', 'Power Tools', 'Professional']
  },
  {
    id: 'build-003',
    name: 'Roofing Sheets Bundle',
    description: 'Galvanized steel roofing sheets, corrosion-resistant and weather-proof. 10 sheets per bundle.',
    price: 320,
    currency: 'USD',
    category: 'buildware',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
    rating: 4.6,
    reviews: 145,
    inStock: true,
    featured: false,
    tags: ['Roofing', 'Steel', 'Bundle']
  },

  // Electronics Category
  {
    id: 'elec-001',
    name: 'Samsung 4K Smart TV 55"',
    description: 'Crystal clear 4K display with smart features, HDR support, and built-in streaming apps.',
    price: 1200,
    currency: 'USD',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    rating: 4.9,
    reviews: 423,
    inStock: true,
    featured: true,
    tags: ['TV', '4K', 'Smart']
  },
  {
    id: 'elec-002',
    name: 'iPhone 15 Pro',
    description: 'Latest Apple iPhone with advanced camera system, A17 Pro chip, and titanium design.',
    price: 1199,
    currency: 'USD',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1592286927505-f1d79cb7eb3a?w=800&q=80',
    rating: 4.8,
    reviews: 567,
    inStock: true,
    featured: true,
    tags: ['Phone', 'Apple', 'Flagship']
  },
  {
    id: 'elec-003',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-canceling headphones with 30-hour battery life and superior sound quality.',
    price: 299,
    currency: 'USD',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    rating: 4.7,
    reviews: 892,
    inStock: true,
    featured: false,
    tags: ['Audio', 'Wireless', 'Premium']
  },

  // Fashion Category
  {
    id: 'fash-001',
    name: 'Designer African Print Dress',
    description: 'Elegant African print dress with modern cut. Perfect for special occasions and celebrations.',
    price: 120,
    currency: 'USD',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
    rating: 4.8,
    reviews: 234,
    inStock: true,
    featured: true,
    tags: ['Dress', 'African Print', 'Designer']
  },
  {
    id: 'fash-002',
    name: 'Premium Leather Shoes',
    description: 'Handcrafted leather shoes with superior comfort and timeless style. Available in multiple colors.',
    price: 180,
    currency: 'USD',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
    rating: 4.9,
    reviews: 345,
    inStock: true,
    featured: false,
    tags: ['Shoes', 'Leather', 'Handcrafted']
  },
  {
    id: 'fash-003',
    name: 'Fashion Accessories Set',
    description: 'Complete accessories bundle including watch, bracelet, and sunglasses. Modern and stylish.',
    price: 95,
    currency: 'USD',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
    rating: 4.6,
    reviews: 178,
    inStock: true,
    featured: false,
    tags: ['Accessories', 'Bundle', 'Fashion']
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}
