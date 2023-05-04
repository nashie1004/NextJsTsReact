'use client'
import { Data } from "@/app/context"
import { useContext } from "react"
import { AiOutlineMenu } from 'react-icons/ai'

export default function Modal() {
    const {modal} = useContext(Data);

    function closeModal(): void{
        modal.current.classList.remove('showModal')
    }

    function addToCart(): void{
        alert(1)
    }
    
    return (
    <div className="grey-bg" ref={modal}>
        <div className="modal">
            <img src="https://picsum.photos/id/237/700/700" alt="" />
            <div className="modal-info">
                <h2>Lorem ipsum dolor sit.</h2>
                <div>
                    <p>Lorem, ipsum.</p>
                    <p>Saepe, laudantium.</p>
                    <p>Non, deserunt.</p>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur, quam magnam amet delectus reprehenderit quaerat. Deserunt maxime dignissimos cupiditate sequi hic. Libero autem veritatis consequatur molestias, provident optio corporis!
                </div>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
            
            <span onClick={closeModal} className="sidebar-btn modal-close">
                <AiOutlineMenu />
            </span>
        </div>
    </div>
  )
}
