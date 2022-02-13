import FlipPage from 'components/UI/FlipPage'
import React, { useEffect, useState } from 'react'
import 'assets/Styles/Portfolio.scss';
import Restaurant from 'assets/Images/restaurant.png'
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
    
    let desactiveBtn = {
        backgroundColor: '',
    }   

    let tiltvalues = [
          {id: 1, title: 'Restaurant Van Long', picture: Restaurant, language: 'Wordpress', link: 'https://van-long.fr/', logo: <i class="fab fa-wordpress"></i>},
          {id: 2, title: 'Time tracking dashboard', picture: Restaurant, language: 'Wordpress', link: 'https://nervous-visvesvaraya-609593.netlify.app/', logo: <i class="fab fa-wordpress"></i>},
          {id: 3, title: 'Mariage', picture: Restaurant, language: 'Wordpress', link: 'https://van-long.fr/', logo: <i class="fab fa-wordpress"></i>},
          {id: 1, title: 'Restaurant Van Long', picture: Restaurant, language: 'Javascript', link: 'https://van-long.fr/', logo: <i class="fab fa-wordpress"></i>},
          {id: 2, title: 'Time tracking dashboard', picture: Restaurant, language: 'Javascript', link: 'https://nervous-visvesvaraya-609593.netlify.app/', logo: <i class="fab fa-wordpress"></i>},
          {id: 3, title: 'Mariage', picture: Restaurant, language: 'Javascript', link: 'https://van-long.fr/', logo: <i class="fab fa-wordpress"></i>},
          {id: 1, title: 'Restaurant Van Long', picture: Restaurant, language: 'Symfony', link: 'https://van-long.fr/', logo: <i class="fab fa-wordpress"></i>},
          {id: 2, title: 'Time tracking dashboard', picture: Restaurant, language: 'Symfony', link: 'https://nervous-visvesvaraya-609593.netlify.app/', logo: <i class="fab fa-wordpress"></i>},
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

    }, [])

    useEffect(() => {
        setChangeColorAll(true)

    }, [])


    return (
        <FlipPage title={"Portfolio."} logo={<i className="fas fa-briefcase"></i>}>
            <div className='mainBlock'>
                <div className='up'>
                <ul>
                    <li style={changeColorAll === true ? activeBtn : desactiveBtn}>            
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
                    <li style={changeColorWp === true ? activeBtn : desactiveBtn}>            
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
                    <li style={changeColorJs === true ? activeBtn : desactiveBtn}>            
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
                    <li style={changeColorSf === true ? activeBtn : desactiveBtn}>            
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
