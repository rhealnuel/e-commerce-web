import ProductList from '@/components/ProductList'

export default function Home() {
  return (
    <section>
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold mb-2">Welcome to E-Shop</h1>
        <p className="text-lg text-gray-600">Shop the latest electronics and gadgets</p>
      </div>
      <ProductList />
    </section>
  )
}
