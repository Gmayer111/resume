import FlipPage from 'components/UI/FlipPage'
import React, { useEffect, useState } from 'react'
import 'assets/Styles/Portfolio.scss';
import Restaurant from 'assets/Images/restaurant.png'
import Chair from 'assets/Images/chair.png'
import Mariage from 'assets/Images/mariage.png'
import Time from 'assets/Images/time.png'
import TiltCard from 'components/UI/TiltCard';

function Portfolio() {

    const [showResult, setShowResult] = useState([]);
    const [changeColorAll, setChangeColorAll] = useState(false);
    const [changeColorWp, setChangeColorWp] = useState(false);
    const [changeColorJs, setChangeColorJs] = useState(false);
    const [changeColorSf, setChangeColorSf] = useState(false);
    
    let activeBtn = {
        backgroundColor: 'rgb(82, 189, 231)',
        borderRadius: '30px',
        color: 'black'
    } 
    
    // let desactiveBtn = {
    //     backgroundColor: '',
    // }   

    let tiltvalues = [
          {id: 1, title: 'Restaurant Van Long', picture: Restaurant, language: 'Wordpress', link: 'https://van-long.fr/', logo: <i class="fab fa-wordpress"></i>},
          {id: 2, title: 'Time tracking dashboard', picture: Time, language: 'Javascript', link: 'https://confident-hamilton-fd4b0e.netlify.app/', logo: <i class="fab fa-js"></i>},
          {id: 3, title: 'Mariage', picture: Mariage, language: 'Symfony', link: 'https://ngocmy-et-gael.fr/', logo: <i class="fab fa-symfony"></i>},
          {id: 1, title: 'Room Home Page', picture: Chair, language: 'Javascript', link: 'https://amazing-gates-9da9b3.netlify.app/', logo: <i class="fab fa-js"></i>},
      ]
    
    let tiltArrays = [];
    let wordpress = [];
    let javascript = [];
    let symfony = [];

    for (let index = 0; index < tiltvalues.length; index++) {
        tiltArrays.push(tiltvalues[index]); 
        if (tiltvalues[index].language === 'Wordpress') {
            wordpress.push(tiltvalues[index]); 
        }      
        if (tiltvalues[index].language === 'Javascript') {
            javascript.push(tiltvalues[index]); 
        }  
        if (tiltvalues[index].language === 'Symfony') {
            symfony.push(tiltvalues[index]); 
        }   
    }

    useEffect(() => {
        setShowResult(tiltvalues);

    }, [tiltvalues])

    useEffect(() => {
        setChangeColorAll(true)

    }, [])


    return (
        <FlipPage title={"Portfolio."} logo={<i className="fas fa-briefcase"></i>}>
            <div className='mainBlock'>
                <div className='up'>
                <ul>
                    <li style={changeColorAll === true ? activeBtn : null}>            
                        <div 
                            className='btn'
                            onClick={() => {
                                setShowResult(tiltArrays); 
                                setChangeColorAll(true); 
                                setChangeColorWp(false);
                                setChangeColorJs(false);
                                setChangeColorSf(false)
                            }}
                        >
                            TOUT
                        </div>
                    </li>
                    <li style={changeColorWp === true ? activeBtn : null}>            
                        <div 
                            className='btn'
                            onClick={() => {
                                setShowResult(wordpress); 
                                setChangeColorAll(false); 
                                setChangeColorWp(true);
                                setChangeColorJs(false);
                                setChangeColorSf(false)
                            }}  
                        >
                            WORDPRESS
                        </div>
                    </li>
                    <li style={changeColorJs === true ? activeBtn : null}>            
                        <div 
                            className='btn' 
                            onClick={() => {
                                setShowResult(javascript); 
                                setChangeColorAll(false); 
                                setChangeColorWp(false);
                                setChangeColorJs(true);
                                setChangeColorSf(false)
                            }}
                        >
                            JAVASCRIPT
                        </div>
                    </li>
                    <li style={changeColorSf === true ? activeBtn : null}>            
                        <div 
                            className='btn' 
                            onClick={() => {
                                setShowResult(symfony); 
                                setChangeColorAll(false); 
                                setChangeColorWp(false);
                                setChangeColorJs(false);
                                setChangeColorSf(true)
                            }}
                        >
                            PHP
                        </div>
                    </li>
                </ul>
                    
                </div>
                <div className='down'>
                    <TiltCard tiltvalues={showResult}/>                      
                </div>
            </div>

        </FlipPage>
    )

}

export default Portfolio
