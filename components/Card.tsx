'use client'

export default function Card() {

    function toggleModal(){
        alert(1)
    }

  return <div className="children" onClick={toggleModal}>
        <img src="https://picsum.photos/id/237/800/800" alt="" />
        <div className="card-info">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem, ipsum dolor. <h3>$100.00</h3></p>
        </div>
    </div>
}
