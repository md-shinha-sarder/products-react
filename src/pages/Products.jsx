import { useEffect, useState } from 'react'
import { FaRegTrashAlt, FaShoppingCart } from 'react-icons/fa'

function Products() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load products')
        }
        return response.json()
      })
      .then((data) => {
        setProducts(data.products)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const addToCart = (product) => {
    setCart((currentCart) => {
      const foundItem = currentCart.find((item) => item.id === product.id)

      if (foundItem) {
        return currentCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      }

      return [...currentCart, { ...product, quantity: 1 }]
    })
  }

  const clearCart = () => {
    setCart([])
  }

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  const cartCount = cart.reduce((sum, item) => {
    return sum + item.quantity
  }, 0)

  return (
    <main className="flex-1 bg-[#f7f8f5]">
      <section className="h-[150px] sm:h-[190px] bg-[#245b43]">
        <div className="max-w-[1180px] h-full mx-auto px-5 sm:px-6 flex flex-col justify-center">
          <h1 className="mb-3 font-serif text-white text-[34px] sm:text-[42px]">
            Ecommerce Store
          </h1>
          <p className="text-[#dbe7df]">
            Home <span className="mx-2 text-[#f2c078]">/</span>
            <strong className="text-[#f2c078]"> Ecommerce Store</strong>
          </p>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 py-8 sm:py-10 pb-20">
        <h2 className="mb-7 text-center font-serif text-[#183b2b] text-[32px] sm:text-[38px]">
          Ecommerce Store
        </h2>

        {loading && (
          <div className="min-h-[280px] grid place-items-center text-[#687267]">
            Loading products...
          </div>
        )}

        {error && (
          <div className="min-h-[280px] grid place-items-center text-[#b64a38]">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] items-start gap-5 sm:gap-6">
            <div
              className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4 sm:gap-5"
              aria-label="Product list"
            >
              {products.map((product) => {
                const cartItem = cart.find((item) => item.id === product.id)
                const quantity = cartItem ? cartItem.quantity : 0

                return (
                  <article
                    className="min-w-0 rounded-xl border border-[#e3e7df] bg-white p-3 shadow-[0_4px_16px_rgba(24,59,43,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(24,59,43,0.10)]"
                    key={product.id}
                  >
                    <button
                      className="h-[190px] sm:h-[180px] w-full grid place-items-center rounded-lg border-0 bg-[#f1f3ef] overflow-hidden cursor-pointer"
                      type="button"
                      onClick={() => addToCart(product)}
                      aria-label={`Add ${product.title} to cart`}
                    >
                      <img
                        className="w-full h-full object-contain p-2 transition duration-300 hover:scale-[1.04]"
                        src={product.thumbnail}
                        alt={product.title}
                      />
                    </button>

                    <div className="px-1 pt-3">
                      <h3 className="h-[42px] text-[#183b2b] text-[15px] leading-[1.35] font-bold overflow-hidden">
                        {product.title}
                      </h3>
                      <p className="mt-1 mb-3 text-[#d66a45] font-extrabold">
                        ${product.price.toFixed(2)}
                      </p>
                      <button
                        className={`h-11 w-full inline-flex items-center justify-center gap-2 rounded-md border font-extrabold transition ${quantity ? 'border-[#245b43] bg-[#245b43] text-white' : 'border-[#dfee4dc] bg-white text-[#245b43] hover:border-[#245b43] hover:bg-[#eef3ef]'}`}
                        type="button"
                        onClick={() => addToCart(product)}
                      >
                        <FaShoppingCart aria-hidden="true" />
                        {quantity ? `Added · ${quantity}` : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>

            <aside className="rounded-[24px] border border-[#e3e7df] bg-white p-4 sm:p-5 shadow-[0_4px_16px_rgba(24,59,43,0.04)] lg:sticky lg:top-6">
              <div className="flex items-center justify-between pb-4">
                <h3 className="m-0 text-[#183b2b] text-xl font-bold">
                  Your Cart
                </h3>
                <span className="min-w-10 h-10 grid place-items-center rounded-full bg-[#ffb64a] text-[#183b2b] text-sm font-bold">
                  {cartCount}
                </span>
              </div>

              <div className="min-h-[150px] lg:min-h-[170px] py-1">
                {cart.length === 0 ? (
                  <p className="h-[150px] m-0 grid place-items-center text-[#92988f]">
                    Your cart is empty
                  </p>
                ) : (
                  cart.map((item) => (
                    <div
                      className="min-h-[92px] grid grid-cols-[64px_minmax(0,1fr)] items-center gap-4 border-t border-[#edf0ea] py-4"
                      key={item.id}
                    >
                      <img
                        className="w-[64px] h-[64px] rounded-lg object-contain"
                        src={item.thumbnail}
                        alt={item.title}
                      />

                      <div className="min-w-0 flex flex-col">
                        <strong className="text-[#183b2b] text-sm sm:text-base truncate">
                          {item.title}
                        </strong>
                        <span className="mt-1 text-[#e79528] text-sm font-bold">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <>
                  <div className="mt-3 rounded-[18px] border-t-2 border-[#2f73c7] bg-[#183b2b] text-white p-5">
                    <div className="flex items-end justify-between">
                      <span className="text-sm text-[#69a9ff]">
                        Total amount
                      </span>
                      <strong className="text-[32px] leading-none">
                        ${total.toFixed(2)}
                      </strong>
                    </div>
                    <small className="mt-3 block text-[#cbd7ff]">
                      {cartCount} items
                    </small>
                  </div>

                  <button
                    className="mt-4 h-12 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#dfe4dc] bg-white text-[#183b2b] font-bold transition hover:border-[#d66a45] hover:text-[#d66a45]"
                    type="button"
                    onClick={clearCart}
                  >
                    <FaRegTrashAlt aria-hidden="true" />
                    Clear Cart
                  </button>
                </>
              )}
            </aside>
          </div>
        )}
      </section>
    </main>
  )
}

export default Products
