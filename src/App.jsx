import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './common/Header'
import Footer from './common/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#f7f8f5]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
