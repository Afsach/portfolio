import React, {useState} from 'react';
import './Qualification.css';
import {FaUserGraduate} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';
import Education from './Qualification-tabs/Education';
import Experience from './Qualification-tabs/Experience';
import { titleFunction } from '../titleFunction';

const Qualification = () => {
  const [tab, setTab] = useState(1);
  const [borderStyle, setBorderStyle] = useState(null);
  const tabStyle = {
    borderBottom : "2px solid black",
    transition : '.7s all'
  }

  titleFunction("Afsarjahan Ansari's portfolio | Qualification ")

  const updateTabs = (id)=> {
    console.log("Hello");
    setTab(id);
    setBorderStyle(tabStyle)
  }

  return (
    <div className='qualification__container' id='Qualification'>
        <h3 className='reponsive-heading'>My Qualification</h3>
        <p className="sub-heading">My Educational journey</p>
        <div className="qualification-section">
            <ul className="qualification-tabs">
              <li className="qualification-tab"  onClick={()=> updateTabs(1)}  style={tab ==1 ? borderStyle : null }><FaUserGraduate className='qualification-icon'/> EDUCATION</li>
              <li className="qualification-tab"  onClick={()=> updateTabs(2)}  style={tab ==2 ? borderStyle : null }><MdWork className='qualification-icon'/> EXPERIENCE</li>
            </ul>
            <div className="qualification-items">
             { tab == 1 ?  <Education/> :  <Experience/>} 
            </div>
        </div>
    </div>
  )
}

export default Qualification