import { Link } from 'react-router-dom'

function About() {
  return (
    <main className="page-main">
      <section className="about-hero">
        <span className="eyebrow">ABOUT SHOPLY</span>
        <h1>Good products.<br />Better everyday life.</h1>
        <p>We bring useful, beautiful, and dependable products together in one simple shopping experience.</p>
      </section>

      <section className="about-content">
        <div className="about-visual"><span>Our<br />story</span></div>
        <div className="about-copy">
          <span className="section-number">01 — OUR MISSION</span>
          <h2>Making better choices easier.</h2>
          <p>At Shoply, we believe shopping should feel inspiring instead of overwhelming. That's why we focus on clear choices, honest details, and products that earn a place in your daily routine.</p>
          <p>Our catalog is powered by a wide range of quality items, making it easy to discover something useful or unexpected.</p>
          <Link className="primary-button" to="/products">Browse the collection</Link>
        </div>
      </section>

      <section className="values-section">
        <div><span>01</span><h3>Thoughtful selection</h3><p>Every product is presented clearly, so you can decide with confidence.</p></div>
        <div><span>02</span><h3>Simple experience</h3><p>Clean browsing and useful information, without unnecessary complexity.</p></div>
        <div><span>03</span><h3>Made for everyday</h3><p>Practical finds for homes, wardrobes, beauty routines, and more.</p></div>
      </section>
    </main>
  )
}

export default About
