import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
const ListView = ({filter_products}) => {
  return (
    <Wrapper className='section'>
      <div className='container grid'>
        {filter_products.map((currelm)=>{
          const {id,name,image,price,description}=currelm;
          return <div className='card grid grid-two-column'>
        <figure>
             <img src={image} alt={name}/>
        </figure>

        <div>
          <h3>{name}</h3>
          <p>₹{price}</p>
          <p>{description.slice(0,200)}</p>
          <NavLink to={'/singleproduct'} className="btn-main">
            <Button className='btn'>Read More</Button>
          </NavLink>
        </div>
          </div>
        })}
      </div>
    </Wrapper>
  )
};

const Wrapper=styled.section`
padding:9rem 0;

.container{
  max-width:120rem;
}

.grid{
  gap:3.2rem;
}

figure{
  width:auto; 
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  overflow:hidden;
  transition:all 0.5s linear;
  &::after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:100%;
    background-color:rgba(0, 0, 0,0.5);
    transition:all 0.2s linear;
    cursor:pointer;
  }
  &:hover::after{
    width:100%;
  }
  &:hover img{
    transform:scale(1.2);
  }
  img{
    max-width:90%;
    margin-top:1.5rem;
    height:20rem;
    transition:all 0.2s linear;
  }
}
  .card{
    border:0.1rem solid rgb(170 170 170 /40%);  
    .card-data{
      padding:0.2rem;
    }
h3{
  margin:2rem 0;
  font-weight:300;
  font-size:2.4rem;
  text-transform:captalize;
}

.btn{
  margin:2rem 0;
  background-color:rgb(0 0 0 /0%);
  border:0.1rem solid rgb(98 84 243);
  display:flex;
  justify-content:center;
  align-items:center;

  &:hover{
    background-color:rgb(98 84 243);
  }

  &:hover a{
    color:#fff;
  }
  a{
    color:rgb(98 84 243);
    font-size:1.4rem; 
   }
  }
}
`;

export default ListView;