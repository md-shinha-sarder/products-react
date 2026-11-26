import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark">S</span>
            <span>Shoply</span>
          </Link>
          <p>Thoughtful products for everyday living.</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Shoply. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
