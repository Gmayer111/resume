import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

function PortList(props) {

    const [changeName, setChangeName] = useState(false);


  return (
    <Wrapper>
            <li className='active'>
                <button 
                    onClick={() => setChangeName(!changeName)}
                >
                    {props.listName}
                </button>
            </li>
    </Wrapper>      
  )

};

const Wrapper = styled.div`

    li {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;                
        list-style: none;
        padding: 1rem;
    }
    
    button {
        cursor: pointer;
        margin: 0;
        padding: 0;
        background-color: rgb(82, 189, 231);
    }

    .active, li:active {
        background-color: rgb(82, 189, 231);
        border-radius: 30px;
    }

`;

export default PortList;
