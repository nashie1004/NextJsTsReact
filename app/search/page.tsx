import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Aside from '@/components/Aside'
import Filters from '@/components/Filters'

export default function page() {
  return <>
    <Header />
    <main>
      <section>
        <div className="grey-bg">
          <div className="modal">modal</div>
        </div>
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
