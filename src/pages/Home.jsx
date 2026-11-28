import { Link } from 'react-router-dom'
import { FaArrowRight, FaStar } from 'react-icons/fa'
import { LuBadgeCheck, LuGem } from 'react-icons/lu'

function Home() {
  return (
    <main className="flex-1">
      <section className="max-w-[1180px] min-h-[380px] sm:min-h-[440px] mx-auto px-5 sm:px-6 py-12 sm:py-20 flex items-center">
        <div className="max-w-[700px]">
          <span className="text-[#d66a45] text-xs font-extrabold tracking-[0.18em]">NEW COLLECTION 2026</span>
          <h1 className="mt-4 mb-5 font-serif text-[#183b2b] text-[42px] sm:text-[62px] leading-[1.02]">Find your next everyday favorite.</h1>
          <p className="max-w-[580px] text-[#687267] leading-7">Discover a curated selection of quality products designed to make life simpler, smarter, and more enjoyable.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
            <Link className="h-12 px-6 inline-flex items-center rounded-md bg-[#d66a45] text-white font-bold shadow-[0_8px_18px_rgba(214,106,69,0.16)] transition hover:bg-[#c85c39]" to="/products">Explore products</Link>
            <Link className="inline-flex items-center gap-2 text-[#183b2b] font-bold" to="/about">
              Learn about us <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 border-y border-[#e1e5de] bg-white">
        <div className="min-h-28 flex items-center justify-center gap-3 border-b md:border-b-0 md:border-r border-[#e1e5de]"><span className="w-11 h-11 grid place-items-center rounded-full bg-[#eef3ef] text-[#245b43]"><FaStar aria-hidden="true" /></span><div><strong className="block text-[#183b2b]">Curated quality</strong><small className="text-[#8a9188]">Selected with care</small></div></div>
        <div className="min-h-28 flex items-center justify-center gap-3 border-b md:border-b-0 md:border-r border-[#e1e5de]"><span className="w-11 h-11 grid place-items-center rounded-full bg-[#eef3ef] text-[#245b43]"><LuGem aria-hidden="true" /></span><div><strong className="block text-[#183b2b]">Great value</strong><small className="text-[#8a9188]">Prices you'll love</small></div></div>
        <div className="min-h-28 flex items-center justify-center gap-3"><span className="w-11 h-11 grid place-items-center rounded-full bg-[#eef3ef] text-[#245b43]"><LuBadgeCheck aria-hidden="true" /></span><div><strong className="block text-[#183b2b]">Easy shopping</strong><small className="text-[#8a9188]">Simple and secure</small></div></div>
      </section>
    </main>
  )
}

export default Home
