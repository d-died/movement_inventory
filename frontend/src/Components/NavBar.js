import { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'


const NavBar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick (!click)
    const closeMenu = () => setClick (false)

    return (
        <div className="navbar">
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-dash menu-dashes-angle1" : "fas fa-dash menu-dashes"}/>
                <i className={click ? "fas fa-dash menu-dashes-angle2" : "fas fa-dash menu-dashes"}/>
                <i className={click ? "fas fa-dash menu-dashes-angle2" : "fas fa-dash menu-dashes"}/>
            </div>
            <div className='app-name'>
                BTS
            </div>
            <div className={click ? "nav-menu active": "nav-menu"}>
                <Link to="/" className="navitem" onClick={closeMenu}>BTS</Link>
                <Link to="/ManagerForm" className="navitem" onClick={closeMenu}>Arist Manager Form</Link>
                <Link to="/BacklineLibrary" className="navitem" onClick={closeMenu}>Backline Library</Link>
                <Link to="/StageMgrProfiles" className="navitem" onClick={closeMenu}>Stage Manager Profiles</Link>
            </div>
        </div>
       
    )
}


export default NavBar