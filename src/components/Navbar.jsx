import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <div className="container">
            <h1>Cur<span className='primary'>Value</span></h1>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Featured</a>
                </li>
                <li>
                    <a href='/'>Exchange</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
            <div className="btn-group">
                <button className='btn'>Register</button>
            </div>
            <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={25} style={{color: '#333'}}/>) : (<FaBars size={25} style={{color: '#333'}} />)}               
            </div>
        </div>

    </div>
  )
}

export default Navbar