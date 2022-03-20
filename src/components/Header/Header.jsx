import React, {useState, useEffect} from 'react';
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

    const [displayHeader, setDisplayHeader] = useState();


    useEffect(() => {
      setDisplayHeader('no-head')
    }, [])

    return (
        <>
        <header>
        <div className='block-bars'>
          <span>GAEL MAYER</span>
          <div>
            {displayHeader === 'no-head' ? 
            <div onClick={() => {setDisplayHeader('head')}}>
              <i className="fas fa-bars"></i> 
            </div>  
            :
            <div onClick={() => {setDisplayHeader('no-head')}}>
              <i className="fas fa-window-close"></i>            
            </div>            
          }
          </div>
        </div>
        <div className={displayHeader}>
            <div className="headUp">
                <div className="imgProfil">
                    <span>GAEL MAYER</span>
                </div>
                <ul>
                    <li>
                        <CustomLink className="link" to="/" onClick={() => {setDisplayHeader('no-head')}} >
                            <i className="fas fa-house-user"></i>
                            <div>ACCUEIL</div>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink className="link" to="/a-propos" onClick={() => {setDisplayHeader('no-head')}} >
                            <i className="fas fa-user"></i>
                            <div>A PROPOS</div>    
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink className="link" to="/parcours" onClick={() => {setDisplayHeader('no-head')}} >
                            <i className="fas fa-university"></i>
                            <div>PARCOURS</div>    
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink className="link" to="/portfolio" onClick={() => {setDisplayHeader('no-head')}} >
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
                    <a href="https://www.linkedin.com/in/ga%C3%ABl-mayer-923428b4/" target="_blank" rel="noopener noreferrer">

                    <i className="fab fa-linkedin icon"></i>
                    </a>
                    <a href="https://github.com/Gmayer111" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github icon"></i>
                    </a>
                </div>
                <span>Site inspired by watson-vcard.netlify.app/index-dark-particles1.html</span>
              
            </div>            
        </div>
        </header>        
        </>

    )
}

export default Header
