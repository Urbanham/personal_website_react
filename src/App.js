import React from 'react';
import {Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume'
import Header from './components/Header';
import Contact from './components/Contact';
import "./components/App.css";


const App = () => {


    return (


        <div className='ui'>
            <div className="row">
                <div className="column">
                    <div className='menu'>
                        <Header />
                            <br></br>
                      
                            <div className='ui column centered middle aligned grid'>
                                <div className="ui">
                    
                                    <div className="ui ">
                                            <div className="description">
                                                <Route path='/' exact component={AboutMe} />
                                                <Route path='/resume' exact component={Resume} />
                                                <Route path ='/contact' exact component={Contact}/>
                                            </div>
                                        </div>
                                </div>
                            </div>



                    </div>
                </div>
            </div>
            </div>
    )
};

export default App;