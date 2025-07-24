import ProductList from '../components/ProductList'
import Link from 'next/link'

export default function Home() {
  const categories = [
    { name: 'Audio', icon: '🎧', description: 'Premium headphones & speakers', count: '20+ products', color: 'from-amber-600 to-orange-700' },
    { name: 'Wearables', icon: '⌚', description: 'Smart watches & fitness trackers', count: '15+ products', color: 'from-orange-600 to-red-700' },
    { name: 'Gaming', icon: '🎮', description: 'Gaming mice & accessories', count: '25+ products', color: 'from-amber-700 to-yellow-700' },
    { name: 'Accessories', icon: '🔌', description: 'Chargers, hubs & more', count: '30+ products', color: 'from-yellow-600 to-amber-700' },
    { name: 'Storage', icon: '💾', description: 'SSDs & external drives', count: '12+ products', color: 'from-orange-700 to-amber-800' },
  ]

  const features = [
    { 
      icon: '🚛', 
      title: 'Lightning Fast Delivery', 
      description: 'Same-day delivery in Lagos, 24-48hrs nationwide',
      detail: 'Free shipping on orders over ₦50,000'
    },
    { 
      icon: '🛡️', 
      title: 'Bank-Level Security', 
      description: 'Advanced encryption & fraud protection',
      detail: 'Your data is always safe with us'
    },
    { 
      icon: '👨‍💻', 
      title: 'Expert Tech Support', 
      description: '24/7 technical assistance & guidance',
      detail: 'Real humans, not bots'
    },
    { 
      icon: '🔄', 
      title: 'Hassle-Free Returns', 
      description: '30-day return policy with instant refunds',
      detail: 'No questions asked guarantee'
    },
  ]

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Tech Enthusiast', comment: 'Best prices and fastest delivery in Nigeria!', rating: 5 },
    { name: 'Michael Chen', role: 'Content Creator', comment: 'Amazing product quality and customer service.', rating: 5 },
    { name: 'Amara Okafor', role: 'Gamer', comment: 'Found exactly what I needed at unbeatable prices.', rating: 5 },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation Bar */}
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-amber-600 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600 opacity-15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-600 opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                  <span className="text-amber-300 font-semibold tracking-wide">PREMIUM ELECTRONICS STORE</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                  Tech That
                  <span className="block bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Transforms
                  </span>
                  Your World
                </h1>
                
                <p className="text-xl text-stone-300 leading-relaxed max-w-2xl">
                  Discover cutting-edge electronics, premium gadgets, and innovative tech solutions. 
                  From professional audio equipment to gaming gear - we've got everything to elevate your digital lifestyle.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#products" className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-2xl">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Explore Products</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
                <Link href="/categories" className="border-2 border-stone-300 text-stone-300 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-stone-300 hover:text-stone-900 transition-all duration-300">
                  Browse Categories
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-700">
                <div className="text-center">
                  <div className="text-3xl font-black text-amber-400">50K+</div>
                  <div className="text-stone-400 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-amber-400">99.8%</div>
                  <div className="text-stone-400 text-sm">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-amber-400">24/7</div>
                  <div className="text-stone-400 text-sm">Expert Support</div>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main Product Showcase */}
                <div className="bg-gradient-to-br from-stone-800 to-amber-900 rounded-3xl p-8 shadow-2xl border border-amber-700 border-opacity-30">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-6 text-center shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl mb-3">🎧</div>
                        <div className="text-white font-bold text-sm">Audio Excellence</div>
                        <div className="text-amber-200 text-xs mt-1">From ₦15,000</div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-6 text-center shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl mb-3">⌚</div>
                        <div className="text-white font-bold text-sm">Smart Wearables</div>
                        <div className="text-orange-200 text-xs mt-1">From ₦25,000</div>
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="bg-gradient-to-br from-yellow-600 to-amber-700 rounded-2xl p-6 text-center shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl mb-3">🎮</div>
                        <div className="text-white font-bold text-sm">Gaming Gear</div>
                        <div className="text-yellow-200 text-xs mt-1">From ₦8,000</div>
                      </div>
                      <div className="bg-gradient-to-br from-amber-700 to-orange-800 rounded-2xl p-6 text-center shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="text-4xl mb-3">💾</div>
                        <div className="text-white font-bold text-sm">Storage Solutions</div>
                        <div className="text-amber-200 text-xs mt-1">From ₦12,000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>⚡</span>
              <span>Why Choose E-Shop</span>
            </div>
            <h2 className="text-4xl font-black text-stone-900 mb-4">Built for Tech Lovers</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">We understand technology because we live it. Every service is designed with tech enthusiasts in mind.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-stone-50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 transition-all duration-300 border-2 border-transparent hover:border-amber-200">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{feature.title}</h3>
                <p className="text-stone-700 mb-2">{feature.description}</p>
                <p className="text-amber-600 text-sm font-semibold">{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-stone-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-stone-600">Curated collections for every tech need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.name.toLowerCase()}`} 
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{category.name}</h3>
                <p className="text-stone-600 text-sm mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 text-xs font-bold bg-amber-100 rounded-full px-3 py-1">{category.count}</span>
                  <svg className="w-5 h-5 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-stone-400">Real reviews from real tech enthusiasts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-stone-800 to-amber-900 rounded-2xl p-8 border border-amber-700 border-opacity-30">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-200 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="text-amber-300 font-bold">{testimonial.name}</div>
                  <div className="text-stone-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span>🔥</span>
              <span>Trending Now</span>
            </div>
            <h2 className="text-4xl font-black text-stone-900 mb-4">Featured Products</h2>
            <p className="text-xl text-stone-600">Hand-picked electronics that define excellence</p>
          </div>
          <ProductList />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-stone-900 via-amber-900 to-orange-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-white leading-tight">
              Ready to Upgrade
              <span className="block bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Your Tech Game?
              </span>
            </h2>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust E-Shop for their technology needs. 
              Experience the difference quality makes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link href="/products" className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-2xl">
                <span className="flex items-center justify-center space-x-2">
                  <span>Start Shopping</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
              <Link href="/contact" className="border-2 border-stone-300 text-stone-300 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-stone-300 hover:text-stone-900 transition-all duration-300">
                Get Expert Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  )
}