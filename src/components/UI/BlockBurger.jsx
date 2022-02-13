import React, { useState } from 'react';

export default function BlockBurger() {

    //const [display, setDisplay] = useState(false);


  return (
    <div className='display-block'>
        <span>GAEL MAYER</span>
        <div><i class="fas fa-bars" onClick={() => {alert('ok')}}></i></div>
    </div>
  );

};



