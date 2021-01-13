import React from 'react'
import './Clicker.css'

// eslint-disable-next-line no-unused-vars
const Clicker = (props) => {
    return (
        <div className="app">

            <button className="appButton">
                <img className="buttonPic" src={props.apps.imageUrl} alt=""/>
            </button>

            <div className="name">
                {props.apps.name}
            </div>
        </div>
    )
}

export default Clicker;