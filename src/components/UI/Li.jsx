import React from 'react'
import styled from 'styled-components'

function Li(props) {
    return (
        <Wrapper>
                <li><span className='title'>{props.title}</span><span className='info'> : {props.info}</span></li>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    .title {
        font-family: 'Playfair Display', serif;
        font-size: 16px;
        font-weight: 700;
        text-decoration: #00a3e1 underline;
        text-decoration-thickness: 2px;
    }

    .info {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

`

export default Li
