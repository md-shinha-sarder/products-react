import { NavLink, Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="template-header">
      <div className="template-header-inner">
        <Link className="template-brand" to="/" aria-label="Shopy home">
          <img className="template-logo" src={logo} alt="Shopy" />
        </Link>

        <nav className="template-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink className="template-active-page" to="/products">Products</NavLink>
        </nav>

        <Link className="template-quote" to="/products">
          <FaShoppingCart aria-hidden="true" /> Shop now
        </Link>
      </div>
    </header>
  )
}

export default Header
