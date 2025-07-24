export const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 25999,
    originalPrice: 29999,
    discount: 13,
    image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Experience premium sound quality wirelessly with advanced noise cancellation technology.',
    longDescription: 'Immerse yourself in crystal-clear audio with these premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and comfort-engineered design for all-day wear. Perfect for music lovers, commuters, and professionals who demand the best in audio quality.',
    category: 'Audio',
    brand: 'AudioTech Pro',
    model: 'AT-WH500',
    sku: 'ATP-WH500-BLK',
    inStock: true,
    stockQuantity: 47,
    rating: 4.7,
    reviewCount: 342,
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge (15min = 3 hours)',
      'Bluetooth 5.0',
      'Touch controls',
      'Foldable design',
      'Voice assistant compatible'
    ],
    specifications: {
      batteryLife: '30 hours',
      chargingTime: '2 hours',
      connectivity: 'Bluetooth 5.0, USB-C',
      weight: '280g',
      drivers: '40mm dynamic drivers',
      frequency: '20Hz - 20kHz',
      impedance: '32 ohms',
      warranty: '2 years'
    },
    colors: ['Black', 'White', 'Silver'],
    tags: ['wireless', 'noise-cancelling', 'premium', 'long-battery'],
    shipping: {
      weight: 0.5,
      dimensions: { length: 20, width: 18, height: 8 },
      freeShipping: true,
      estimatedDelivery: '2-3 business days'
    },
    vendor: {
      name: 'AudioTech Solutions',
      rating: 4.8,
      location: 'California, USA'
    }
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 17999,
    originalPrice: 19999,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1461141346587-763ab02bced9?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Keep track of your health and notifications with advanced fitness monitoring.',
    longDescription: 'Stay connected and healthy with this feature-packed smartwatch. Monitor your heart rate, track workouts, receive notifications, and enjoy a vibrant AMOLED display. Water-resistant design makes it perfect for swimming and outdoor activities.',
    category: 'Wearables',
    brand: 'FitTech',
    model: 'FT-SW200',
    sku: 'FTW-SW200-BLU',
    inStock: true,
    stockQuantity: 23,
    rating: 4.5,
    reviewCount: 186,
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Water resistant (50m)',
      '7-day battery life',
      'Sleep tracking',
      'Stress monitoring',
      '100+ workout modes',
      'Always-on display'
    ],
    specifications: {
      displaySize: '1.4 inch AMOLED',
      resolution: '454 x 454 pixels',
      batteryLife: '7 days',
      connectivity: 'Bluetooth 5.1, Wi-Fi, GPS',
      waterResistance: '5ATM (50 meters)',
      compatibility: 'iOS 12+, Android 6.0+',
      sensors: 'Heart rate, SpO2, Accelerometer, Gyroscope, Barometer',
      warranty: '1 year'
    },
    colors: ['Black', 'Blue', 'Rose Gold', 'Silver'],
    tags: ['fitness', 'health', 'gps', 'waterproof', 'notifications'],
    shipping: {
      weight: 0.2,
      dimensions: { length: 10, width: 8, height: 3 },
      freeShipping: true,
      estimatedDelivery: '1-2 business days'
    },
    vendor: {
      name: 'FitTech Innovations',
      rating: 4.6,
      location: 'Singapore'
    }
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 8999,
    originalPrice: 10999,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Party anywhere with portable, rich sound and 360-degree audio.',
    longDescription: 'Take your music everywhere with this powerful portable Bluetooth speaker. Delivering rich, 360-degree sound with deep bass and crystal-clear highs. Waterproof design and 20-hour battery make it perfect for outdoor adventures, pool parties, and camping trips.',
    category: 'Audio',
    brand: 'SoundWave',
    model: 'SW-BT360',
    sku: 'SWV-BT360-RED',
    inStock: true,
    stockQuantity: 76,
    rating: 4.6,
    reviewCount: 428,
    features: [
      '360-degree sound',
      'IPX7 waterproof',
      '20-hour battery',
      'Wireless pairing (connect 2 speakers)',
      'Built-in microphone',
      'LED light show',
      'Voice assistant support',
      'Compact & portable'
    ],
    specifications: {
      power: '20W RMS',
      batteryLife: '20 hours',
      chargingTime: '4 hours',
      connectivity: 'Bluetooth 5.0, AUX input, USB-C',
      range: '30 meters',
      waterRating: 'IPX7',
      drivers: 'Dual 10W drivers + passive radiator',
      weight: '680g',
      warranty: '1 year'
    },
    colors: ['Red', 'Blue', 'Black', 'Green', 'Orange'],
    tags: ['portable', 'waterproof', '360-sound', 'party', 'outdoor'],
    shipping: {
      weight: 0.8,
      dimensions: { length: 18, width: 18, height: 7 },
      freeShipping: true,
      estimatedDelivery: '2-3 business days'
    },
    vendor: {
      name: 'SoundWave Electronics',
      rating: 4.7,
      location: 'Texas, USA'
    }
  },
  {
    id: '4',
    name: 'Wireless Gaming Mouse',
    price: 12999,
    originalPrice: 15999,
    discount: 19,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1563297007-0686b8df9191?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Professional wireless gaming mouse with RGB lighting and precision tracking.',
    longDescription: 'Dominate your games with this high-performance wireless gaming mouse. Features ultra-precise tracking, customizable RGB lighting, and ergonomic design for extended gaming sessions. With 80-hour battery life and ultra-low latency, experience the freedom of wireless without compromise.',
    category: 'Gaming',
    brand: 'GameForce',
    model: 'GF-WM300',
    sku: 'GFP-WM300-RGB',
    inStock: true,
    stockQuantity: 34,
    rating: 4.8,
    reviewCount: 267,
    features: [
      '25,000 DPI sensor',
      '80-hour battery life',
      'RGB customizable lighting',
      'Ultra-low latency (1ms)',
      'Ergonomic design',
      '8 programmable buttons',
      'On-board memory',
      'Lightweight (68g)'
    ],
    specifications: {
      sensor: 'PixArt PAW3370',
      dpi: '100-25,000 DPI',
      batteryLife: '80 hours',
      connectivity: '2.4GHz wireless, USB-C charging',
      weight: '68g',
      buttons: '8 programmable',
      polling: '1000Hz',
      compatibility: 'Windows, macOS, Linux',
      warranty: '2 years'
    },
    colors: ['Black', 'White', 'Red'],
    tags: ['gaming', 'wireless', 'rgb', 'precision', 'lightweight'],
    shipping: {
      weight: 0.3,
      dimensions: { length: 15, width: 10, height: 6 },
      freeShipping: true,
      estimatedDelivery: '1-2 business days'
    },
    vendor: {
      name: 'GameForce Technologies',
      rating: 4.9,
      location: 'South Korea'
    }
  },
  {
    id: '5',
    name: 'USB-C Hub',
    price: 6999,
    originalPrice: 8999,
    discount: 22,
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Compact 7-in-1 USB-C hub with 4K HDMI, fast charging, and multiple ports.',
    longDescription: 'Expand your laptop connectivity with this sleek aluminum USB-C hub. Features 4K HDMI output, USB 3.0 ports, SD card readers, and 100W power delivery. Perfect for professionals who need reliable connectivity in a compact, portable design.',
    category: 'Accessories',
    brand: 'ConnectPro',
    model: 'CP-HUB7',
    sku: 'CPR-HUB7-ALU',
    inStock: true,
    stockQuantity: 89,
    rating: 4.4,
    reviewCount: 156,
    features: [
      '7-in-1 connectivity',
      '4K HDMI output (60Hz)',
      '100W power delivery',
      'USB 3.0 high-speed ports',
      'SD/microSD card readers',
      'Aluminum construction',
      'Plug and play',
      'Compact design'
    ],
    specifications: {
      ports: 'HDMI, 3x USB 3.0, USB-C PD, SD, microSD',
      hdmiOutput: '4K@60Hz, 1080p@120Hz',
      powerDelivery: '100W USB-C PD',
      dataTransfer: 'USB 3.0 up to 5Gbps',
      material: 'Aluminum alloy',
      dimensions: '11.2 x 3.2 x 1.2 cm',
      weight: '85g',
      compatibility: 'USB-C devices, Thunderbolt 3/4',
      warranty: '18 months'
    },
    colors: ['Space Gray', 'Silver'],
    tags: ['usb-c', 'hub', 'hdmi', 'portable', 'aluminum'],
    shipping: {
      weight: 0.2,
      dimensions: { length: 15, width: 8, height: 3 },
      freeShipping: true,
      estimatedDelivery: '1-2 business days'
    },
    vendor: {
      name: 'ConnectPro Solutions',
      rating: 4.5,
      location: 'Taiwan'
    }
  },
  {
    id: '6',
    name: 'Wireless Charging Stand',
    price: 4999,
    originalPrice: 5999,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1586952518485-11b180e92764?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1586952518485-11b180e92764?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Fast wireless charging stand with adjustable angle and LED indicator.',
    longDescription: 'Charge your devices effortlessly with this sleek wireless charging stand. Supports fast charging up to 15W, features adjustable viewing angles, and includes safety protection against overheating. Perfect for your desk, nightstand, or office.',
    category: 'Accessories',
    brand: 'ChargeTech',
    model: 'CT-WCS15',
    sku: 'CTH-WCS15-BLK',
    inStock: true,
    stockQuantity: 127,
    rating: 4.3,
    reviewCount: 203,
    features: [
      '15W fast wireless charging',
      'Adjustable viewing angle',
      'LED charging indicator',
      'Foreign object detection',
      'Temperature protection',
      'Case-friendly charging',
      'Non-slip base',
      'Qi-certified'
    ],
    specifications: {
      chargingPower: '15W max (iPhone: 7.5W, Samsung: 10W)',
      inputPower: '9V/2A, 5V/3A',
      chargingDistance: 'Up to 8mm',
      efficiency: '≥75%',
      certifications: 'Qi, FCC, CE, RoHS',
      material: 'ABS + PC',
      weight: '180g',
      compatibility: 'Qi-enabled devices',
      warranty: '1 year'
    },
    colors: ['Black', 'White', 'Blue'],
    tags: ['wireless-charging', 'qi', 'fast-charging', 'stand', 'desk'],
    shipping: {
      weight: 0.3,
      dimensions: { length: 12, width: 10, height: 15 },
      freeShipping: true,
      estimatedDelivery: '1-2 business days'
    },
    vendor: {
      name: 'ChargeTech Innovations',
      rating: 4.4,
      location: 'China'
    }
  },
  {
    id: '7',
    name: 'Portable SSD Drive',
    price: 18999,
    originalPrice: 22999,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80'
    ],
    description: '1TB external SSD with ultra-fast transfer speeds and rugged design.',
    longDescription: 'Store and transfer your files at lightning speed with this premium portable SSD. Features 1TB capacity, blazing-fast USB 3.2 Gen 2 speeds up to 1,050MB/s, and military-grade durability. Perfect for content creators, photographers, and professionals who need reliable, high-speed storage on the go.',
    category: 'Storage',
    brand: 'StoragePro',
    model: 'SP-SSD1TB',
    sku: 'SPR-SSD1TB-BLU',
    inStock: true,
    stockQuantity: 18,
    rating: 4.9,
    reviewCount: 89,
    features: [
      '1TB storage capacity',
      'Up to 1,050MB/s read speed',
      'USB 3.2 Gen 2 interface',
      'Shock & vibration resistant',
      'Password protection',
      'Hardware encryption',
      'Compact aluminum design',
      'Cross-platform compatible'
    ],
    specifications: {
      capacity: '1TB',
      interface: 'USB 3.2 Gen 2 (USB-C)',
      readSpeed: 'Up to 1,050MB/s',
      writeSpeed: 'Up to 1,000MB/s',
      encryption: 'AES 256-bit hardware',
      durability: 'IP65 rated, shock resistant',
      dimensions: '69 x 34 x 9mm',
      weight: '40g',
      compatibility: 'Windows, macOS, Linux, Android',
      warranty: '5 years'
    },
    colors: ['Blue', 'Silver', 'Black'],
    tags: ['ssd', 'portable', 'fast', '1tb', 'rugged', 'encryption'],
    shipping: {
      weight: 0.1,
      dimensions: { length: 10, width: 6, height: 2 },
      freeShipping: true,
      estimatedDelivery: '1-2 business days'
    },
    vendor: {
      name: 'StoragePro Technologies',
      rating: 4.8,
      location: 'Japan'
    }
  }
];