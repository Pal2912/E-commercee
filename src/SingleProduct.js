
import styled from "styled-components";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/Productcontext";
import Myimage from "./components/Myimage";
import { Container } from "./styles/Container";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import AddtoCart from "./components/AddtoCart";

const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
    const { getsingleProduct, isSingleLoading, singleproducts } =
      useProductContext();
  
    const { id } = useParams();
  
    const {
      id: alias,
      name,
      company,
      price,
      description,
      category,
      stock,
      image,
      stars,
      reviews,
    } = singleproducts;
  
    useEffect(() => {
      getsingleProduct(`${API}?id=${id}`);
    }, []);
  
    if (isSingleLoading) {
      return <div className="page_Loading">Loading...</div>;
    }
    return (
          <Wrapper>
            <div className="product-data-singlepro">
              <NavLink to={"/"}>Home </NavLink>/ {name}
            </div>
            
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <Myimage image={image} />
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{name}</h2>
            <p>{stars}</p>
            <p>{reviews} reviews</p>
            <p className="product-data-price">
              MRP:
              <del>
               price={price + 250000} 
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day:price={price}
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr/>
            {stock>0 && <AddtoCart product={singleproducts}></AddtoCart>}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
 .product-data-warranty{
  align-items:center;
  width:100%
  display:flex;
  border-bottom:1px solid #ccc;
 }
   .product-data-singlepro {
         font-size: 30px;
       background-color: ${({ theme }) => theme.colors.bg};
       height: 60px;
       align-items: flex-start;
       padding-top: 8px;
     }

 .product-warranty-data{
  text-align:center;
 }
  .product_images {
    display: flex;
    align-item: center;
  }
  .product-data-real-price{
    color: ${({ theme }) => theme.colors.btn}
  }
  .warranty-icon{
    background-color:rgba(220,220,220,0.5);
    border-radius:4rem;
    padding:0.6rem;
    width:40px;
    height:40px;
  }
  .p{
    font-size:1.4rem;
    padding-top:0.4rem; 
  }
  .product-data {
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    gap:2rem; 
  }
  .product-data-warranty{
    display:flex;
    gap:15px;
  }
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;
export default SingleProduct;
     
    
      