import React, { useEffect, useState } from 'react'
import "./gridcard.css"
import gridcardapi from '../api/gridcardapi'
const Gridcard = () => {
  const [gridcard, setgridcards ] = useState(gridcardapi)
  useEffect(()=>{
    setgridcards(gridcardapi)
  },[gridcardapi])
  return (
    <>
      <div className='grid-card-conatiner'>
        {gridcard.map((ele,key) => {
          return (
            <>
              <div className="grid-card" key={key}>
                <h1 style={{display:'block'}}>{ele.title}</h1>
                <div className="sub-grid-container">
                {Array.from(Object.values(ele)).map((grid,index) => {
                 if(index>0)
                 {
                  if (grid.hasOwnProperty('img') && grid.hasOwnProperty('text')) {
                  return (
                    <>
                      <div className="grid" key={index}>
                        <div className="grid-img">
                          <img src={grid.img} alt="" />
                        </div>
                        <p>{grid.text}</p>
                      </div>
                    </>
                  )}
                else
              {
                return null
              }}
                })}
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Gridcard
