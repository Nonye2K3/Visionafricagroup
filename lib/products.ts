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
  {
    id: 'prod-001',
    name: 'Premium Investment Portfolio',
    description: 'Diversified investment portfolio with high-growth African stocks, bonds, and real estate opportunities.',
    price: 50000,
    currency: 'USD',
    category: 'investments',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80',
    rating: 4.9,
    reviews: 127,
    inStock: true,
    featured: true,
    tags: ['Investment', 'Portfolio', 'High Return']
  },
  {
    id: 'prod-002',
    name: 'Commercial Property Package',
    description: 'Prime commercial real estate opportunity in Lagos CBD with guaranteed rental returns.',
    price: 250000,
    currency: 'USD',
    category: 'real-estate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    rating: 4.8,
    reviews: 89,
    inStock: true,
    featured: true,
    tags: ['Real Estate', 'Commercial', 'Investment']
  },
  {
    id: 'prod-003',
    name: 'Agricultural Investment Fund',
    description: 'Sustainable agriculture investment with focus on modern farming techniques and export crops.',
    price: 25000,
    currency: 'USD',
    category: 'agriculture',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: true,
    tags: ['Agriculture', 'Sustainable', 'Export']
  },
  {
    id: 'prod-004',
    name: 'Tech Startup Investment',
    description: 'Early-stage investment opportunity in African fintech with high growth potential.',
    price: 100000,
    currency: 'USD',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    rating: 4.6,
    reviews: 73,
    inStock: true,
    featured: true,
    tags: ['Technology', 'Fintech', 'Startup']
  },
  {
    id: 'prod-005',
    name: 'Luxury Apartments',
    description: 'Premium residential apartments in Nairobi with world-class amenities and security.',
    price: 180000,
    currency: 'USD',
    category: 'real-estate',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    rating: 4.9,
    reviews: 94,
    inStock: true,
    featured: false,
    tags: ['Real Estate', 'Luxury', 'Residential']
  },
  {
    id: 'prod-006',
    name: 'Business Consulting Package',
    description: 'Comprehensive business strategy and market entry consulting for African markets.',
    price: 15000,
    currency: 'USD',
    category: 'business-services',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    rating: 4.8,
    reviews: 112,
    inStock: true,
    featured: false,
    tags: ['Consulting', 'Strategy', 'Business']
  },
  {
    id: 'prod-007',
    name: 'Manufacturing Equipment',
    description: 'State-of-the-art manufacturing equipment for food processing and packaging.',
    price: 75000,
    currency: 'USD',
    category: 'consumer-goods',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    rating: 4.7,
    reviews: 68,
    inStock: true,
    featured: false,
    tags: ['Manufacturing', 'Equipment', 'Industrial']
  },
  {
    id: 'prod-008',
    name: 'Solar Energy System',
    description: 'Commercial solar power installation with guaranteed energy savings and ROI.',
    price: 45000,
    currency: 'USD',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    rating: 4.9,
    reviews: 145,
    inStock: true,
    featured: false,
    tags: ['Energy', 'Solar', 'Renewable']
  },
  {
    id: 'prod-009',
    name: 'Retail Chain Franchise',
    description: 'Franchise opportunity for established retail chain with proven business model.',
    price: 120000,
    currency: 'USD',
    category: 'retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    rating: 4.6,
    reviews: 87,
    inStock: true,
    featured: false,
    tags: ['Retail', 'Franchise', 'Business']
  },
  {
    id: 'prod-010',
    name: 'Electronics Distribution',
    description: 'Authorized distribution rights for leading electronics brands in West Africa.',
    price: 95000,
    currency: 'USD',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
    rating: 4.7,
    reviews: 103,
    inStock: true,
    featured: false,
    tags: ['Electronics', 'Distribution', 'Trade']
  },
  {
    id: 'prod-011',
    name: 'Hospitality Investment',
    description: 'Boutique hotel investment opportunity in prime tourist destination.',
    price: 300000,
    currency: 'USD',
    category: 'real-estate',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    rating: 4.8,
    reviews: 76,
    inStock: true,
    featured: false,
    tags: ['Hospitality', 'Hotel', 'Tourism']
  },
  {
    id: 'prod-012',
    name: 'Export Services Package',
    description: 'Complete export documentation and logistics services for African exporters.',
    price: 8500,
    currency: 'USD',
    category: 'business-services',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
    rating: 4.6,
    reviews: 92,
    inStock: true,
    featured: false,
    tags: ['Export', 'Logistics', 'Trade']
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
