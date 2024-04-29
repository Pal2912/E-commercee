import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {Button} from "../styles/Button";

const Homesec = ({storename}) => {
  const {nameofstore}=storename;
  return (
  <Wrapper>
    <div className='container'>
    <div className='grid grid-two-column'>
     <div className='hero-section-data'>
      <p className='intro-data'>Welcome to</p>
      <h1>{nameofstore}</h1>
      <p className='parahomesec'>Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum has been the industry's , when an unknown priIt hasthe release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <NavLink>
        <Button>Shop now</Button>
      </NavLink>
      </div>
     <div className='hero-section-image'>
      <figure>
        <img className="img-style" src='https://media.istockphoto.com/id/1133945516/photo/candid-of-young-attractive-asian-woman-auditor-or-trainee-staff-work-looking-up-stocktaking.jpg?s=2048x2048&w=is&k=20&c=ZA8Juod_mqJZAl2WE18mEpnSBgVCAB_zEbEY70RzKJ4='></img>
      </figure>
     </div>
    </div>
    </div>
  </Wrapper>
  )
};
const Wrapper=styled.section`

`

export default Homesec;