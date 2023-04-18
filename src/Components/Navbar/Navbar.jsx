import React, { useState } from 'react';
import './Navbar.css';
import { BiAlignRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import Logo from './../../assets/Img/AfsarJaha.png'


const Navbar = ({setTitle}) => {

    
    const [toggleIconBar, setToggleIconBar] = useState('false')

    const toggleIcon = () => {
        document.querySelector('.nav__list-container').classList.toggle('show-menu');
        setToggleIconBar(!toggleIconBar ? true : false);
        console.log(toggleIconBar);
    }

    const clickHandler = (e) => {
        if (window.innerWidth <= 900) {
            const toggle = document.querySelector('.nav__list-container').classList.toggle('show-menu');
            console.log(toggle);
            setToggleIconBar(toggleIconBar ? false : true);
        }
        console.log(e)
    }

    return (
        <section className='section__container'>
            <nav className='nav__list'>
                <div>
                    <h1>
                        <a href="#Home"> <img src={Logo} className="logo" alt="Logo" /></a>
                    </h1>
                </div>
                <div className="nav__list-container">
                    <ul className='nav__list-items'>
                        {["Home", "About", "Qualification", "Skills", "Work"].map((item) => (
                            <li key={item} className="nav-item" onClick={clickHandler} >
                                <a className='nav-link' href={`#${item}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hamburger-icon" onClick={toggleIcon}>
                    {!toggleIconBar ? (<VscChromeClose />) : (<BiAlignRight />)}
                </div>
            </nav>
        </section>
    )
}

export default Navbar;