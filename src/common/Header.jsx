import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="template-header">
      <div className="template-header-inner">
        <Link className="template-brand" to="/">
          <img className="template-logo" src={logo} alt="Shopy logo" />
          <title>Shop</title>
        </Link>

        <nav className="template-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink className="template-active-page" to="/products">Products</NavLink>
        </nav>

        <div className="template-header-actions">
          <Link className="template-quote" to="/products">Get a Quote</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
