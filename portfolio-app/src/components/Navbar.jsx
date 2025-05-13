import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
              <Link to="/">@Santhosh</Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to="About">About</Link>
                <Link to="Projects">Projects</Link>
                <Link to="Skills">Skills</Link>
                <Link to="Contact">Contacts</Link>

            </nav>
        </div>
    );
}

export default Navbar;
