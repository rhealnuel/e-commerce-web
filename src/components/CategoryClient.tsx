'use client'
import { useState, useMemo } from 'react'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  brand: string
  rating?: number
}

export default function CategoryClient({
  products,
  categorySlug,
}: {
  products: Product[]
  categorySlug: string
}) {
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 300000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const categoryName = categorySlug
    ? categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)
    : 'Unknown'

  const availableBrands = [...new Set(products.map(product => product.brand))]

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1]
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      return inPriceRange && brandMatch
    })

    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price)
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price)
      case 'rating':
        return filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0))
      case 'newest':
        return filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id))
      default:
        return filtered
    }
  }, [products, priceRange, selectedBrands, sortBy])

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Category Not Found</h1>
          <p className="text-stone-600 mb-8">
            The category "{categoryName}" doesn't exist.
          </p>
          <Link
            href="/"
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  // All your JSX remains the same, just replace `categoryProducts` with `products`
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-stone-300 mb-8">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-amber-300">Categories</span>
            <span className="mx-2">/</span>
            <span className="text-white">{categoryName}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                <span className="text-amber-300 font-semibold tracking-wide">
                  CATEGORY
                </span>
              </div>
              <h1 className="text-5xl font-black mb-6">
                {categoryName}
                <span className="block text-2xl text-amber-300 font-normal mt-2">
                  {products.length} Product{products.length !== 1 ? 's' : ''} Available
                </span>
              </h1>
              <p className="text-xl text-stone-300 leading-relaxed mb-8">
                Discover our premium collection of {categoryName.toLowerCase()} products.
                From cutting-edge technology to innovative designs, find everything you
                need to elevate your experience.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">
                    {Math.min(...products.map(p => Math.round(p.price / 1000)))}K+
                  </div>
                  <div className="text-stone-400 text-sm">Starting From</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">
                    {availableBrands.length}
                  </div>
                  <div className="text-stone-400 text-sm">Top Brands</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">
                    {(products.reduce((acc, p) => acc + (p.rating || 0), 0) / products.length).toFixed(1)}★
                  </div>
                  <div className="text-stone-400 text-sm">Avg Rating</div>
                </div>
              </div>
            </div>
            {/* Category Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-stone-800 to-amber-900 rounded-3xl p-8 shadow-2xl border border-amber-700 border-opacity-30">
                <div className="grid grid-cols-2 gap-4">
                  {products.slice(0, 4).map((product, index) => (
                    <div
                      key={product.id}
                      className={`bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl p-4 text-center shadow-lg transform hover:scale-105 transition-all duration-300 ${
                        index % 2 === 1 ? 'mt-4' : ''
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-16 object-cover rounded-lg mb-2"
                      />
                      <div className="text-white font-bold text-xs truncate">{product.name}</div>
                      <div className="text-amber-200 text-xs">
                        ₦{(product.price / 100).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Filters and Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Controls Bar */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden bg-stone-100 text-stone-700 px-4 py-2 rounded-lg font-medium hover:bg-stone-200 transition-colors flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v4.586a1 1 0 01-.293.707L9 21.414A1 1 0 018 21V14.586a1 1 0 00-.293-.707L1.293 7.293A1 1 0 011 6.586V4z"
                    />
                  </svg>
                  <span>Filters</span>
                </button>
                <p className="text-stone-600">
                  Showing{' '}
                  <span className="font-semibold text-stone-900">
                    {filteredProducts.length}
                  </span>{' '}
                  of{' '}
                  <span className="font-semibold text-stone-900">
                    {products.length}
                  </span>{' '}
                  products
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <label className="text-stone-700 font-medium">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="bg-white border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <h3 className="text-lg font-bold text-stone-900 mb-6">Filters</h3>
                {/* Price Range */}
                <div className="mb-8">
                  <h4 className="font-semibold text-stone-800 mb-4">Price Range</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-stone-600">
                      <span>₦{(priceRange[0] / 100).toLocaleString()}</span>
                      <span>₦{(priceRange[1] / 100).toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="300000"
                      value={priceRange[1]}
                      onChange={e =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #d97706 0%, #d97706 ${
                          (priceRange[1] / 300000) * 100
                        }%, #e5e7eb ${(priceRange[1] / 300000) * 100}%, #e5e7eb 100%)`,
                      }}
                    />
                  </div>
                </div>
                {/* Brands */}
                <div className="mb-8">
                  <h4 className="font-semibold text-stone-800 mb-4">Brands</h4>
                  <div className="space-y-3">
                    {availableBrands.map(brand => (
                      <label
                        key={brand}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandToggle(brand)}
                          className="w-4 h-4 text-amber-600 bg-stone-100 border-stone-300 rounded focus:ring-amber-500 focus:ring-2"
                        />
                        <span className="text-stone-700">{brand}</span>
                        <span className="text-xs text-stone-500 ml-auto">
                          ({products.filter(p => p.brand === brand).length})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setPriceRange([0, 300000])
                    setSelectedBrands([])
                  }}
                  className="w-full bg-stone-100 text-stone-700 py-2 rounded-lg font-medium hover:bg-stone-200 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">
                    No Products Found
                  </h3>
                  <p className="text-stone-600 mb-8">
                    Try adjusting your filters to see more products.
                  </p>
                  <button
                    onClick={() => {
                      setPriceRange([0, 300000])
                      setSelectedBrands([])
                    }}
                    className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Related Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Explore Other Categories
            </h2>
            <p className="text-lg text-stone-600">
              Discover more amazing products
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...new Set(products.map(p => p.category))]
              .filter(cat => cat.toLowerCase() !== categorySlug.toLowerCase())
              .map(category => {
                const categoryProducts = products.filter(p => p.category === category)
                const categoryIcons: { [key: string]: string } = {
                  Audio: '🎧',
                  Wearables: '⌚',
                  Gaming: '🎮',
                  Accessories: '🔌',
                  Storage: '💾',
                }
                return (
                  <Link
                    key={category}
                    href={`/category/${category.toLowerCase()}`}
                    className="group bg-gradient-to-br from-stone-50 to-amber-50 border-2 border-stone-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-amber-300 transition-all transform hover:scale-105"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {categoryIcons[category] || '📱'}
                    </div>
                    <h3 className="font-bold text-stone-900 mb-2">{category}</h3>
                    <p className="text-sm text-stone-600 mb-2">
                      {categoryProducts.length} products
                    </p>
                    <div className="text-xs text-amber-600 font-semibold bg-amber-100 rounded-full px-2 py-1 inline-block">
                      From ₦
                      {Math.min(...categoryProducts.map(p => Math.round(p.price / 1000)))}K
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>
    </div>
  )
}
