import React from 'react';
import 'assets/Styles/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div class="headUp">
                <div class="imgProfil">
                    <span>GAEL MAYER</span>
                </div>
                <ul>
                    <li>
                        <div class="icon">
                            <i class="fas fa-house-user"></i>
                        </div>
                        <div class="text">
                            <Link class="link" to="/">ACCUEIL</Link>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="text">
                            <Link class="link" to="/about">A PROPOS</Link>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <i class="fas fa-university"></i>
                        </div>
                        <div class="text">
                            <Link class="link" to="/resume">PARCOURS</Link>
                        </div> 
                    </li>
                    <li>
                        <div class="icon">
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <div class="text">
                            <Link class="link" to="/portofolio">PORTFOLIO</Link>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="text">
                            <Link class="link" to="/contact">CONTACT</Link>
                        </div>
                    </li>
                </ul>                
            </div>
            <div class="headDown">
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
