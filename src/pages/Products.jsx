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
        if (!response.ok) throw new Error('Could not load products')
        return response.json()
      })
      .then((data) => setProducts(data.products))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { ...product, quantity: 1 }]
    })
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <main className="store-page">
      <section className="store-banner">
        <div className="store-banner-inner">
          <h1>Ecommerce Store</h1>
          <p><span>Home</span> / <strong>Ecommerce Store</strong></p>
        </div>
      </section>

      <section className="store-content">
        <h2 className="store-title">Ecommerce Store</h2>

        {loading && <div className="store-status">Loading products...</div>}
        {error && <div className="store-status store-error">{error}</div>}

        {!loading && !error && (
          <div className="store-layout">
            <div className="store-grid" aria-label="Product list">
              {products.map((product) => {
                const inCart = cart.some((item) => item.id === product.id)
                return (
                  <article className="template-product-card" key={product.id}>
                    <button
                      className="template-product-image"
                      type="button"
                      onClick={() => addToCart(product)}
                      aria-label={`Add ${product.title} to cart`}
                    >
                      <img src={product.thumbnail} alt={product.title} />
                    </button>
                    <h3>{product.title}</h3>
                    <p className="template-product-price">${product.price.toFixed(2)}</p>
                    <button
                      className={inCart ? 'template-add-button template-added' : 'template-add-button'}
                      type="button"
                      onClick={() => addToCart(product)}
                    >
                      <FaShoppingCart aria-hidden="true" />
                      {inCart ? ' Added to Cart' : ' Add to Cart'}
                    </button>
                  </article>
                )
              })}
            </div>

            <aside className="cart-panel">
              <div className="cart-heading">
                <h3>Your Cart</h3>
                <span>{cartCount}</span>
              </div>

              <div className="cart-items">
                {cart.length === 0 ? (
                  <p className="empty-cart">Your cart is empty</p>
                ) : cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.thumbnail} alt="" />
                    <div>
                      <strong>{item.title}</strong>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                    {item.quantity > 1 && <b>×{item.quantity}</b>}
                  </div>
                ))}
              </div>

              {cart.length > 0 && (
                <>
                  <div className="cart-total">
                    <div><span>Total amount</span><strong>${total.toFixed(2)}</strong></div>
                    <small>{cartCount} items</small>
                  </div>
                  <button className="clear-cart" type="button" onClick={() => setCart([])}>
                    <FaRegTrashAlt aria-hidden="true" /> Clear Cart
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
