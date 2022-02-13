import React from 'react';
import styled from 'styled-components/macro';

function PortList(props) {

  return (
    <Wrapper>
            <div className='btn' onClick={props.onCLick}>
                {props.listName}
            </div>
    </Wrapper>      
  )

};

const Wrapper = styled.li`

        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;                
        list-style: none;
        padding: 1rem;
    
    
    .btn {
        cursor: pointer;
        margin: 0;
        padding: 0;
        //background-color: rgb(82, 189, 231);
    }
    .active {
        background-color: rgb(82, 189, 231);
        border-radius: 30px;
    }
`;

export default PortList;

