import { Link } from 'react-router-dom'

function About() {
  return (
    <main className="flex-1 max-w-[1180px] w-full mx-auto px-5 sm:px-6 py-10 sm:py-14 pb-20">
      <section className="border-b border-[#e1e5de] px-2 pb-12 sm:pb-14 text-center">
        <span className="text-[#d66a45] text-xs font-extrabold tracking-[0.18em]">ABOUT SHOPLY</span>
        <h1 className="mt-4 mb-5 font-serif text-[#183b2b] text-[42px] sm:text-[58px] leading-[1.05]">Good products.<br />Better everyday life.</h1>
        <p className="max-w-[650px] mx-auto text-[#687267] leading-7">We bring useful, beautiful, and dependable products together in one simple shopping experience.</p>
      </section>

      <section className="max-w-[760px] mt-12 sm:mt-14 mx-auto">
        <div>
          <span className="text-[#d66a45] text-xs font-extrabold">01 — OUR MISSION</span>
          <h2 className="mt-3 mb-5 font-serif text-[#183b2b] text-[34px] sm:text-[40px]">Making better choices easier.</h2>
          <p className="text-[#687267] leading-7">At Shoply, we believe shopping should feel inspiring instead of overwhelming. That's why we focus on clear choices, honest details, and products that earn a place in your daily routine.</p>
          <p className="mt-4 text-[#687267] leading-7">Our catalog is powered by a wide range of quality items, making it easy to discover something useful or unexpected.</p>
          <Link className="mt-7 h-12 px-6 inline-flex items-center rounded-md bg-[#d66a45] text-white font-bold shadow-[0_8px_18px_rgba(214,106,69,0.16)] transition hover:bg-[#c85c39]" to="/products">Browse the collection</Link>
        </div>
      </section>
    </main>
  )
}

export default About
