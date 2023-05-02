import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function page() {
  return <>
    <Header />
    <main>
        search
      <input type="text" placeholder='Search food' />
      <button>Search</button>
    </main>
    <Footer />
  </>
}
