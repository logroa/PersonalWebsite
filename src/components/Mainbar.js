/* eslint-disable no-unused-vars */
import React from 'react'
import Clicker from './Clicker'

import Edu from './images/blockm.jfif'
import Work from './images/workicon.png';
import Skills from './images/skillsicon.png';

import './Mainbar.css'

const Mainbar = () => {

    const education = {
        imageUrl: Edu,
        name:"Education"
    }

    const work = {
        imageUrl: Work,
        name:"Work Experience"
    }

    const skills = {
        imageUrl: Skills,
        name: "Skills"
    }


    return (
        <div className="row col-md-8 offset-2" id="bar">
            <Clicker apps = {education} className="barButt" />
            <Clicker apps = {work} className="barButt" />
            <Clicker apps = {skills} className="barButt" />
        </div>
    )
}

export default Mainbar;