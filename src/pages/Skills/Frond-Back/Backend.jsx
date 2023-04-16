import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { GrMysql } from 'react-icons/gr'
import { FaNode, FaJava } from 'react-icons/fa'
import { SiExpress, SiMongodb } from 'react-icons/si'
import './front-back.css'

const Backend = () => {
  return (
    <>
      <div className="frontend-container">
        <h5 className="skill-heading">
          Backend Technologies
        </h5>
        <ul className="skills-items">
          <li className="skill-item">
            <BsGithub className='skill-icon' style={{ color: 'black' }} /> Git
          </li>
          <li className="skill-item">
            <FaNode className='skill-icon' style={{ color: '#398739' }} /> Node js
          </li>
          <li className="skill-item">
            <GrMysql className='skill-icon' style={{ color: '#00768d' }} /> Mysql
          </li>
          <li className="skill-item">
            <FaJava className='skill-icon' style={{ color: '#e57d7a' }} />  Java
          </li>
          <li className="skill-item">
            <SiMongodb className='skill-icon' style={{ color: '#001e2b' }} /> Mongo db
          </li>
          <li className="skill-item">
            <SiExpress className='skill-icon' style={{ color: '#181a1c' }} /> Express js
          </li>
        </ul>
      </div>
    </>
  )
}

export default Backend