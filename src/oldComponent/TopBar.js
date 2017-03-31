import React from 'react';
import { NavLink } from 'react-router-dom';

export default class TopBar extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">Khoa Pham</li>
                        <li><NavLink to='/' exact activeStyle={{ fontWeight: 'bold' }}>Home</NavLink></li>
                        <li><NavLink to='/public' activeStyle={{ fontWeight: 'bold' }}>Public</NavLink></li>
                        <li><NavLink to='/private' activeStyle={{ fontWeight: 'bold' }}>Private</NavLink></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><input type="search" placeholder="Search" /></li>
                        <li><button type="button" className="button">Search</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}
