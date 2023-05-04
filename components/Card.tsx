'use client'
import { Data } from "@/app/context"
import { useContext } from "react"

export default function Card() {
    const {modal} = useContext(Data)

    function toggleModal(){
        modal.current.classList.toggle('showModal')
    }

  return <div className="children" onClick={toggleModal}>
        <img src="https://picsum.photos/id/237/800/800" alt="" />
        <div className="card-info">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem, ipsum dolor. <span>$100.00</span></p>
        </div>
    </div>
}
