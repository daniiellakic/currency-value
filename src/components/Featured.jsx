import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Featured.css'
import euro from '../assets/euro.png'
import pound from '../assets/pound.png'
import crowns from '../assets/crowns-48.png'
import dinar from '../assets/dinar.png'


const Featured = () => {

  const [data, setData] = useState(null)

  const url = 'https://v6.exchangerate-api.com/v6/d2006218adc6ca535cc607c9/latest/USD'

  useEffect(() => {
    axios.get(url)
    .then((response) => {
        setData(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
  }, [])

  if (!data) return null

  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Explore currencies like Dollar, Euro, Pound and more.</h1>
                <p>Check live exchange rates for desire currency</p>
                <button className='btn'>Check more currencies</button>
            </div>

            <div className="right">
            <p>Latest Rates date: {data.time_last_update_utc}</p>
              <div className="card">
                <div className="top">
                    <img src={euro} alt='' />
                    <div>
                      <h5>{data.base_code} Amount: 1 </h5>
                      <h5>Euro: <span className='red'>{data.conversion_rates.EUR}</span></h5>   
                    </div>
                </div> 
              </div>
              <div className="card">
                <div className="top">
                    <img src={pound} alt='' />
                    <div>
                      <h5>{data.base_code} Amount: 1 </h5>
                      <h5>British Pound: <span className='red'>{data.conversion_rates.GBP}</span></h5> 
                    </div>  
                </div> 
              </div>
              <div className="card">
                <div className="top">
                    <img src={crowns} alt='' />
                    <div>
                      <h5>{data.base_code} Amount: 1 </h5>
                      <h5>Swedish Crowns: <span className='red'>{data.conversion_rates.SEK}</span></h5>   
                    </div>
                </div> 
              </div>
              <div className="card">
                <div className="top">
                    <img src={dinar} alt='' />
                    <div>
                      <h5>{data.base_code} Amount: 1 </h5>
                      <h5>Serbian Dinar: <span className='red'>{data.conversion_rates.RSD}</span></h5>   
                    </div>
                </div> 
              </div>
            <div> 

          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
