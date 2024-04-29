import React from 'react'
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

const Itemscart = ({count,setDec,setInc}) => {
  return (
    <div className='cart-button'>
          <div className='amount-toggle'>
        <FiMinus onClick={()=>setDec()}/>
       <div className='count-style'>{count}</div>
        <FiPlus onClick={()=>setInc()}/>
        </div>
        </div>
  )
}

export default Itemscart