import { useEffect, useState } from 'react'

function Products() {
  const [products, setProducts] = useState([])
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

  return (
    <main className="page-main products-main">
      <section className="products-heading">
        <div>
          <span className="eyebrow">THE COLLECTION</span>
          <h1>All products</h1>
        </div>
        {!loading && !error && <span className="product-count">{products.length} products</span>}
      </section>

      {loading && <div className="status-message"><span className="loader"></span>Loading products...</div>}
      {error && <div className="status-message error-message">{error}</div>}

      {!loading && !error && (
        <section className="product-grid" aria-label="Product list">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                {product.discountPercentage > 10 && <span className="sale-badge">Sale</span>}
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h2>{product.title}</h2>
                <div className="product-meta">
                  <strong>${product.price.toFixed(2)}</strong>
                  <span><span aria-hidden="true">★</span> {product.rating.toFixed(1)}</span>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default Products
