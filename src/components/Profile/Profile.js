import React, {Component} from 'react';
import Sidebar from '../Session-sidebar/Session-sidebar';

export default class Profile extends Component {
    render() {
        return (
            <div className="profile_container">
                <Sidebar/>
            </div>
        )
    }
}