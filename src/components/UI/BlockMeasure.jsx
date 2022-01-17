import React from 'react'
import styled from 'styled-components/macro'

function BlockMeasure(props) {

    const divStyle = {
        width: `${props.size}%`
    }

    return (
        <Wrapper>
            <span>{props.language}</span>
            <div className='measure'>
                <div className='mSize' style={divStyle}></div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    span {
        font-family: 'Playfair Display', serif;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
        position: relative;
        bottom: 1rem;
    }

    .measure {
        width: 85%;
        height: 13px;
        background-color: #404144;
        position: relative;
        bottom: 3px
    }

    .mSize {
        height: 100%;
        width: 100%;
        background-color: red;
    }

`;

export default BlockMeasure
