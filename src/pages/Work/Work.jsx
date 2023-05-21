import React  from 'react';
import './Work.css'
import textUtilImg from './../../assets/Img/textutilfortext.png'
import fitness4u from './../../assets/Img/Fitness4u.png'
import youtubecopie from './../../assets/Img/youtubecopie.png'
import qrcode from './../../assets/Img/qrcode4u.png'
import taskManger4u from  './../../assets/Img/taskMangager4u.png';
import { titleFunction } from '../titleFunction';

const Work = () => {

 titleFunction("Afsarjahan Ansari's portfolio | Work ")

  return (
    <>
      <div
        className='work__container'
        id='Work'
      >
        <h3 className='reponsive-heading'>My Work</h3>
        <p className="sub-heading">Projects Done By Me</p>
        <div className='cards-container'>
              <div className="card">
                <img src={textUtilImg} alt="project image" className='project-img' />
                <div className="desc">
                  <h5 className='project-title'>TextUtils4U</h5>
                  <p className="card-description">Everything you need to edit your text at one place. Preview your manipulated text </p>
                  <a href="https://textutilsfortext.netlify.app/" className="demo-btn" target='_blank'>Demo</a>
                </div>
              </div>
              <div className="card">
                <img src={fitness4u} alt="project image" className='project-img' />
                <div className="desc">
                  <h5 className='project-title'>Fitness4U</h5>
                  <p className="card-description">Every exercize is available for your healthy routine just search for it in one go</p>
                  <a href="https://63f87c57848cf86fa19d7991--fitnesss4u.netlify.app/" className="demo-btn" target='_blank'>Demo</a>
                </div>
              </div>
              <div className="card">
                <img src={youtubecopie} alt="project image" className='project-img' />
                <div className="desc">
                  <h5 className='project-title'>Youtubecopie</h5>
                  <p className="card-description">Enjoy add free youtube videos, similar videos, search for channels and contents</p>
                  <a href="https://youtubecopie.netlify.app/" className="demo-btn" target='_blank'>Demo</a>
                </div>
              </div>
              <div className="card">
                <img src={qrcode} alt="project image" className='project-img' />
                <div className="desc">
                  <h5 className='project-title'>QrCodeGenerator4U</h5>
                  <p className="card-description">For your every text and link generate Qr Code here only Just paste the link or text.</p>
                  <a href="https://qrcodegenerator4u.netlify.app/" className="demo-btn" target='_blank'>Demo</a>
                </div>
              </div>
              <div className="card">
                <img src={taskManger4u} alt="project image" className='project-img' />
                <div className="desc">
                  <h5 className='project-title'>TaskManager4u</h5>
                  <p className="card-description">Schedule your daily task on your mobile or laptop this stores data on browser itself.</p>
                  <a href="https://taskmanger4u.netlify.app/" className="demo-btn" target='_blank'>Demo</a>
                </div>
              </div>
        </div>
      </div>
    </>

  )
}

export default Work