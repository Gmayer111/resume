import React from 'react'
import 'assets/Styles/BlockBars.scss'

export default function BlockBars(props) {


  return (
    <div className='display-block'>
    <span>GAEL MAYER</span>
    <div>
      {props.display === 'no-head' ? 
      <div>
        <i className="fas fa-bars"></i> 
      </div>  
      :
      <div>
        <i className="fas fa-window-close"></i>            
      </div>            
    }
    </div>
  </div>
  )
}

