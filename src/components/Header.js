import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';


const Header = () => {
  return (
    <MainHeader>
    <NavLink to="/">
     <h2 className='logoname'> Smart Store</h2>
       {/* <img src="./images/logo.png"></img> */}
    </NavLink>
    <Nav/>
    </MainHeader>
  )
}

const MainHeader=styled.header`
padding-top:0.5rem;
padding-bottom:0.5rem;
padding-left:6rem;
height:6rem;
background-color:${({theme})=>theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;
position:relative;




@media (max-width:${({theme})=>theme.media.mobile}){
}
`;

export default Header