import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './styles/Button'
import styled from 'styled-components'

function ErrorPage() {
  return (
    <Wrapper>
    <div className='container'>
      <div>
        <h2>404</h2>
        <h3>UH OH! You're Lost.</h3>
        <p>The page you are looking for does not exist.How you got here is mystery.But you can click on the button below to go to the homepage.</p>
        < Button>
          <NavLink to="/">Go back to Home</NavLink>
        </Button>
      </div>
    </div>
    </Wrapper>
  )
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage