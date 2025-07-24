"use client"
import Link from "next/link";

export default function Footer() {
  return (
     <footer className="bg-stone-900 text-stone-300 py-12 border-t-4 border-amber-600">
      {/* Back to Top */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-2xl font-bold text-white">E-Shop</span>
              </div>
              <p className="text-stone-400">Premium electronics for the modern lifestyle. Quality guaranteed.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="hover:text-amber-400 transition-colors">All Products</Link></li>
                <li><Link href="/categories" className="hover:text-amber-400 transition-colors">Categories</Link></li>
                <li><Link href="/deals" className="hover:text-amber-400 transition-colors">Special Deals</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
                <li><Link href="/shipping" className="hover:text-amber-400 transition-colors">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-amber-400 transition-colors">Returns</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <p className="text-stone-400 mb-4">Follow us for the latest tech updates</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                  <span className="text-white">f</span>
                </div>
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                  <span className="text-white">t</span>
                </div>
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer">
                  <span className="text-white">i</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8 text-center">
            <p className="text-stone-500">&copy; 2025 E-Shop. All rights reserved. Built with passion for technology.</p>
          </div>
        </div>
      </footer>
  )
}
