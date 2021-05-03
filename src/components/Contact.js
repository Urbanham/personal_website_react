import React from 'react';
import './App.css'

const Contact = () => {
    return (
        <div className="ui piled segment inverted container">
                     
            <p className="ui item ">
                <h1 className = "ui header inverted left aligned">Contact </h1>    
                I am currently seeking out companies to collaborate and work for. 
                <br></br>
                Feel free to reach out to me through any platforms below. 
            </p>
            <h4 className = "ui left aligned header">
            <a href ="https://www.instagram.com/urbanham/" target ="_blank"className ="ui red item" rel="noopener noreferrer">Instagram <i class="instagram icon red"></i></a>
            
            </h4>
            <h4 className = "ui left aligned header purple">
                <a href="https://www.linkedin.com/in/abrahamsestrada" target="_blank" rel="noopener noreferrer" >LinkedIn<i class="linkedin icon red"></i></a>
            </h4>

        </div>
    )
}
export default Contact;