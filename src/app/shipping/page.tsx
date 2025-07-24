export default function ShippingPage() {
  const shippingOptions = [
    {
      icon: '⚡',
      title: 'Same Day Delivery',
      description: 'Get your order within hours',
      locations: 'Lagos & Abuja only',
      time: '2-6 hours',
      price: '₦2,500',
      features: ['Order before 2 PM', 'GPS tracking', 'Direct delivery']
    },
    {
      icon: '🚀',
      title: 'Next Day Delivery',
      description: 'Fast delivery to major cities',
      locations: 'Major cities nationwide',
      time: '1 business day',
      price: '₦1,500',
      features: ['Order before 6 PM', 'SMS notifications', 'Secure packaging']
    },
    {
      icon: '📦',
      title: 'Standard Delivery',
      description: 'Reliable nationwide shipping',
      locations: 'All Nigerian states',
      time: '2-3 business days',
      price: '₦800',
      features: ['Free on orders ₦50K+', 'Insurance included', 'Tracking available']
    },
    {
      icon: '🏪',
      title: 'Pickup Station',
      description: 'Collect from nearest station',
      locations: '500+ pickup points',
      time: '2-4 business days',
      price: '₦300',
      features: ['Lowest cost option', 'Extended pickup time', 'ID verification']
    }
  ]

  const deliveryZones = [
    {
      zone: 'Zone 1 - Lagos & Abuja',
      states: ['Lagos', 'Abuja (FCT)'],
      sameDay: true,
      nextDay: true,
      standard: '1-2 days',
      color: 'from-green-500 to-emerald-600'
    },
    {
      zone: 'Zone 2 - Major Cities',
      states: ['Kano', 'Port Harcourt', 'Ibadan', 'Benin', 'Kaduna', 'Jos', 'Ilorin', 'Enugu'],
      sameDay: false,
      nextDay: true,
      standard: '2-3 days',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      zone: 'Zone 3 - Other States',
      states: ['All other Nigerian states and territories'],
      sameDay: false,
      nextDay: false,
      standard: '3-5 days',
      color: 'from-amber-500 to-orange-600'
    }
  ]

  const faqs = [
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, we only ship within Nigeria. We are working on expanding our international shipping options.'
    },
    {
      question: 'What items cannot be shipped?',
      answer: 'We cannot ship hazardous materials, liquids, perishable items, or items prohibited by Nigerian postal regulations.'
    },
    {
      question: 'Can I change my delivery address after placing an order?',
      answer: 'You can change your delivery address within 2 hours of placing your order by contacting our customer service.'
    },
    {
      question: 'What happens if I\'m not available for delivery?',
      answer: 'Our delivery partner will attempt delivery 3 times. After that, your package will be held at the nearest pickup station for 7 days.'
    },
    {
      question: 'Are there any additional fees?',
      answer: 'No hidden fees! The shipping cost shown at checkout is final. However, remote locations may incur additional charges.'
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 bg-green-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              <span>🚚</span>
              <span>FAST & RELIABLE DELIVERY</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black mb-6">
              Shipping &
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-300 bg-clip-text text-transparent">
                Delivery
              </span>
            </h1>
            
            <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
              Fast, secure, and reliable delivery to your doorstep. We deliver nationwide with multiple shipping options to suit your needs.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-black text-yellow-300">500+</div>
                <div className="text-stone-300 text-sm">Pickup Locations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-black text-yellow-300">99.5%</div>
                <div className="text-stone-300 text-sm">On-Time Delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-black text-yellow-300">24/7</div>
                <div className="text-stone-300 text-sm">Order Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Free Shipping Banner */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <span className="text-2xl">🎉</span>
            <div>
              <span className="font-black text-lg">FREE SHIPPING: </span>
              <span className="font-semibold">On all orders above ₦50,000 nationwide!</span>
            </div>
            <span className="text-2xl">🎉</span>
          </div>
        </div>
      </div>

      {/* Shipping Options */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-stone-900 mb-4">Choose Your Delivery Option</h2>
            <p className="text-lg text-stone-600">Select the shipping method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingOptions.map((option, index) => (
              <div key={index} className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-3xl p-8 border-2 border-stone-200 hover:border-amber-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{option.icon}</div>
                  <h3 className="text-xl font-black text-stone-900 mb-2">{option.title}</h3>
                  <p className="text-stone-600 text-sm mb-4">{option.description}</p>
                  <div className="text-2xl font-black text-amber-600 mb-1">{option.price}</div>
                  <div className="text-stone-500 text-sm mb-2">{option.time}</div>
                  <div className="text-amber-700 text-xs font-semibold bg-amber-100 rounded-full px-3 py-1 inline-block">
                    {option.locations}
                  </div>
                </div>
                
                <div className="space-y-2">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-stone-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery Zones */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-stone-900 mb-4">Delivery Zones & Timeline</h2>
            <p className="text-lg text-stone-600">Check delivery options for your location</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deliveryZones.map((zone, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className={`bg-gradient-to-r ${zone.color} text-white p-6`}>
                  <h3 className="text-xl font-black mb-2">{zone.zone}</h3>
                  <p className="text-sm opacity-90">Standard delivery: {zone.standard}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-bold text-stone-900 mb-3">Locations:</h4>
                    <div className="space-y-1">
                      {zone.states.map((state, idx) => (
                        <span key={idx} className="inline-block bg-stone-100 text-stone-700 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-600">Same Day</span>
                      <span className={`font-semibold ${zone.sameDay ? 'text-green-600' : 'text-red-500'}`}>
                        {zone.sameDay ? '✓ Available' : '✗ Not Available'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-600">Next Day</span>
                      <span className={`font-semibold ${zone.nextDay ? 'text-green-600' : 'text-red-500'}`}>
                        {zone.nextDay ? '✓ Available' : '✗ Not Available'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-600">Standard</span>
                      <span className="font-semibold text-green-600">✓ Available</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shipping Process */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-stone-900 mb-4">How Shipping Works</h2>
            <p className="text-lg text-stone-600">Simple steps from order to delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Order Placed', description: 'You complete your purchase and receive order confirmation', icon: '🛒' },
              { step: '2', title: 'Processing', description: 'We prepare and package your items with care', icon: '📦' },
              { step: '3', title: 'Shipped', description: 'Your order is dispatched with tracking information', icon: '🚚' },
              { step: '4', title: 'Delivered', description: 'You receive your package at your chosen location', icon: '🏠' }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600 text-sm">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-amber-200 transform translate-x-8">
                    <div className="w-3/4 h-full bg-amber-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order Tracking */}
      <div className="py-16 bg-gradient-to-br from-stone-100 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-stone-900 mb-4">Track Your Order</h2>
          <p className="text-lg text-stone-600 mb-8">
            Enter your tracking number to get real-time updates on your delivery
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="text" 
                placeholder="Enter tracking number" 
                className="flex-1 px-4 py-3 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-all">
                Track Order
              </button>
            </div>
            
            <p className="text-stone-500 text-sm mt-4">
              Don't have a tracking number? Check your email or <a href="/contact" className="text-amber-600 hover:text-amber-700 font-semibold">contact us</a>
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-stone-900 mb-4">Shipping FAQ</h2>
            <p className="text-lg text-stone-600">Common questions about our shipping policies</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-stone-50 rounded-2xl">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-amber-50 transition-colors rounded-2xl">
                  <span className="font-bold text-stone-900">{faq.question}</span>
                  <svg className="w-5 h-5 text-stone-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-stone-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Need Help with Shipping?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Our shipping experts are here to help with any questions or concerns
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-stone-900 px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-orange-300 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact Support
            </a>
            <a 
              href="tel:+2348001234567"
              className="border-2 border-amber-300 text-amber-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-300 hover:text-amber-900 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}