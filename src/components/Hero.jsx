import React from 'react'
import './Hero.css'
import Currency from '../assets/hero-image.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="left">
                <p>With Currency Value you can check live currency data and view currency value.</p>
                <h1>Here you find rates for different currencies and can compare the rates for dollars, Euros or Punds to the Swedish crona.</h1>
                <p>Check live foreign currency exchange rates.</p>
                <div className="input-container">
                    <input type="email" placeholder='Enter your email' />
                    <button className='btn'>Learn More</button>
                </div>
            </div>

            <div className="right">
                <div className="img-container">
                    <img src={Currency} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero