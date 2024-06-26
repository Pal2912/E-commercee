import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (currele) => {
    const {id,name,image,price,category}=currele;
  return (
    <NavLink to={`/singleproduct/${id}`}>
        <div>
            <figure>
                <img src={image}/>
                <figcaption className='caption'>{category}</figcaption>
            </figure>
            <div className='card-data'>
                <div className='card-data-flex'>
                <h3>{name}</h3>
                <p className='card-data--price'>{price}</p>
                </div>
            </div>
        </div>

    </NavLink>
  )
}

export default Product