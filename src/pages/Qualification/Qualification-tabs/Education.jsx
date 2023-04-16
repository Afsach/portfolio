import React from 'react'
import './Qualification-tabs.css'
import { GoCalendar } from 'react-icons/go';

const Education = () => {
    return (
        <div className="education__container">
            <div className="timeline_container">
                <div className="education-item">
                    <h5>Grduation</h5>
                    <p className='education-title'>Sahyog college of Management studies</p>
                    <p className='education-title'><GoCalendar /> 2020-2023</p>
                </div>
            </div>
            <div className="timeline_container">
                <div className="education-item">
                    <h5>High School</h5>
                    <p className='education-title'>NES Ratnam Jr. College Of Science</p>
                    <p className='education-title'><GoCalendar /> 2017-2020</p>
                </div>
            </div>
            <div className="timeline_container">
                <div className="education-item">
                    <h5>Secondary School</h5>
                    <p className='education-title'>Kalwa Hindi High School</p>
                    <p className='education-title'><GoCalendar /> 2016-2017</p>
                </div>
            </div>
        </div>
    )
}

export default Education