import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

    return (
        <div className="navbar">
             
            <Link to="/" className="navitem">BTS</Link>
            <Link to="/ManagerForm" className="navitem">Arist Manager Form</Link>
            <Link to="/BacklineLibrary" className="navitem">Backline Library</Link>
            <Link to="/StageMgrProfiles" className="navitem">Stage Manager Profiles</Link>
            
        </div>
    )
}


export default NavBar