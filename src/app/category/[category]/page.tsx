'use client'
import { products } from '@/data/products'
import CategoryClient from '@/components/CategoryClient'
import { useParams } from 'next/navigation'

export default function CategoryPage() {
  const params = useParams()
  // params.category will be a string (for a single param) or array (if catch-all route)
  // To be safe, force to string:
  const categorySlug = Array.isArray(params.category) ? params.category[0] : params.category

  const categoryProducts = products.filter(product =>
    categorySlug && product.category.toLowerCase() === categorySlug.toLowerCase()
  )

  return (
    <CategoryClient
      products={categoryProducts}
      categorySlug={categorySlug ?? ""}
    />
  )
}

