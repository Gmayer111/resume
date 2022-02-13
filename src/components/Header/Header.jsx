import React from 'react';
import 'assets/Styles/Header.scss';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = (props) => {

    function CustomLink({ children, to, ...props } ) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

      
        return (
          <div>
              <div className={{ color: 'icon' && match ?  "#fefefe" : "#fefefe"}}></div>
            <Link
              style={{ color: match ? "#fefefe" : "none" }}
              to={to}
              {...props}
            >
              {children}
            </Link>
      
          </div>
        );
      }
    
    return (
        <header className={props.class}>
            <div className="headUp">
                <div className="imgProfil">
                    <span>GAEL MAYER</span>
                </div>
                <ul>
                    <li>
                        <CustomLink className="link" to="/" onClick={() => {props.close = false}} >
                            <i className="fas fa-house-user"></i>
                            <div>ACCUEIL</div>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink className="link" to="/a-propos" onClick={() => {props.close = false}}>
                            <i className="fas fa-user"></i>
                            <div>A PROPOS</div>    
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink className="link" to="/parcours" onClick={() => {props.close = false}}>
                            <i className="fas fa-university"></i>
                            <div>PARCOURS</div>    
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink className="link" to="/portfolio" onClick={() => {props.close = false}}>
                            <i className="fas fa-briefcase"></i>
                            <div>PORTFOLIO</div>    
                        </CustomLink>
                    </li>
                    <li>

                        <CustomLink className="link" to="/contact" onClick={() => {props.close = false}}>
                            <i className="fas fa-envelope"></i>
                            <div>CONTACT</div>    
                        </CustomLink>

                    </li>
                </ul>                
            </div>
            <div className="headDown">
                <div>
                    <i class="fab fa-linkedin icon"></i>
                    <i class="fab fa-github icon"></i>
                </div>
                <span>Site inspired by watson-vcard.netlify.app/index-dark-particles1.html</span>
              
            </div>

        </header>
    )
}

export default Header
