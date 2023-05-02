'use client'
import { useContext } from "react"
import { Data } from "./context"

export default function Page() {
  const {hi} = useContext(Data)
  // console.log(hi)

  return <>
    <header>
      LOGO,
      SHOPPING CART,
      SIGN IN,
      SIGN OUT
    </header>
    <main>
      main
      <p>Lorem, ipsum.</p>
      <p>Eum, nam.</p>
      <p>Molestias, vero?</p>
      <p>Iusto, fuga.</p>
      <p>Nemo, velit?</p>
      <p>Ipsam, laboriosam?</p>
      <p>Omnis, illo!</p>
      <p>Distinctio, repudiandae!</p>
      <p>Incidunt, nostrum.</p>
      <p>Eos, minima?</p>
      <p>Est, minima?</p>
      <p>Facere, id!</p>
      <p>Obcaecati, libero.</p>
      <p>Rem, non.</p>
      <p>Nihil, perferendis.</p>
      <p>Quos, ducimus.</p>
      <p>Explicabo, doloribus?</p>
      <p>Maiores, molestias!</p>
      <p>Doloremque, sint.</p>
      <p>Nam, facere.</p>
      <p>Atque, ut!</p>
      <p>Animi, est?</p>
      <p>Earum, esse.</p>
      <p>Expedita, asperiores!</p>
      <p>Laudantium, nisi.</p>
      <p>Facere, eligendi.</p>
      <p>Doloremque, dolore?</p>
      <p>Possimus, explicabo?</p>
      <p>Deleniti, qui.</p>
      <p>Consectetur, consequuntur.</p>
      <p>Excepturi, fugiat.</p>
      <p>Enim, molestias.</p>
      <p>Illum, distinctio!</p>
      <p>Autem, tenetur.</p>
      <p>Dignissimos, maiores.</p>
      <p>Recusandae, veniam!</p>
      <p>Dolore, doloremque?</p>
      <p>Quae, quod.</p>
      <p>Consectetur, rerum.</p>
      <p>Ullam, doloribus.</p>
      <p>Possimus, facere.</p>
      <p>Tempora, porro.</p>
      <p>A, maiores.</p>
      <p>Officiis, saepe.</p>
      <p>Praesentium, necessitatibus?</p>
      <p>Officiis, iure!</p>
      <p>Maiores, pariatur.</p>
      <p>Vitae, quis.</p>
      <p>Maiores, quo!</p>
      <p>Fugit, veniam?</p>
    </main>
    <footer>
      footer
    </footer>
  </>
}
