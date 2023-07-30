import React, { useEffect, useState } from 'react'
import "./card.css"
const addtoCart=()=>{
  alert("added to cart")
}
const Cards = ({cardDetails}) => {
  return (
    <>
      {cardDetails.map((ele)=>{
        return   <div className="card" key={ele.id}>
            <p className='cart-icon' onClick={addtoCart} >&#128722;</p>
        <div className="img">
            <img src={ele.image} alt="product-image" />
        </div>
        <div className="card-details">
            <h1 className='p-name'>{ele.title}</h1>
            <p className='p-desc'>{ele.description}</p>
            <div className="c-p-div">
                <h1 className='p-category '>{ele.category}</h1>
                <p className='p-rating'>Ratings : {ele.rating.rate}</p>
            </div>
            <div className="c-p-div">
                <p className='p-stock-left'>{ele.rating.count} Stocks</p>
                <h1 className='p-price'>&#8377;{Math.ceil(ele.price)}0.0</h1>
                <button className='btn'>Order Now</button>
            </div>
        </div>
    </div>

      })}
    </>
  )

}

export default Cards
