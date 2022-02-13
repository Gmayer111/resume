import React from 'react';
import styled from 'styled-components/macro';

export default function Button(props) {

  return (
    <Wrapper>
        <button type="submit" >
            <div>{props.title}</div>
        </button>
    </Wrapper>
  )

};

const Wrapper = styled.div`

    button {
        position: relative;
        margin-top: 2rem;
        width: 150px;
        height: 40px;
        border-radius: 0;
        background-color: rgba(255, 255, 255, 0);
        border: 2px solid rgb(0, 161, 224);
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #00a1df; 
        cursor: pointer;
        background-image: linear-gradient(rgb(0, 161, 224), rgb(0, 161, 224));
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 0% 100%;
        transition: background-size .5s, color .5s;
    }

    button:hover {
        background-size: 100% 100%;
        color: black;
    }
`;