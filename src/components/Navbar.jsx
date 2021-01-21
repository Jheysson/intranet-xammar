import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AaIcons from "react-icons/ai";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import { SidebarData } from './SidebarData'
import { SidebarAlumnos } from './SidebarAlumnos'
import { SidebarCursos } from './SidebarCursos'

import './NavbarStyles.css';
import './template-navbar.css';
import { IconContext } from 'react-icons';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Course from '../pages/Course';
import Schedule from '../pages/Schedule';
import Score from '../pages/Score';
function Navbar() {

    const datos_alumno = {
        
        apellido: 'Urbano Lino',
        nombre: 'Jheysson Jesús',
        cargo: 'Estudiante',
        correo_institucional: '0333161046@unjfsc.edu.pe',
        nivel: 'Secundaria',
        anio: '4to',

        fech_nacimiento: '31-01-99',
        dni: '96374528',
        edad: '15',
        sexo: 'Masculino',
        tipo_sangre: 'O+',
        
        direccion: 'Psj. San Isidro 120',
        correo_personal: 'jheysson@hotmail.com',
        telf_fijo: '2345678',
        telf_pers: '987654321',

        pais: 'Perú',
        provincia: 'Huaura',
        domicilio_procedencia: 'Psj. San Isidro 120',
        departamento: 'Lima',
        distrito: 'Santa María',


        urlImagen: 'http://via.placeholder.com/100'
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
                        <a href="#">MENU</a>
                        <div id="close-sidebar" onClick={showSidebar}>
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                    <div class="sidebar-header">
                        <div class="user-pic">          
                        </div>
                        <div class="user-info">
                        <span class="user-name">
                            {datos_alumno.nombre.split(' ')[0]}
                            <strong> {datos_alumno.apellido.split(' ')[0]}</strong>
                        </span>
                        <span class="user-role">{datos_alumno.cargo}</span>
                        <span class="user-status">
                            {
                                /*
                                <i class="fa fa-circle"></i>
                            <span>Online</span>
                                */
                            }
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
                                        SidebarAlumnos.map((item, index) => {
                                            return(
                                                <li>
                                                <Link key={index} to ={item.path} className="asd" >
                                                    <i class={item.icon}></i>
                                                    <span>{item.title}</span>
                                                </Link>
                                                </li>
                                            )
                                        })
                                    }                                
                                <li class="header-menu">
                                    <span>Cursos</span>
                                </li>
                                    {                                        
                                        SidebarCursos.map((item, index) => {
                                            return(
                                                <li>
                                                <Link key={index} to ={item.path} >
                                                    <i class={item.icon}></i>
                                                    <span>{item.title}</span>
                                                </Link>
                                                </li>
                                            )
                                        })
                                    }
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="sidebar-footer">
                    {
                        /*
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
                        */
                    }
                </div>
            </nav>
            <main className="page-content">
            <div className="container-fluid">
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/profile'>
                        <Profile datos_alumno={datos_alumno}/>
                    </Route>
                    <Route path='/course' component={Course}/>
                    <Route path='/schedule' component={Schedule}/>
                    <Route path='/score' component={Score}/>
                </Switch>
            </div>
            
        </main>
        </div>
        
        </>
    )
}

export default Navbar
