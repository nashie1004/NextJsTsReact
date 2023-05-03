import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Aside from '@/components/Aside'
import Filters from '@/components/Filters'
import Modal from '@/components/Modal'

export default function page() {
  return <>
    <Header />
    <main>
      <section>
        <Modal />
        <div className="filter-results">
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
          <Filters />
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
