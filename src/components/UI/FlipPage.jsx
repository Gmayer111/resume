import React from 'react';
import 'assets/Styles/FlipPage.scss'

export default function FlipPage(props) {

  return(
    <div className='main-container'>
      <main>
        <div className="flip-container">
          <div className="block-flip-title">
              <h1>{ props.title }</h1>
              <div className="blockLogo">
                  { props.logo }
              </div>
          </div>
          <section>
            {props.children}
          </section>
        </div>        
      </main>

    </div>    
  )

}