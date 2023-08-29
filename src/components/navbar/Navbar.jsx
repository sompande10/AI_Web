import React,{useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='gpt3__navbar-links'>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
      </div>
      <div className='gpt3__navbar-sign'>
        <p><a href="#">Sign in</a></p>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar