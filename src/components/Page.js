/* eslint-disable no-unused-vars */
import React, { Component} from 'react'
import Clicker from './Clicker'

import Pic from './images/dogtestimage.jpg'
import Fij from './images/fijilogo.png'
import AKPsi from './images/akpsilogo.jpg'
import Reach from './images/rcjlogo.jfif'
import Github from './images/ghlogo.png'
import LinkedIn from './images/lilogo.jpg'

import Wagner from './images/dentisticon.jpg'
import Twitter from './images/twitlogo.png'
import Imdb from './images/imdblogo.png'

import Dots from './Dots'
import './Page.css'

const Page = (props) => {

    return (
        
        <div className="first page">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <div className="appMat">
                <div id="row1" className="row col-md-8 offset-2">
                    <Clicker apps = {props.mat[0]}/>
                    <Clicker apps = {props.mat[1]}/>
                    <Clicker apps = {props.mat[2]}/>
                </div>
                <div id="row1" className="row col-md-8 offset-2">
                    <Clicker apps = {props.mat[3]}/>
                    <Clicker apps = {props.mat[4]}/>
                    <Clicker apps = {props.mat[5]}/>
                </div>
                <div id="row1" className="row col-md-8 offset-2">
                    <Clicker apps = {props.mat[6]}/>
                    <Clicker apps = {props.mat[7]}/>
                    <Clicker apps = {props.mat[8]}/>
                </div>
            </div>
        </div>
    )

}

function Slideshow() {

    const project1 = {
        imageUrl: Pic,
        name:"Test Doge App"
    }

    const filler = {
        imageUrl: null,
        name: null
    }

    const fiji = {
        imageUrl: Fij,
        name: "Phi Gamma Delta"
    }

    const akpsi = {
        imageUrl: AKPsi,
        name: "Alpha Kappa Psi"
    }

    const reach = {
        imageUrl: Reach,
        name: "Consulting"
    }

    const github = {
        imageUrl: Github,
        name: "Github"
    }

    const linkedin = {
        imageUrl: LinkedIn,
        name: "LinkedIn"
    }

    const wagner = {
        imageUrl: Wagner,
        name: "Dentistry Website"
    }

    const twitter = {
        imageUrl: Twitter,
        name: "Twitter Data"
    }

    const imdb = {
        imageUrl: Imdb,
        name: "Movie Game"
    }

    var me = [reach, akpsi, fiji, github, linkedin, filler, filler, filler, filler];

    var projects = [wagner, twitter, imdb, filler, filler, filler, filler, filler, filler];

    let carouselArr = [<Page mat={me} />, <Page mat={projects} />];

    const [x, setX] = React.useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100*(carouselArr.length-1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100*(carouselArr.length-1) ? setX(0) : setX(x - 100);
    };    

    return (
        <div className="slider">
            {carouselArr.map((item, index)=>{
                    return (
                        <div key={index} className="slide col-md-12" style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    );
                })}
            <button id="goLeft" onClick={goLeft}><i class=" ar fas fa-chevron-left" ></i></button>
            <button id="goRight" onClick={goRight}><i class=" ar fas fa-chevron-right" ></i></button>
            <Dots id="dots" slides={carouselArr} activeIndex={x} />
        </div>
    );
}

export default Slideshow;