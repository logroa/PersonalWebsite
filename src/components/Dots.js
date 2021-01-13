/* eslint-disable no-unused-vars */
import React from 'react'
import './Dots.css'
import { css, jsx } from '@emotion/react'

const Dot = ({ active }) => {
    return (
        <span 
            css={css`
            background: ${active ? 'white' : 'black'};`}
        className="dotter"/>
    )
}

const Dots = ({ slides, activeIndex }) => {
    return (
        <div className="dotbox">
            {slides.map((slide, i) => (
                <Dot key={slide} active={activeIndex === i} />
            ))}
        </div>
    );
}

export default Dots;