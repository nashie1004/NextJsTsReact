import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function page() {
  return <>
    <Header />
    <main>
      <h1>Sign in</h1>
      <input type="text" placeholder='Username' />
      <input type="text" placeholder='Password' />
      <button>Login</button>
    </main>
    <Footer />
  </>
}
