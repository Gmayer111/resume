import React from 'react'
import styled from 'styled-components/macro'

function ResumeTitle(props) {
    return (
        <Wrapper>
            <h2>{props.title}</h2>
        </Wrapper>
    )
}

const Wrapper = styled.div`

   

    h2 {
        position: relative;
        font-family: 'Playfair Display', serif;
        font-size: 22px;
        font-weight: 700;
        color: #ffffff;
        border-bottom: 2px solid #00a3e1;
        line-height: 1.5em;
        padding: 5px 10px;
    }

    h2::before {
        left: 0;
    }

    h2::after {
        right: 0;
    }

    h2::before, h2::after {
        position: absolute;
        content: "";
        width: 2px;
        height: 5px;
        bottom: 0;
        background-color: #00a3e1;
    }
`

export default ResumeTitle
