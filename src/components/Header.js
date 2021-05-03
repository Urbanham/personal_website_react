import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

const Header = () => {

    return (
            <div className="ui inverted labeled icon menu">
                <Link to='/' className="item">
                    Home
                 </Link>
                <Link to ='/resume'className="item">
                         Resume
                </Link>
                <Link to='/contact' className="item">
                         Contact Information
                </Link>
                
            </div> 

    )
};

export default Header;