import React from 'react'
import Tilt from 'react-vanilla-tilt';
import 'assets/Styles/tilt.scss'

function TiltCard(props) {

    const onpenInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }



    return (
        <Tilt options={{ scale: 2}} style={{}}>
            <button onClick={() => onpenInNewTab(`${props.location}`)} target="_blank" rel="noopener noreferrer">
                
                <div className='site' style={{ 
                    backgroundImage: `url(${props.backgroundImage})` }}>
                    <div 
                        className='blockText'
                        >
                        <div>
                            <h3 className='ht'>{props.titleUp}</h3>
                            <h4 className='hf'>{props.titleDown}</h4>                                    
                        </div>
                        <div className='icone'>
                            { props.icon }
                        </div>
                    </div>
                </div>                        
            </button>
        </Tilt> 
    )
}


export default TiltCard
