import React from 'react'
import './Home.css';
import Img from '../../assets/Img/About.png'
import Social from './Social/Socail';
import CV from '../../assets/Img/Afsarjahan__Ansari.pdf';
import { titleFunction } from '../titleFunction';

const Home = () => {

  titleFunction("Afsarjahan Ansari's portfolio | Home ")

  return (
    <section className="home__container" id='Home'>
      <div className="social">
        <Social />
      </div>
      <div className="profile">
        <div className="details">
          <h2>Hi there ✋</h2>
          <h3>  <span>I am a </span>Developer, Coder and UI/UX designer</h3>
          <p>Passsionate about learning and implementing new tecnologies</p>
          <div className='btn-container'>
            <a className='btn' href={CV} target="_blank">Download CV</a>
            <a className='btn' href="mailto:nagmaansari3190@gmail.com" id='#Contact'>Contact me</a>
          </div>
        </div>
        <div>
          <img src={Img} alt="profile phto" className='profile-img' />
        </div>
      </div>

    </section>
  )
}

export default Home