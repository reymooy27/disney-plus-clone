import React, { useState } from 'react'
import './Navbar.css'
import disneyLogo from '../image/disney-hotstar-logo-dark.svg'
import { Link } from 'react-router-dom'

function Navbar() {

  const [focus, setFocus] = useState(false);

  const handleClick = ()=>{
    if(focus === false) {
      setFocus(true)
    }else{
      setFocus(false)
    }
  }

  return (
    <div className='navbar'>
      <div className="hamburger--menu">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className="disney--logo">
        <img src={disneyLogo} alt="disney-logo" />
      </div>
      <div className="navbar--navigation">
        <Link to="/">Serial</Link>
        <Link to="/">Film</Link>
        <Link to="/">Disney+</Link>
        <Link to="/">Lokal</Link>
      </div>
      <div className="search--input">
        <input style={{width: focus ? '300px' : '240px'}} onClick={handleClick} type="text" placeholder='Cari' />
      </div>
      <div className="subscribe">
        <button>Langganan</button>
      </div>
      <div className="language--option">
        <select>
          <option value="Indonesia">Indonesia</option>
          <option value="English">English</option>
        </select>
      </div>
      <div className="login">
        Masuk
      </div>
    </div>
  )
}

export default Navbar
