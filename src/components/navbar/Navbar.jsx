import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const Menu = () => (
    <>
      <li><a href="#home">Home</a></li>
      <li><a href="#wgpt3">What is GPT?</a></li>
      <li><a href="#possibility">Open AI</a></li>
      <li><a href="#features">Case Studies</a></li>
      <li><a href="#blog">Library</a></li>
    </>
  )

  return (
    <nav className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <figure className='gpt3__navbar-links_logo'>
          <img src={logo} alt="" />
        </figure>
        <ul className='gpt3__navbar-links_container'>
          <Menu />
        </ul>
      </div>
      <div className='gpt3__navbar-sing'>
          <button className='secondary-button'>Sign in</button>
          <button className='primary-button'>Sign up</button>
      </div> 
      <menu className='gpt3__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <ul className='gtp3__navbar-menu_container-links'>
                <Menu />
              </ul>
              <div className='gpt3__navbar-menu_container-links-sing'>
                <button className='secondary-button'>Sign in</button>
                <button className='primary-button'>Sign up</button>
              </div>
            </div>
          )}
      </menu>  
    </nav>
  )
}

export default Navbar