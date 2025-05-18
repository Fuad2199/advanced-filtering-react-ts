import { useEffect, useState } from 'react'

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[]
}

function Sidebar() {
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string []>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirt",
  ])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://dummyjson.com/products')
        const data: FetchResponse = await response.json()
        console.log(data)
      } catch (error) {
        console.error('Error fetching product', error)
      }
    }
  })

  fetchCategories();

  return (
    <div>
      Sidebar
    </div>
  )
}

export default Sidebar
