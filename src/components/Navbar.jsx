import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/assets/css/navbar.css';


const NavBar = () => {

        const [isHidden, setSidebar] = useState(true);

        const ShowSidebar = () => {
                setSidebar(false);
        };

        const HideSidebar = () => {
                setSidebar(true);
        }


        return (
                <nav>
                        <ul>
                                <li className='hide-on-mobile'><Link to='/' className='nav-link'>Home</Link></li>
                                <li className='hide-on-mobile'><Link to='/about' className='nav-link'>About Us</Link></li>
                                <li className='hide-on-mobile'><Link to='/services' className='nav-link'>Services</Link></li>
                                <li className='hide-on-mobile'><Link to='/projects' className='nav-link'>Projects</Link></li>
                                <li className='hide-on-mobile'><Link to='/gallery' className='nav-link'>Gallery</Link></li>
                                <li className="menu-button"><Link to="#" className='nav-link' onClick={ShowSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></Link></li>
                        </ul>

                        <ul className={ isHidden ? 'hide-sidebar' : 'sidebar'}>
                                <li><Link to="#" className='nav-link' onClick={HideSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></Link></li>
                                <li><Link to='/' className='nav-link'>Home</Link></li>
                                <li><Link to='/about' className='nav-link'>About Us</Link></li>
                                <li><Link to='/services' className='nav-link'>Services</Link></li>
                                <li><Link to='/projects' className='nav-link'>Projects</Link></li>
                                <li><Link to='/gallery' className='nav-link'>Gallery</Link></li>
                        </ul>
                </nav>
        );
};

export default NavBar;
