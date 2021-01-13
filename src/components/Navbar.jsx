import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AaIcons from "react-icons/ai";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import { SidebarData } from './SidebarData';
import { SidebarItems } from './SidebarItems'

import './NavbarStyles.css';
import './template-navbar.css';
import { IconContext } from 'react-icons';

import Home from '../pages/Home';
import Reports from '../pages/Reports';
import Products from '../pages/Products';
import Profile from '../pages/Profile';
function Navbar() {

    const datos_alumno = {
        nombre: 'Jheysson',
        apellido: 'Urbano',
        direccion: 'Psj. Popular 120',
        urlImagen: 'http://via.placeholder.com/100',
        texto: 'Lorem15 ipsun dolor sit amet consectetur adipisicing elit.'
      }

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <div className={ sidebar ? 'page-wrapper chiller-theme' : 'page-wrapper chiller-theme toggled' } >
            <a id="show-sidebar" onClick={showSidebar} class="btn btn-sm btn-dark" href="#">
                <i class="fas fa-bars"></i>
            </a>
            <nav id="sidebar" class="sidebar-wrapper">
                <div class="sidebar-content">
                    <div class="sidebar-brand">
                        <a href="#">pro sidebar</a>
                        <div id="close-sidebar" onClick={showSidebar}>
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                    <div class="sidebar-header">
                        <div class="user-pic">          
                        </div>
                        <div class="user-info">
                        <span class="user-name">Jheysson
                            <strong> Urbano</strong>
                        </span>
                        <span class="user-role">Estudiante</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                        </div>
                    </div>
                    <div class="sidebar-search">
                        <div>
                            
                        </div>
                        <div class="sidebar-menu">
                            <ul>
                                <li class="header-menu">
                                    <span>Información</span>
                                </li>
                                
                                
                                    
                                    {
                                        SidebarItems.map((item, index) => {
                                            return(
                                                <li class="sidebar-dropdown">
                                                <Link key={index} to ={item.path} >
                                                    <i class={item.icon}></i>
                                                    <span>{item.title}</span>
                                                </Link>
                                                </li>
                                            )
                                        })
                                    }
                                <li class="sidebar-dropdown">
                                    <a href="#">
                                    <i class="fa fa-shopping-cart"></i>
                                    <span>E-commerce</span>
                                    <span class="badge badge-pill badge-danger">3</span>
                                    </a>
                                    <div class="sidebar-submenu">
                                    <ul>
                                        <li>
                                        <a href="#">Products

                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">Orders</a>
                                        </li>
                                        <li>
                                        <a href="#">Credit cart</a>
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                <li class="sidebar-dropdown">
                                    <a href="#">
                                    <i class="far fa-gem"></i>
                                    <span>Components</span>
                                    </a>
                                    <div class="sidebar-submenu">
                                    <ul>
                                        <li>
                                        <a href="#">General</a>
                                        </li>
                                        <li>
                                        <a href="#">Panels</a>
                                        </li>
                                        <li>
                                        <a href="#">Tables</a>
                                        </li>
                                        <li>
                                        <a href="#">Icons</a>
                                        </li>
                                        <li>
                                        <a href="#">Forms</a>
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                <li class="sidebar-dropdown">
                                    <a href="#">
                                    <i class="fa fa-chart-line"></i>
                                    <span>Charts</span>
                                    </a>
                                    <div class="sidebar-submenu">
                                    <ul>
                                        <li>
                                        <a href="#">Pie chart</a>
                                        </li>
                                        <li>
                                        <a href="#">Line chart</a>
                                        </li>
                                        <li>
                                        <a href="#">Bar chart</a>
                                        </li>
                                        <li>
                                        <a href="#">Histogram</a>
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                <li class="sidebar-dropdown">
                                    <a href="#">
                                    <i class="fa fa-globe"></i>
                                    <span>Maps</span>
                                    </a>
                                    <div class="sidebar-submenu">
                                    <ul>
                                        <li>
                                        <a href="#">Google maps</a>
                                        </li>
                                        <li>
                                        <a href="#">Open street map</a>
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                <li class="header-menu">
                                    <span>Extra</span>
                                </li>
                                <li>
                                    <a href="#">
                                    <i class="fa fa-book"></i>
                                    <span>Documentation</span>
                                    <span class="badge badge-pill badge-primary">Beta</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <i class="fa fa-calendar"></i>
                                    <span>Calendar</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <i class="fa fa-folder"></i>
                                    <span>Examples</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="sidebar-footer">
                    <a href="#">
                        <i class="fa fa-bell"></i>
                        <span class="badge badge-pill badge-warning notification">3</span>
                    </a>
                    <a href="#">
                        <i class="fa fa-envelope"></i>
                        <span class="badge badge-pill badge-success notification">7</span>
                    </a>
                    <a href="#">
                        <i class="fa fa-cog"></i>
                        <span class="badge-sonar"></span>
                    </a>
                    <a href="#">
                        <i class="fa fa-power-off"></i>
                    </a>
                </div>
            </nav>
            <main className="page-content">
            <div className="container-fluid">
            <h1>WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW</h1>
            </div>
            
        </main>
        </div>
        
        </>
    )
}

export default Navbar
