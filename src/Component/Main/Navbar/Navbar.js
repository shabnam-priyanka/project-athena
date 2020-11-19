import React from 'react';
import './Navbar.css';
import logo from '../../../image/Group 86.png';


const Navbar = () => {
    
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <img src={logo} style={{ width: '150px' }} alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <p className="nav-link" >Home <span className="sr-only">(current)</span></p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" >About</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Services</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" >Pricing</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Our Team</p>
                        </li>
                        <li className="nav-item">              
                            <button className="nav-link btn btn-dark text-white" style={{ width: '134px' }} > Contact Us </button>
                            
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;