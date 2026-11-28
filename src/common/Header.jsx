import { NavLink, Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="bg-white border-b border-[#e7ebe5] shadow-[0_2px_12px_rgba(24,59,43,0.04)]">
      <div className="max-w-[1180px] min-h-[76px] mx-auto px-4 sm:px-6 grid grid-cols-[auto_1fr] md:grid-cols-[180px_1fr_auto] items-center gap-x-3 md:gap-x-8">
        <Link className="flex items-center py-3" to="/" aria-label="Shopy home">
          <img className="h-9 md:h-10 w-auto object-contain" src={logo} alt="Shopy" />
        </Link>

        <nav className="col-span-2 md:col-span-1 md:col-start-2 row-start-2 md:row-start-1 min-h-10 md:min-h-0 flex justify-center items-center gap-5 sm:gap-8 border-t md:border-0 border-[#edf0ea] md:pb-0" aria-label="Main navigation">
          <NavLink className={({ isActive }) => `py-3 text-sm font-bold transition-colors ${isActive ? 'text-[#245b43]' : 'text-[#697268] hover:text-[#245b43]'}`} to="/" end>Home</NavLink>
          <NavLink className={({ isActive }) => `py-3 text-sm font-bold transition-colors ${isActive ? 'text-[#245b43]' : 'text-[#697268] hover:text-[#245b43]'}`} to="/about">About</NavLink>
          <NavLink className={({ isActive }) => `py-3 text-sm font-bold transition-colors ${isActive ? 'text-[#245b43]' : 'text-[#697268] hover:text-[#245b43]'}`} to="/products">Products</NavLink>
        </nav>

        <Link className="col-start-2 row-start-1 justify-self-end md:col-start-3 h-10 md:h-11 px-3 md:px-5 inline-flex items-center justify-center gap-2 rounded-md bg-[#245b43] text-white text-sm font-bold shadow-sm transition hover:bg-[#183b2b]" to="/products">
          <FaShoppingCart aria-hidden="true" />
          <span className="hidden sm:inline">Shop now</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
