import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {

    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMenu = () => {
        setClick(false);
      }

  return (
    <div className="header" >
        <div className="container">
            <h1>Cur<span className='primary'>Value</span></h1>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li >
                    <Link to="hero" onClick={() => closeMenu()} spy={true} smooth={true} offset={-150} duration={500} >Home</Link>
                </li>
                <li>
                    <Link to="featured" onClick={() => closeMenu()} spy={true} smooth={true} offset={-150} duration={500}>Featured</Link>
                </li>
                <li>
                    <Link to="converter" onClick={() => closeMenu()} spy={true} smooth={true} offset={-200} duration={500}>Exchange</Link> 
                </li>
                <li>
                    <Link to="news" onClick={() => closeMenu()} spy={true} smooth={true} offset={-150} duration={500}>News</Link>
                </li>
                <li>
                    <Link to="footer" onClick={() => closeMenu()} spy={true} smooth={true} offset={-50} duration={500}>Contact</Link>
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