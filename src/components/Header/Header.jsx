import React from 'react';
import 'assets/Styles/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <header>
            <div className="headUp">
                <div className="imgProfil">
                    <span>GAEL MAYER</span>
                </div>
                <ul>
                    <li>
                        <div className="icon">
                            <i className="fas fa-house-user"></i>
                        </div>
                        <div className="text">
                            <Link className="link" to="/">ACCUEIL</Link>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="text">
                            <Link className="link" to="/about">A PROPOS</Link>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fas fa-university"></i>
                        </div>
                        <div className="text">
                            <Link className="link" to="/resume">PARCOURS</Link>
                        </div> 
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fas fa-briefcase"></i>
                        </div>
                        <div className="text">
                            <Link className="link" to="/portfolio">PORTFOLIO</Link>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="text">
                            <Link className="link" to="/contact">CONTACT</Link>
                        </div>
                    </li>
                </ul>                
            </div>
            <div className="headDown">
                <div>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-github"></i>
                </div>
                <span>Site inspired by watson-vcard.netlify.app/index-dark-particles1.html</span>
              
            </div>

        </header>
    )
}

export default Header
