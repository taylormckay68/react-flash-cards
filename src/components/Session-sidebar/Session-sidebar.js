import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return(
            <div className="sidebar_container">
                <ul>
                    <Link to='/flash-cards/JSBasic'>JavaScript Basic</Link>
                    <Link to='/flash-cards/JSAdvanced'>JavaScript Advanced</Link>
                    <Link to='/flash-cards/React'>React</Link>
                    <Link to='/flash-cards/CSS'>CSS</Link>
                    <Link to='/flash-cards/HTML'>HTML</Link>                   
                </ul>
            </div>
        )
    }
}