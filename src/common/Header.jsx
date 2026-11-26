import { NavLink, Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Shoply home">
          <span className="brand-mark">S</span>
          <span>Shoply</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>

        <Link className="cart-button" to="/products" aria-label="Browse products">
          <span className="cart-icon" aria-hidden="true">🛒</span>
          <span>Shop now</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
