import React from 'react';
import '../style.css'
import Logo from '../logo.png';

const Header = () => { 
    return ( 
        <header> 
            <div className = "Back">
                <img src = {Logo} className = "logo"></img>
                    <div className = "row">
                        <ul className = "main-nav">
                            <li className = "active"><a href = "">Home</a></li>
                            <li><a href = "">About</a></li>
                            <li><a href = "">Contact</a></li>
                            <li><a href = "">Services</a></li>
                            <li><a href = "">Portfolio</a></li>
                        </ul>

                    </div>

                    <div className = "hero">
                        <h1 className = "hero-text">Corporate Business</h1>
                            <div className = "button">
                                <a href = "" className = "style-btn btn-one">Watch Video</a>
                                <a href = "" className = "style-btn btn-two">Read More</a>
                            </div>
                        </div>
                    
                </div>
            </header> 
    )
}

export default Header;