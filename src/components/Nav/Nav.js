import React from 'react';
import logo from '../../assets/devmtn-logo.png';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div className="navbar">
            <div className='navbar-left'>
                <img src={logo} alt=""/>
                <h1>Flash Cards</h1>
            </div>
            <div>
                <ul className='navbar-links'>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Study</Link>                                   
                </ul>
            </div>
        </div>
    )
}