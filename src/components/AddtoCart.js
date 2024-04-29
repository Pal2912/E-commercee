import React, { useState } from 'react'
import { Button } from '../styles/Button';
import styled from 'styled-components';
import {FaCheck} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Itemscart from './Itemscart';

const AddtoCart = ({product}) => {
    const {id,colors,stock}=product;
    const [color,setColor]=useState(colors[0]);
    const [count,setCount]=useState(1);
    
    const setDec=()=>{
    count>1?setCount(count-1):setCount(0);
    }
    const setInc=()=>{
    count<stock?setCount(count+1):setCount(stock);
    }

  return (
  <Wrapper>
    <div className='colors'>
        <p>
            Colors:
            {colors.map((curColor,index)=>{     
           return ( 
        <button key={index}
        style={{backgroundColor:curColor}}
        className={color===curColor?"btnStyle active" : "btnStyle"}
        onClick={()=>setColor(curColor)}>
        {color===curColor?<FaCheck className='checkStyle'/>:null}
        </button>
            );
        })}
        </p>
        <Itemscart setDec={setDec} setInc={setInc} count={count}></Itemscart>
        <NavLink to="/cart">
        <Button>Add to cart</Button>
        </NavLink>
    </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
  }
  
.count{
  font-size:1.7rem;
}
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left:3rem;
    margin-right:0.7rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  
  .amount-toggle {
    margin-top:2rem;
    margin-bottom: 1rem;
    display: flex;
    gap:15px;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .count-style {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddtoCart;

