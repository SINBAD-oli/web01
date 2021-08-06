import "./topbar.css"
import {Link} from "react-router-dom";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topLeft">
                <img
                className="logo"
                src="./images/logo_oc_blk.svg"
                alt=""
                />
            </div>
            <div className="topCenter">
                <div className="topTitle">
                </div>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <li className="toplistItem" id="l"><Link to="/Homepage">Home</Link></li>
                    <li className="toplistItem" id="l"><Link to="/Gallery">Gallery</Link></li>
                    <li className="toplistItem" id="l"><Link to="/Work">Projects</Link></li>
                    <li className="toplistItem" id="l"><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    
    )
}
