'use client'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Filters() {
  
  function enableSelectedFilter(): void{
    alert(1)
  }
  
  return <div onClick={enableSelectedFilter} className="filters-children">
    <AiOutlineMenu />
    <p>Lorem.</p>
  </div>
}
