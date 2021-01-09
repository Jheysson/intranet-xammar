import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AaIcons from "react-icons/ai";
import { Link } from 'react-router-dom';

import { SidebarData } from './SidebarData';
import './Navbar.css';
import './template-navbar.css';
import { IconContext } from 'react-icons';
function Navbar() {

    const [sidebar, setSidebar] = useState(false);
    const [etiqueta, setEtiqueta] = useState('FaIcons.FaBars');

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <div className={sidebar ? 'd-flex toggled' : 'd-flex'} id="wrapper">
            <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Start Bootstrap </div>
            <div className="list-group list-group-flush">
                {
                    SidebarData.map((item, index) => {
                        return ( 
                            <IconContext.Provider value={{color: '#089FF8'}}>
                            <Link key={index} to={item.path} className={item.cName}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>                            
                            </IconContext.Provider>                           
                        )
                    })
                }
            </div>
            </div>

            <div id="page-content-wrapper">

            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <Link key="menu-toggle" onClick={showSidebar}>{sidebar ? <FaIcons.FaBars/> : <AaIcons.AiOutlineClose/>}</Link>            
            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                    </li>
                </ul>
                </div>
            </nav>

            <div class="container-fluid">
                <h1 class="mt-4">Simple Sidebar</h1>
                <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
