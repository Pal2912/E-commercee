import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ filter_products }) => {
  
  return (
    <Wrapper className="section">
        <div className="specail-container">
      <div className="grid grid-three-column">
        {filter_products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
      </div> 
    </Wrapper>
  );
}; 
const Wrapper = styled.section`
padding:9rem 0;

padding-left:170px;

.section{
    max-width:900px;
}

.grid{
    gap:1.2rem;
}

figure{
    width:190px;
    height:190px;
    display:flex;
}

.card{
    background-color:${({ theme }) => theme.colors.black_code};
    border-radius:1rem;
}
.card-data{
    padding:0 1rem;
}
.btn{
    margin:2rem auto;
    background-color:rgb(0 0 0/0%);
    border:0.1rem solid rgb(98 84 243);
    display:flex;
    justify-content:center;
    align-items:center;
}

.card-data-flex{
    margin:2rem 0;
    display:flex;
    gap:100px;
    flex-direction:space-between;
    
}
.card-data--price{
    color:${({ theme }) => theme.colors.helper};
}
h3{
    color:${({ theme }) => theme.colors.black_code};
    text-transform:capotalize;
}
a{
    color:rgb(98 84 243);
    font-size:1.4rem;
}
`;

export default GridView;
