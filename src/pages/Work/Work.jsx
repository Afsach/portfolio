import React, {useRef, useState, useEffect} from 'react';
import './Work.css'
import { data } from './data';
import { titleFunction } from '../titleFunction';

const Work = () => {
  // const [description, setDescription] = useState(data[0].description)
   const descriptionRef = useRef([data[0].description]);

 titleFunction("Afsarjahan Ansari's portfolio | Work ")

//  const resizeHandle = ()=> {
//   if(!window.innerWidth <= '773'){
//     setDescription(description.substring(0,40))
//   }
//   else{
//    setDescription(data[0].description) 
//  }
// }

useEffect(()=>{
  
},[window.innerWidth])
  
  return (
    <>
      <div
        className='work__container'
        id='Work'
      >
        <h3 className='reponsive-heading'>My Work</h3>
        <p className="sub-heading">Projects Done By Me</p>
        <div className='cards-container'>
          {
            data.map((card) => (
              <div className="card" key={card.projectUrl}>
                <img src={card.imgUrl} alt="project image" className='project-img' />
                <div className="desc">
                  <h5 className='project-title'>{card.name}</h5>
                  <p className="card-description">{window.innerWidth<='773' ? descriptionRef.current = card.description : card.description.substring(0, 40) + "..."}</p>
                  {/* <p className="card-description"  onResize={resizeHandle}>{card.description}</p> */}
                  <a href={card.projectUrl} className="demo-btn" target='_blank'>Demo</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>

  )
}

export default Work