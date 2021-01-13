/* eslint-disable no-unused-vars */
import React from 'react'
import moment from 'moment'

import './Header.css'

const Header = () => {
    return (
        <div id="top" className="row header">
            <div class="col-sm-4" id="clock">
                {moment().format('h:mm a')}
            </div>

            <div class="col-sm-4" id="me">
                Logan Roach
            </div>
        </div>
    )
}

export default Header;