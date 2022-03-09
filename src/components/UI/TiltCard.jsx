import React from 'react'
import Tilt from 'react-vanilla-tilt';
import 'assets/Styles/tilt.scss'

function TiltCard(props) {



    const onpenInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const content = props.tiltvalues.map((tiltvalue, id) => 

        <Tilt options={{ scale: 2}} style={{}}>
            <button 
                onClick={() => onpenInNewTab(`${tiltvalue.link}`)} 
                target="_blank" 
                rel="noopener noreferrer"
                key={id}    
            >  
                <div className='site' style={{ 
                    backgroundImage: `url(${tiltvalue.picture})` }}>
                    <div 
                        className='blockText'
                        >
                        <div>
                            <h3 className='ht'>{tiltvalue.title}</h3>
                            <h4 className='hf'>{tiltvalue.language}</h4>                                    
                        </div>
                        <div className='icone'>
                            { tiltvalue.logo }
                        </div>
                    </div>
                </div>                        
            </button>
        </Tilt>          
    )

    return (
        <div className='blockDown'>
            {content}
        </div>

    )
}


export default TiltCard
