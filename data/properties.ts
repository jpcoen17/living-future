export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  priceFormatted: string;
  beds: number;
  baths: number;
  area: number;
  type: "apartment" | "villa" | "house" | "penthouse";
  status: "for-sale" | "for-rent" | "sold";
  featured: boolean;
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  coordinates: { lat: number; lng: number };
  yearBuilt: number;
  parkingSpaces: number;
}

export const PROPERTIES: Property[] = [
  {
    id: "skyline-apartment",
    name: "Skyline Apartment",
    location: "Downtown, Manhattan",
    price: 320000,
    priceFormatted: "$320,000",
    beds: 3,
    baths: 2,
    area: 210,
    type: "apartment",
    status: "for-sale",
    featured: true,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    description: "A stunning high-rise apartment with panoramic city views, featuring floor-to-ceiling windows, premium finishes, and world-class amenities. Experience urban luxury at its finest.",
    amenities: ["Pool", "Gym", "Concierge", "Parking", "Rooftop", "Spa", "Smart Home", "Security"],
    coordinates: { lat: 40.7589, lng: -73.9851 },
    yearBuilt: 2022,
    parkingSpaces: 2,
  },
  {
    id: "greenwood-villa",
    name: "Greenwood Villa",
    location: "Ventura Hills, California",
    price: 450000,
    priceFormatted: "$450,000",
    beds: 4,
    baths: 3,
    area: 350,
    type: "villa",
    status: "for-sale",
    featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    description: "Nestled in the lush Ventura Hills, this stunning villa offers a seamless blend of modern architecture and natural beauty. Featuring expansive terraces, a private pool, and breathtaking mountain views.",
    amenities: ["Private Pool", "Garden", "Gym", "Home Theater", "Smart Home", "Garage", "Wine Cellar", "BBQ Area"],
    coordinates: { lat: 34.2747, lng: -119.2290 },
    yearBuilt: 2021,
    parkingSpaces: 3,
  },
  {
    id: "lakeview-house",
    name: "Lakeview House",
    location: "Lakeside, Chicago",
    price: 380000,
    priceFormatted: "$380,000",
    beds: 5,
    baths: 4,
    area: 420,
    type: "house",
    status: "for-sale",
    featured: true,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    ],
    description: "A magnificent lakeside property offering serene water views and unparalleled privacy. This contemporary masterpiece features open-plan living, chef's kitchen, and direct lake access.",
    amenities: ["Lake Access", "Boat Dock", "Pool", "Garden", "Smart Home", "Fireplace", "Gym", "Guest House"],
    coordinates: { lat: 41.9631, lng: -87.6414 },
    yearBuilt: 2020,
    parkingSpaces: 4,
  },
  {
    id: "aurora-penthouse",
    name: "Aurora Penthouse",
    location: "South Beach, Miami",
    price: 890000,
    priceFormatted: "$890,000",
    beds: 4,
    baths: 4,
    area: 480,
    type: "penthouse",
    status: "for-sale",
    featured: false,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80",
    ],
    description: "The ultimate Miami luxury lifestyle. This double-level penthouse crowns a premier oceanfront tower with stunning 360-degree views, private terrace with pool, and ultra-premium finishes.",
    amenities: ["Private Terrace Pool", "Ocean View", "Concierge", "Spa", "Rooftop Helipad", "Wine Room", "Cinema", "Smart Home"],
    coordinates: { lat: 25.7617, lng: -80.1918 },
    yearBuilt: 2023,
    parkingSpaces: 3,
  },
  {
    id: "cedar-villa",
    name: "Cedar Villa",
    location: "Beverly Hills, Los Angeles",
    price: 1200000,
    priceFormatted: "$1,200,000",
    beds: 6,
    baths: 5,
    area: 600,
    type: "villa",
    status: "for-sale",
    featured: false,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54730d73a?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1200&q=80",
    ],
    description: "An iconic Beverly Hills estate set on over an acre of manicured grounds. This architectural masterpiece features a grand entrance, resort-style pool, and sweeping canyon views.",
    amenities: ["Resort Pool", "Tennis Court", "Guest House", "Home Theater", "Wine Cellar", "Gym", "Spa", "Smart Home"],
    coordinates: { lat: 34.0736, lng: -118.4004 },
    yearBuilt: 2019,
    parkingSpaces: 6,
  },
  {
    id: "harbor-apartment",
    name: "Harbor Apartment",
    location: "Harbor View, Seattle",
    price: 295000,
    priceFormatted: "$295,000",
    beds: 2,
    baths: 2,
    area: 175,
    type: "apartment",
    status: "for-rent",
    featured: false,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200&q=80",
    ],
    description: "A modern waterfront apartment with stunning Puget Sound views. Contemporary design meets Pacific Northwest charm with premium appliances and a spacious open-plan layout.",
    amenities: ["Harbor View", "Concierge", "Gym", "Rooftop Deck", "Parking", "Storage", "EV Charging"],
    coordinates: { lat: 47.6062, lng: -122.3321 },
    yearBuilt: 2022,
    parkingSpaces: 1,
  },
];

export const STATS = [
  { number: "1200+", label: "Happy Families" },
  { number: "50+", label: "Projects" },
  { number: "15", label: "Cities" },
  { number: "10+", label: "Years Experience" },
];

export const TEAM = [
  {
    name: "Alexander Moore",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "20+ years in luxury real estate development",
  },
  {
    name: "Sophia Chen",
    role: "Chief Design Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Award-winning architect and interior designer",
  },
  {
    name: "James Harper",
    role: "Head of Investments",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "Specialist in premium property investment strategies",
  },
  {
    name: "Emma Williams",
    role: "Client Relations Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Building lifelong relationships with discerning clients",
  },
];

export const TESTIMONIALS = [
  {
    name: "Jason Warren",
    location: "California",
    text: "The perfect home for my family. The environment is amazing!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    name: "Amanda Lee",
    location: "New York",
    text: "Modern design, great facilities, and the best investment decision.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "David Kim",
    location: "Texas",
    text: "Smooth process, beautiful community, and excellent service.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
];

export const VIRTUAL_ROOMS = [
  {
    id: "living",
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
  },
  {
    id: "kitchen",
    name: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
  },
  {
    id: "bedroom",
    name: "Master Bedroom",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
  },
  {
    id: "bathroom",
    name: "Bathroom",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80",
  },
  {
    id: "outdoor",
    name: "Outdoor Terrace",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80",
  },
];
