import React from 'react';
import resume from './Resume_AbrahamEstrada.jpg';

const Resume =()=>{

    
    return (
        <div className ="ui segment inverted container"> 
            <h1 className ="ui header">Resume</h1>
            <div>
                
             <img alt ="" className = "ui centered aligned large image centered " src={resume} />
             
             </div>

          
        </div>
    )
}
export default Resume;