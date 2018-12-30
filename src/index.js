import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Components/header';
const Main = () => { 
    return ( 
        <div>

            <Header/>
            <section class="intro">  
                <div class="content">
                    <h1>You can create full screen sections without javascript.</h1>
                    <p>The height is set to 90vh, that means 90% height.</p>
                </div>
        </section>


        
        </div>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));


