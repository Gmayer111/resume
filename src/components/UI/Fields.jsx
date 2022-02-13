import React from 'react';
import styled from 'styled-components/macro';

export default function Fields(props) {

    const divStyle = {
        width: `${props.width}%`,
        height: `${props.height}px`
    }
  
    return (
        <Wrapper>
            <input type="text"  style={divStyle}/>          
            <label className='labelName'>{props.label}</label>       
        </Wrapper>
    );
};

const Wrapper = styled.div`


    position: relative;
    width: 100%;
    margin: 2rem;
    //overflow: hidden;


    input[type=text] {
        position: relative;
        z-index: 1;
        padding: 0.3rem;
        background-color: rgba(255, 255, 255, 0); 
        border: 2px solid #999999;
    }

    input[type=text]:focus {
        outline: none;
        border-color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #ffffff;  
        z-index: 2;
    }
    
    input[type=text]:focus ~ .labelName {
        outline: none;
        border-color: #ffffff;
        animation: moveLabelUp 0.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        
    }
    
    .labelName {
        z-index: 0;
        pointer-events:all;
        position: absolute;
        top: 0.8rem;
        left: 0.5rem;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #ffffff;  
        opacity: 1;
    }


    @keyframes moveLabelUp {
        from {
            transform: translateY(0);
            font-size: 16px;
        }

        to {
            transform: translateY(-37px);
            font-size: 14px;
        }
    }   
`;

