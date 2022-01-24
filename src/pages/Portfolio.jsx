import FlipPage from 'components/UI/FlipPage'
import React from 'react'
import 'assets/Styles/Portfolio.scss';
import TiltCard from 'components/UI/TiltCard';
import Restaurant from 'assets/Images/restaurant.png'
import PortList from 'components/UI/PortList';

function Portfolio() {



    return (
        <FlipPage title={"Portfolio."} logo={<i className="fas fa-briefcase"></i>}>
            <div className='mainBlock'>

                <div className='blockUp'>
                    <ul>

                        <PortList
                            listName={'TOUT'}
                        />
                        <PortList
                            listName={'WORDPRESS'}
                        />
                        <PortList
                            listName={'JAVASCRIPT'}
                        />
                        <PortList
                            listName={'SYMFONY'}
                        />
                    </ul>
                </div>
                

                <div className="blockDown">
                    <TiltCard 
                        titleUp={'Restaurant Van Long'}
                        titleDown={'Wordpress'}
                        icon={<i class="fab fa-wordpress"></i>}
                        backgroundImage={Restaurant}
                        location={'https://van-long.fr/'}
                    />
                    <TiltCard 
                        titleUp={'Restaurant Van Long'}
                        titleDown={'Javascript'}
                        icon={<i class="fab fa-js-square"></i>}
                        backgroundImage={Restaurant}
                        location={'https://nervous-visvesvaraya-609593.netlify.app/'}
                    />
                    <TiltCard 
                        titleUp={'Restaurant Van Long'}
                        titleDown={'Wordpress'}
                        icon={<i class="fab fa-wordpress"></i>}
                        backgroundImage={Restaurant}
                    />
                </div>  
            </div>

        </FlipPage>
    )
}

export default Portfolio
