import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function page() {
  return <>
    <Header />
    <main>
      <h1>Get Started</h1>
      <input type="text" placeholder='Username' />
      <input type="text" placeholder='Password' />
      <button>Register</button>
    </main>
    <Footer />
  </>
}
