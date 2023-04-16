import React from 'react';
import './About.css';
import AboutImg from '../../assets/Img/About.png';
import { BiCertification } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import { TbStairsUp } from 'react-icons/tb'
import { titleFunction } from '../titleFunction';


const About = () => {

  titleFunction("Afsarjahan Ansari's portfolio | About ")

  return (
    <div className="about__container" id='About'>
      <h3 className='reponsive-heading'>About Me</h3>
      <p className='sub-heading'>All about me and my journey</p>
      <div className="about-section">
        <div className="about-img">
          <img src={AboutImg} alt="Image of Afsarjahan ansari" />
        </div>
        <div className="about-details">
          <div className="about-items">
            <div className="about-item">
              <FaLaptopCode className='about-icons' />
              <h5 className='about-heading'>Projects</h5>
              <p className='sub-heading'>Ten plus mini and major projects which can be found in my github repositories</p>
            </div>
            <div className="about-item">
              <BiCertification className='about-icons' />
              <h5 className='about-heading'>Certification</h5>
              <p className='sub-heading'>Meta Front-End Developer Professional Certificate Sponsored by Coursera</p>
            </div>
            <div className="about-item">
              <TbStairsUp className='about-icons' />
              <h5 className='about-heading'>Goal</h5>
              <p className='sub-heading'>To become a full-stack developer, building production-ready applications</p>
            </div>
          </div>
          <ul className="about-description">
            <li>
              I'm a developer with a passion for creating visually stunning and user-friendly websites and applications. With a strong understanding of web technologies such as HTML, CSS, and JavaScript, I enjoy designing and developing intuitive and responsive interfaces that provide seamless user experiences.
            </li>
            {/* <li>
              As a frontend developer, I'm excited about the possibilities of what I can create with code, and I'm committed to delivering innovative and intuitive web solutions that help businesses and organizations connect with their audiences in meaningful ways.
            </li>
            <li>
              I constantly seek to learn and stay up-to-date with the latest web development trends and techniques, as well as keeping an eye on emerging technologies that can enhance the user experience.
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About