import FlipPage from 'components/UI/FlipPage'
import React from 'react'
import 'assets/Styles/Portfolio.scss';
import Tilt from 'react-vanilla-tilt';
import { useState } from 'react/cjs/react.development';

const Portfolio = () => {

    const [mySite, setMySite] = useState(false)

    const setMySite = () => {
        window.location.href = "https://van-long.fr/"
    }
    

    return (
        <FlipPage title={"Portfolio."} logo={<i className="fas fa-briefcase"></i>}>
            <div className='mainBlock'>

                <div className='blockUp'>
                    <ul className='list'>
                        <li className='active'>TOUT</li>
                        <li>WORDPRESS</li>
                        <li>SYMFONY</li>
                        <li>JAVASCRIPT</li>
                    </ul>
                </div>
                

                <div className="blockDown">
                <Tilt options={{ scale: 2}} style={{}}>
                    <div className='site' onClick={mySite}>
                        <div className='blockText'>
                            <h3>Restaurant Van Long</h3>
                            <h4>Wordpress</h4>
                        </div>
                    </div>
                </Tilt>                    


                    <div className='site'>
                    </div>
                    <div className='site'>
                    </div>
                </div>  
            </div>

        </FlipPage>
    )
}

export default Portfolio
