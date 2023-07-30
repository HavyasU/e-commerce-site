import React, { useEffect, useState } from 'react'
import "./nav.css"
import "./utility.css"


const Navbar = ({ cardDetails }) => {
  const [isscrolled,setisscrolled] = useState(false)
  const handlescroll=()=>{
    if(window.scrollY > 55)
    {
      setisscrolled(true)
    }
    else
    {
      setisscrolled(false)
    }
  }
 useEffect(()=>{
   window.addEventListener('scroll',handlescroll)
 })
  return (
    <>
      <div className={`nav bg-black white flex align-start ${isscrolled ? "fixed-position" : ""}`}>
        <div className="logo">
          <img src="https://tse2.mm.bing.net/th?id=OIP.V-zrdGyKpMgiaxjQbGDeOQHaEn&pid=Api&P=0&h=180" alt="" />
        </div>
        <div className="nav-hello-div flex">
          <div className="icon">
            <i className=' font-medium '>&#10152;</i>
          </div>
          <div className="flex-column not-align ">
            <h3 className='font-small text-start padding-l-10 padding-t-10'>
              hello
            </h3>
            <h2 className='font-medium'>Select your Adderss</h2>
          </div>
        </div>
        <div className="inp-container flex">
          <button>All</button>
          <input type="search" placeholder='Search Amazon...' />
          <button className='search-icon'>
            <p className='icon'> &#9906; </p>
          </button>
        </div>
        <div className="nav-item flex-column">
          <h3 className='font-small text-start padding-l-10 padding-t-10'>
            Hello, sign in
          </h3>
          <h2 className='font-medium'>Account & lists</h2>
        </div>
        <div className=" nav-item flex-column ">
          <h3 className='font-small text-start padding-l-10 padding-t-10'>
            Returns and
          </h3>
          <h2 className='font-medium'>Orders</h2>
        </div>
        <div className=" nav-item flex-column">
          <h2 className='font-large'>&#128722;<i className='font-medium'>Carts</i></h2>
        </div>
      </div>
      <div className="sub-nav flex">
        <section className="sub-nav-s-items">
        <span> <b>&#9776;</b>&nbsp;All</span>
        <span>Amazon miniTv</span>
        <span>Sell</span>
        <span>Best Sellers</span>
        <span>Today's deals</span>
        <span>Mobiles</span>
        <span>New Releases</span>
        <span>Customer Service</span>
        <span>Prime</span>
        <span>Electronice</span>
        <span>Gift Ideas</span>
        <span>Home & Kitchen</span>
        </section>
        <section className='sub-nav-image'>
          <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Bawaal-Launch/400x39-SWM-NP._CB600100776_.jpg" alt="" />
        </section>
      </div>
    </>
  );
};
export default Navbar