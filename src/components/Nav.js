import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import fire from '../config/fire'

function Nav(props) {

    const navStyle = {
        color: "black",
        textDecoration: "none",
        fontWeight: "bold"
    }

    const brandStyle = {
        justify: "left",
        position: "fixed",
        left: "20px",
        fontWeight: "bold",
        backgroundColor: "rgb(0, 153, 255)",
        borderRadius: "10px",
        padding: "5px"
    }

    const currentUser = fire.auth().currentUser;

    var links = null;
    if (currentUser) {
        links =
        <div>
            <ul className="navbar-nav ml-auto">
                <li style={brandStyle} className="navbar-brand">TrackingDoc</li>
                <Link to="/dashboard">
                    <li style={navStyle} className="nav-item nav-link">Dashboard</li>
                </Link>
                <Link to="/logOut">
                    <li style={navStyle} className="nav-item nav-link">Cerrar Sesion</li>
                </Link>
                <Link to="/">
                    <li style={navStyle} className="nav-item nav-link">Inicio</li>
                </Link>
            </ul>
        </div>
    } else {
        links =
        <div>
            <ul className="navbar-nav ml-auto">
                <li style={brandStyle} className="navbar-brand nav-item">TrackingDoc</li>
                <Link to="/">
                    <li style={navStyle} className="nav-item nav-link">Inicio</li>
                </Link>
                <Link to="/login">
                    <li style={navStyle} className="nav-item nav-link">Iniciar Sesion</li>
                </Link>
                <Link to="/register">
                    <li style={navStyle} className="nav-item nav-link">Registrar Cuenta</li>
                </Link>
            </ul>
        </div>
    }



    return (
        <nav className="site-nav-bar navbar navbar-expand-lg navbar-static-top">
            <ul className="navbar-nav ml-auto">
                {links}
            </ul>
        </nav>
    )
}

export default Nav;