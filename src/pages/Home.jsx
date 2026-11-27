import { Link } from 'react-router-dom'
import { FaArrowRight, FaStar } from 'react-icons/fa'
import { LuBadgeCheck, LuGem } from 'react-icons/lu'

function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">NEW COLLECTION 2026</span>
          <h1>Find your next everyday favorite.</h1>
          <p>Discover a curated selection of quality products designed to make life simpler, smarter, and more enjoyable.</p>
          <div className="hero-actions">
            <Link className="primary-button" to="/products">Explore products</Link>
            <Link className="text-button" to="/about">
              Learn about us <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="feature-strip">
        <div><span><FaStar aria-hidden="true" /></span><div><strong>Curated quality</strong><small>Selected with care</small></div></div>
        <div><span><LuGem aria-hidden="true" /></span><div><strong>Great value</strong><small>Prices you'll love</small></div></div>
        <div><span><LuBadgeCheck aria-hidden="true" /></span><div><strong>Easy shopping</strong><small>Simple and secure</small></div></div>
      </section>
    </main>
  )
}

export default Home
