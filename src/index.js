import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Logo from './logo.png';

const Main = () => { 
    return ( 
        <div>
            <header> 

            
                <div className = "Back">
                <img src = {Logo}></img>
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
                        <h1>Corporate Business</h1>
                            <div className = "button">
                                <a href = "" className = "style-btn btn-one">Watch Video</a>
                                <a href = "" className = "style-btn btn-two">Read More</a>
                            </div>
                        </div>
                    
                </div>
                

            </header>

            
            <div class="row">
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">Card Title</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                    </div>
                </div>
                </div>
                
            </div>
            
            

        </div>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));


