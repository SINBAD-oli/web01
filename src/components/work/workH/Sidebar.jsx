import React from 'react'
import './sidebar.css'
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ARCHIVE</span>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle2">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem"id="l"><Link to="/Tech">Engineering</Link></li>
                    <li className="sidebarListItem" id="l"><Link to="/Photo">Photography</Link></li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle2">FOLLOW ME</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
