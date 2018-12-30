import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Components/header';
import Section from './Components/section';
const Main = () => { 
    return ( 
        <div>

            <Header/>
            <Section/>
            


        
        </div>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));


