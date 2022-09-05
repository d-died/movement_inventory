import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'


const NavBar = () => {

    return (
        <div className="navbar">
             <div id="links-container">
                <Link to="/" className="navitem">BTS</Link>
                <Link to="/ManagerForm" className="navitem">Arist Manager Form</Link>
                <Link to="/BacklineLibrary" className="navitem">Backline Library</Link>
                <Link to="/StageMgrProfiles" className="navitem">Stage Manager Profiles</Link>
            </div>
            
        </div>
    )
}


export default NavBar