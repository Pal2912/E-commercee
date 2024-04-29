import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="info-footer">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div >
              <Button className="hireme-btn ">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column my-div-footer">
            <div className="footer-about">
              <h4>Smart Store</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h4 className="footer-request">Subscribe to get important updates</h4>
              <form action="#" className="form-footer">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />
                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h4 className="footer-request">Follow Us</h4>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons new-icon" />
                </div>
                <div>
                  <a href="https://www.instagram.com/amazondotin?igsh=MWFvZXFjM3V3OTRxNQ==" target="_blank">
                  <FaInstagram className="icons new-icon" />
                  </a>
                
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank">
                    <FaYoutube className="icons new-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h4 className="footer-request">Call Us</h4>
              <a className="footer-request" href="tel:9821696053">+91 9821696053</a>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="last-footer-section">
              <p>
                @{new Date().getFullYear()} Smart Store. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .my-div-footer{
    background-color: ${({ theme }) => theme.colors.footertwo_bg};
  }
  .info-footer{
    display:flex;
    gap:250px;
  }
 
  .form-footer{
    display:flex;
    flex-direction:column;
  }
  .new-icon{
    width:40px;
    height:40px;
  }
  .last-footer-section{
    width:100%;
    display:flex;
    justify-content:space-around;
  }
  .footer-request{
    font-size:20px;
  }
  .contact-short {
    max-width: 60vw;
    height:160px;
    margin: auto;
    padding: 5rem 10rem;
    display:flex;
    justify-content:center;
    align-items-centerl;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footertwo_bg};
    h3{
      color: ${({ theme }) => theme.colors.hr};
    }
    h4 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-size:20px;
    }
    p {
      color: ${({ theme }) => theme.colors.hr};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      margin-top:10px;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top:2rem;
    height:80px;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;