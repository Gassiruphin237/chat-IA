import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import france from '../../assets/france.png'
import england from '../../assets/england.png'
import { NavLink } from 'react-router-dom';
function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('darkMode');
        if (storedTheme === 'true') {
            setDarkMode(true);
            document.body.classList.add('dark-mode');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="Bootstrap" height="24" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/AccuEEeil" className="nav-link" end> Accueil </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/A propos" className="nav-link" end> A propos </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='service'> Nos services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">test</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='service'> Nos produits
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">test</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="a" href="#">Carrière</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="a" href="#">Contact</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" aria-current="page"><i className="fa fa-search" aria-hidden="true"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={toggleTheme}>
                                    <i className={`fa ${darkMode ? 'fa-moon' : 'fa-sun'}`}></i>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={france} alt="Bootstrap" width="24" /> Français
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><img src={england} alt="Bootstrap" width="24" /> Anglais</a></li>
                                </ul>
                            </li>
                        </ul>
                    </span>
                     <div class="collapse multi-collapse" id="multiCollapseExample1">
                                    <div class="card card-body">
                                        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                    </div>
                                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
