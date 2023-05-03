import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Aside from '@/components/Aside'
import { FaInstagram } from "react-icons/fa";

export default function page() {
  return <>
    <Header />
    <main>
      <section>
        <div className="filter-results">
          <div className="filters-children">
            <FaInstagram />
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        <div className="search-results">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <Aside />
    </main>
    <Footer />
  </>
}
