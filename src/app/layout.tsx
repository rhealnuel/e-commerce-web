import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '../utils/cartContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1 container mx-auto p-4">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
