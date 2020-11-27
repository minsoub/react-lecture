import React from 'react';
import { Route, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigatin">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/products/jms">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/posts/2019/09?sortBy=newest&approved=true">Posts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/message">Message</Link>
                    </li>                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/info">Info</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/color">Color View</Link>
                    </li>     
                    <li className="nav-item">
                        <Link className="nav-link" to="/reduce">Reduce View</Link>
                    </li>  
                    <li className="nav-item">
                        <Link className="nav-link" to="/axios">Axios View</Link>
                    </li>                                                       
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;