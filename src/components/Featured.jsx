import React from 'react'
import CRR from '../assets/crr-image.png'
import axios from 'axios'
import './Featured.css'
import { useState, useEffect } from 'react'

const Featured = () => {

  const [data, setData] = useState(null)

  const url = 'https://currency-converter5.p.rapidaphttps://exchange-rates.abstractapi.com/v1/live/?api_key=ae0c099ec0cd4f01891dc30767c8717d&base=USD&target=EURi.https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest/currency/convert'
  
  // GET API THAT RETURNS DATA LIKE IN VIDEO AS IMAGE AND ELSSE //


  useEffect(() => {
    axios.get(url).then((response) => {
        setData(response.data)
    }).catch((error) => {
        console.log(error)
    })
    }, [])

    console.log(data)

  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h2>Explore currencies like Dollar, Euro, Pound and more</h2>
                <p>Check live exchange rates for desire currency</p>
                <button className='btn'>Check more currencies</button>
            </div>

            <div className="right">
                <div className="top">
                    <img src={CRR} alt="" />
                </div>
                <div>
                    <h5>Euro</h5>
                    <p>$1,2</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Featured
