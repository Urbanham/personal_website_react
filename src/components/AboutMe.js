import React from 'react';
import './App.css'
import Avatar from './Avatar.jpg';
const AboutMe = () => {
    return (
        <div className="ui piled segment inverted container">
            <img alt = "" className ="ui centered medium circular image" src ={Avatar}/>
            <div className="ui inverted segment">
                <h1 className="ui header left aligned  inverted">About</h1>
            </div>
            
            <p className="centered aligned">
                Hello, I'm Abraham. I am a young computer science graduate from CSULA with a concentration in web development and cross plattform application. 
            </p>
            <p className="centered aligned">
               I enjoy learning new skills and accept challenges to allow myself to continue to grow. I prefer to take on challenges
               to keep learning. 
            </p>
            <p className="centered aligned">
                Constantly wanting to learn has allowed me to be easily inspired when working. This has caused me to have many interests, and hobbies.
                I'm a fast learner, allowing me to enjoy the many fascinations I have in life.
            </p>
            
                
                
            

        </div>
    )
}
export default AboutMe;