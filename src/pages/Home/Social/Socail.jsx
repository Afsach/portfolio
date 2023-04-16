import React from 'react'
import './Social.css'
import { FaLinkedin, FaGithub, FaWhatsappSquare } from 'react-icons/fa'

const Social = () => {
  return (
    <div className="social">
      <a href="https://www.linkedin.com/in/afsarjahan-ansari-5383b6221/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Afsach" target="_blank">
        <FaGithub />
      </a>
      <a href="https://web.whatsapp.com/" target="_blank">
        <FaWhatsappSquare />
      </a>
    </div>
  )
}

export default Social;