'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      subtitle: 'Speak directly with our experts',
      info: '+234 800 123 4567',
      subInfo: '+234 700 987 6543',
      action: 'tel:+2348001234567',
      available: '24/7 Support Available',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      subtitle: 'Send us a detailed message',
      info: 'support@e-shop.ng',
      subInfo: 'sales@e-shop.ng',
      action: 'mailto:support@e-shop.ng',
      available: 'Response within 2 hours',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      subtitle: 'Chat with us in real-time',
      info: 'Start Conversation',
      subInfo: 'Instant responses available',
      action: '#',
      available: 'Online 9AM - 9PM WAT',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: '📍',
      title: 'Visit Our Store',
      subtitle: 'Come see us in person',
      info: '123 Victoria Island',
      subInfo: 'Lagos, Nigeria',
      action: 'https://maps.google.com',
      available: 'Mon-Sat: 9AM-7PM',
      color: 'from-amber-500 to-orange-600'
    }
  ]

  const departments = [
    { name: 'Customer Support', email: 'support@e-shop.ng', description: 'General inquiries and help' },
    { name: 'Technical Support', email: 'tech@e-shop.ng', description: 'Product and technical issues' },
    { name: 'Sales Team', email: 'sales@e-shop.ng', description: 'Bulk orders and wholesale' },
    { name: 'Returns & Refunds', email: 'returns@e-shop.ng', description: 'Return and refund requests' }
  ]

  const faqs = [
    {
      question: 'What are your customer service hours?',
      answer: 'Our customer service team is available 24/7 via phone and email. Live chat is available from 9AM to 9PM WAT, Monday through Sunday.'
    },
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'We typically respond to emails within 2 hours during business hours. Phone calls are answered immediately, and live chat responses are instant.'
    },
    {
      question: 'Can I return or exchange products?',
      answer: 'Yes! We offer a 30-day return policy on all items. Products must be in original condition with all packaging and accessories included.'
    },
    {
      question: 'Do you offer technical support for products?',
      answer: 'Absolutely! Our technical support team can help with product setup, troubleshooting, and warranty claims. Contact tech@e-shop.ng for assistance.'
    },
    {
      question: 'How can I track my order?',
      answer: 'You can track your order using the tracking number sent via email and SMS. You can also log into your account to view order status and tracking information.'
    }
  ]

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-stone-200">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-12 h-12 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-black text-stone-900 mb-6">Message Sent Successfully! 🎉</h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Thank you for reaching out to us! We've received your message and our team will get back to you within 2 hours.
            </p>
            
            <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-6 mb-8 border border-amber-200">
              <h3 className="font-bold text-stone-900 mb-4 text-lg">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <span className="text-stone-700">Our expert team reviews your message carefully</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span className="text-stone-700">You'll receive a personalized response within 2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <span className="text-stone-700">For urgent matters, call us at +234 800 123 4567</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Continue Shopping
              </Link>
              <Link 
                href="/contact"
                onClick={() => setSubmitted(false)}
                className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-stone-100 transition-all duration-300"
              >
                Send Another Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 text-white overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-amber-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-600 rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              <span>💬</span>
              <span>WE'RE HERE TO HELP YOU</span>
              <span>💬</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Get in
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">
                Touch
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-stone-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Have questions about our products or need assistance? Our expert support team is ready to help you 24/7 with personalized solutions.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-black text-yellow-300">2hrs</div>
                <div className="text-stone-300 text-sm">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-black text-yellow-300">24/7</div>
                <div className="text-stone-300 text-sm">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-black text-yellow-300">98%</div>
                <div className="text-stone-300 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-stone-900 mb-6">Choose How to Connect</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Multiple ways to reach our expert team. Pick the method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-stone-100 hover:border-amber-200"
              >
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{method.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-stone-900 mb-2">{method.title}</h3>
                  <p className="text-stone-600 mb-4">{method.subtitle}</p>
                  
                  <div className="space-y-2 mb-6">
                    <p className="font-bold text-lg text-amber-600">{method.info}</p>
                    {method.subInfo && (
                      <p className="text-sm text-stone-500">{method.subInfo}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                      {method.available}
                    </span>
                  </div>

                  <a
                    href={method.action}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Contact Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Company Info */}
      <div className="py-20 bg-gradient-to-br from-stone-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-stone-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-stone-900">Send us a Message</h2>
                    <p className="text-stone-600">We'll get back to you within 2 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-bold text-stone-800 mb-3">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border-2 border-stone-200 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-200 focus:border-amber-500 transition-all duration-300 bg-stone-50 group-hover:bg-white"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-bold text-stone-800 mb-3">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border-2 border-stone-200 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-200 focus:border-amber-500 transition-all duration-300 bg-stone-50 group-hover:bg-white"
                        placeholder="+234 800 123 4567"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-stone-800 mb-3">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-2 border-stone-200 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-200 focus:border-amber-500 transition-all duration-300 bg-stone-50 group-hover:bg-white"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-stone-800 mb-3">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full border-2 border-stone-200 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-200 focus:border-amber-500 transition-all duration-300 bg-stone-50 group-hover:bg-white appearance-none cursor-pointer"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="orders">Order Status & Tracking</option>
                      <option value="returns">Returns & Refunds</option>
                      <option value="wholesale">Wholesale & Bulk Orders</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="complaint">Complaint or Feedback</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-stone-800 mb-3">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full border-2 border-stone-200 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-200 focus:border-amber-500 transition-all duration-300 bg-stone-50 group-hover:bg-white"
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-stone-800 mb-3">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full border-2 border-stone-200 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-amber-200 focus:border-amber-500 transition-all duration-300 resize-none bg-stone-50 group-hover:bg-white"
                      placeholder="Please provide detailed information about your inquiry. The more details you provide, the better we can assist you."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 rounded-2xl font-black text-xl transition-all duration-300 transform ${
                      isSubmitting
                        ? 'bg-stone-400 text-stone-600 cursor-not-allowed scale-95'
                        : 'bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white hover:from-amber-500 hover:via-orange-500 hover:to-red-500 hover:shadow-2xl hover:scale-[1.02] active:scale-95'
                    } shadow-xl`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Your Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Company Info & Departments */}
            <div className="space-y-8">
              {/* Store Information */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-stone-200">
                <h3 className="text-2xl font-black text-stone-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-600 rounded-xl flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Visit Our Store
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-2">Store Address</h4>
                      <p className="text-stone-600 leading-relaxed">
                        123 Victoria Island<br />
                        Lagos State, Nigeria<br />
                        101001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-2">Phone Numbers</h4>
                      <p className="text-stone-600">
                        Main: +234 800 123 4567<br />
                        Support: +234 700 987 6543
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2L3 7v11a1 1 0 001 1h3v-5a1 1 0 011-1h4a1 1 0 011 1v5h3a1 1 0 001-1V7l-7-5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-2">Store Hours</h4>
                      <p className="text-stone-600">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: 12:00 PM - 5:00 PM<br />
                        <span className="text-green-600 font-semibold">Public Holidays: Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-stone-200">
                <h3 className="text-2xl font-black text-stone-900 mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-stone-50 to-amber-50 rounded-2xl border border-amber-200 hover:shadow-md transition-all">
                      <h4 className="font-bold text-stone-900 text-sm">{dept.name}</h4>
                      <p className="text-xs text-stone-600 mb-2">{dept.description}</p>
                      <a href={`mailto:${dept.email}`} className="text-amber-600 hover:text-amber-700 font-semibold text-sm">
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-stone-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-stone-600">
              Quick answers to common questions about our support and services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl border-2 border-stone-200 hover:border-amber-300 transition-all">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-white/50 transition-colors rounded-2xl">
                  <span className="font-bold text-stone-900 text-lg">{faq.question}</span>
                  <svg className="w-6 h-6 text-amber-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-stone-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Support CTA */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-800 to-red-800 text-white py-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-3 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg animate-bounce">
            <span>🚨</span>
            <span>URGENT SUPPORT NEEDED?</span>
            <span>🚨</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Need Immediate Help?
          </h2>
          <p className="text-xl lg:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our dedicated support team is available 24/7 to assist you with any urgent matters. Don't wait - get help now!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a 
              href="tel:+2348001234567"
              className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-6 rounded-2xl font-bold text-lg hover:from-green-400 hover:to-emerald-500 transition-all shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <div>
                <div>Call Now</div>
                <div className="text-sm opacity-90">Instant Support</div>
              </div>
            </a>

            <button className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-6 rounded-2xl font-bold text-lg hover:from-blue-400 hover:to-cyan-500 transition-all shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3">
              <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              <div>
                <div>Live Chat</div>
                <div className="text-sm opacity-90">Real-time Help</div>
              </div>
            </button>

            <a 
              href="mailto:support@e-shop.ng"
              className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-6 rounded-2xl font-bold text-lg hover:from-purple-400 hover:to-pink-500 transition-all shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <div>
                <div>Email Us</div>
                <div className="text-sm opacity-90">Priority Response</div>
              </div>
            </a>
          </div>

          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="font-bold text-xl mb-3">Our Commitment to You</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>2-hour email response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>24/7 phone support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Expert technical team</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>100% satisfaction guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Contact Methods */}
      <div className="py-16 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Connect With Us Online</h2>
            <p className="text-stone-300 text-lg">Follow us on social media for updates, tips, and exclusive offers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { name: 'WhatsApp', icon: '💬', color: 'from-green-500 to-green-600', link: '#' },
              { name: 'Facebook', icon: '📘', color: 'from-blue-500 to-blue-600', link: '#' },
              { name: 'Twitter', icon: '🐦', color: 'from-sky-400 to-sky-500', link: '#' },
              { name: 'Instagram', icon: '📷', color: 'from-pink-500 to-purple-600', link: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className={`group bg-gradient-to-br ${social.color} rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{social.icon}</div>
                <div className="font-bold text-sm">{social.name}</div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-stone-400 mb-4">Prefer traditional methods?</p>
            <div className="space-y-2">
              <p className="text-stone-300">
                <strong>Postal Address:</strong> E-Shop Nigeria, P.O. Box 12345, Victoria Island, Lagos, Nigeria
              </p>
              <p className="text-stone-300">
                <strong>Business Registration:</strong> RC 1234567 | <strong>VAT ID:</strong> 12345678-0001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}