import React from 'react'
import "../utility.css"
import "./nogridcard.css"
import nogridapi from '../api/noGridCradapi'
import dod from '../api/dealsofdayapi'
import { useState } from 'react'
import { useEffect } from 'react'
const NoGridCard = () => {
    const discount=[25,36,20,19,62]
    const [cards, setCards] = useState(nogridapi);
    const [dodcards, setdodcard] = useState(dod)
    useEffect(() => {
        setCards(nogridapi)
        setdodcard(dod)
    }, [nogridapi])
    return (<>
        {console.log(nogridapi)}
        <div className="flex card-container">
            {cards.map((ele) => {
                return (
                    <>
                        <div className="card">
                            <p>{ele.text}</p>
                            <div className="img-div"><img src={ele.img} alt="" /></div>
                            <a id='card-link' href="">More <i>&gt;</i></a>
                        </div>
                    </>
                )

            })}
          {/* {   { // DOD == deals of day }} */}
        </div>
        <div className="deal-of-day">
            {dodcards.map((ele) => {
                return (<>                                            
                    < div className="dod-card flex-column" >
                        <div className="img-div">
                            <img src={ele.img} alt="" />
                        </div>
                        <div className="flex dod-discount-div">
                        <p className="dod-p-box">
                            {discount[Math.floor(Math.random() * discount.length) ]}% off</p>
                        <p className="dod-p">Deals of Day</p>
                        </div>
                        <p className="dod-text">{ele.text}</p>
                    </div>
                </>)
            })}
        </div >
    </>)

}

export default NoGridCard
