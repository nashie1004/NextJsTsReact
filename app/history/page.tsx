import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Aside from '@/components/Aside'
import TransactionsCard from '@/components/TransactionsCard'

export default function page() {
  return <>
    <Header />
    <main>
      <section>
        <div className="historyContainer">
          <h1>Transactions</h1>
          <TransactionsCard />
          <TransactionsCard />
          <TransactionsCard />
        </div>
      </section>
      <Aside />
    </main>
    <Footer />
  </>
}
