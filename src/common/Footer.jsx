import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="min-h-36 bg-[#183b2b] text-white">
      <div className="max-w-[1180px] min-h-36 mx-auto px-5 sm:px-6 py-8 flex items-start justify-between relative">
        <div className="flex gap-6 text-sm font-semibold">
          <Link className="hover:text-[#f2c078]" to="/">Home</Link>
          <Link className="hover:text-[#f2c078]" to="/about">About</Link>
          <Link className="hover:text-[#f2c078]" to="/products">Products</Link>
        </div>
        <p className="absolute left-5 sm:left-6 bottom-5 m-0 text-xs text-[#b7c3ba]">© {new Date().getFullYear()} Shoply. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
