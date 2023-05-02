import Link from "next/link"

export default function Header() {
  return <header>
    <Link href='/' className="logo">FOOD APP</Link>
    <p>SHOPPING CART</p>
    <Link href='/register'>Register</Link>
    <Link href='/login'>Login</Link>
  </header>
}
