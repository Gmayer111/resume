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
        text-decoration: underline;
    }

    .info {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

`

export default Li
