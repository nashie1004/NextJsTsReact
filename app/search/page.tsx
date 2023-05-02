import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Aside from '@/components/Aside'

export default function page() {
  return <>
    <Header />
    <main>
      <section>
        <input type="text" placeholder='Search food' />
        <button>Search</button>
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
