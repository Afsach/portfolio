import React from 'react';
import Frontend from './Frond-Back/Frontend';
import Backend from './Frond-Back/Backend';
import './Skills.css'
import { titleFunction } from '../titleFunction';

const Skills = () => {

  titleFunction("Afsarjahan Ansari's portfolio | Skills ");

  return (
    <div className="skills__container" id='Skills'>
      <h3 className='reponsive-heading'>Technical Skills</h3>
      <p className='sub-heading'>Technologies That I work With</p>
        <div className="skills-tabs">
          <Frontend/>
          <Backend/>
        </div>
    </div>
  )
}

export default Skills