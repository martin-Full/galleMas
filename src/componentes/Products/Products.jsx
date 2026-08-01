import { useEffect, useState } from 'react'
//import { useState } from 'react'
//import products from '../../data/products'
import ProductCard from '../ProductCard/ProductCard'

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'dulces', label: 'Dulces' },
  { id: 'saladas', label: 'Saladas' },
  { id: 'light', label: 'Light' },
]

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [products, setProducts] = useState([])

  const filteredProducts =
    selectedCategory === 'todos'
      ? products
      : products.filter(
          (product) => product.category === selectedCategory,
        )

      useEffect(() => {
  fetch('http://localhost:3000/api/products')
    .then((response) => response.json())
    .then((data) => {
      console.log("Productos recibidos:", data)
      setProducts(data)
    })
    .catch((error) => {
      console.error(error)
    })
}, [])

  return (
    <section
      id="productos"
      className="bg-[#FBF6EF] px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C5573F]">
            Nuestro catálogo
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#4A2105] md:text-5xl">
            Elegí tus favoritas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#2D211B]/65">
            Encontrá galletitas dulces, saladas y light de marcas reconocidas.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category.id

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-3 font-semibold transition duration-300 ${
                  isActive
                    ? 'bg-[#4A2105] text-white shadow-lg'
                    : 'border border-[#4A2105]/10 bg-white text-[#4A2105] hover:-translate-y-1 hover:border-[#C5573F]/30'
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-12 rounded-3xl bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-[#4A2105]">
              No encontramos productos en esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Products