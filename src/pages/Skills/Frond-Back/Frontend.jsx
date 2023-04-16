import React from 'react'
import './front-back.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { IoLogoCss3 } from 'react-icons/io'
import { BsBootstrapFill } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const Frontend = () => {
  return (
    <>
      <div className="frontend-container">
        <h5 className="skill-heading">
          Frontend Technologies
        </h5>
        <ul className="skills-items">
          <li className="skill-item">
            <AiFillHtml5 className='skill-icon' style={{ color: 'orange' }} /> HTML5
          </li>
          <li className="skill-item">
            <IoLogoCss3 className='skill-icon' style={{ color: '#2097f4' }} /> CSS3
          </li>
          <li className="skill-item">
            <SiJavascript className='skill-icon' style={{ color: '#ffdf04' }} /> Javascript
          </li>
          <li className="skill-item">
            <FaReact className='skill-icon' style={{ color: '#3d75fe' }} /> React js
          </li>
          <li className="skill-item">
            <BsBootstrapFill className='skill-icon' style={{ color: '#5e3b7e' }} /> Bootstrap
          </li>
          <li className="skill-item">
            <SiTailwindcss className='skill-icon' style={{ color: '#09afcd' }} /> Tailwind css
          </li>
        </ul>
      </div>
    </>
  )
}

export default Frontend