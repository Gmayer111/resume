import React from 'react'
import styled from 'styled-components/macro'

function BlockResume(props) {
    return (
        <Wrapper>
                <li>
                    <div className='blockDate'>
                        <span>{props.endDate}</span>
                        <span>{props.startDate}</span>
                    </div>
                    <div className='lineLeft'></div>
                    <div className='block-date-mobile'>
                        <span>{props.endDate}</span>
                        <span>{props.startDate}</span>
                    </div>
                    <div className='blockText'>
                        <h3>{props.titleUp}</h3>
                        <h4>{props.titleDown}</h4>
                        <p>
                            {props.content}
                        </p>                                       
                    </div>
                </li>
           
        </Wrapper>

    )
}

const Wrapper = styled.ul`


    height: 100%;
    margin-bottom: 4rem;

    li {
        display: flex;
        justify-content: space-between;
        height: 40%;
        width: 100%;
    }


    .blockDate {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        height: 195px;
        color: #ffffff;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

    .block-date-mobile {
        display: none;
    }

    .lineLeft {
        position: relative;
        top: 12px;
        left: 0.5rem;
        width: 3px;
        height: 170px;
        background-color: #019dd9;
    }

    .lineLeft::before {
        position: absolute;
        content: "";
        top: -10px;
        left: -5px;
        width: 8px;
        height: 8px;
        border: 2px solid #019dd9;
        border-radius: 50%;
    }

    .lineLeft::after {
        position: absolute;
        content: "";
        bottom: -12px;
        left: -5px;
        width: 8px;
        height: 8px;
        border: 2px solid #019dd9;
        border-radius: 50%;
    }


    .blockText {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-around;
        height: 70%;
        margin: 3rem;
    }

    h3 {
        color: #ffffff;
        font-size: 18px;
        font-weight: 800;
        text-transform: uppercase;
    }

    h4 {
        color: #019dd9;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 12px;
        height: 100%;
        margin-top: 0.5rem;
    }

    p {
        color: #ffffff;
        line-height: 1.6rem;
        width: 100%;
        margin-top: 0.5rem;
    }

    @media screen and (max-width: 700px) {


        .lineLeft {
            height: 230px;
        }

        .blockDate {
            display: none;
        }

        .block-date-mobile {
            display: flex;
            position: relative;
            left: 1rem;
            flex-direction: column;
            justify-content: space-between;
            height: 255px;
            color: #ffffff;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: 400;
        }

        .blockText {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 60%;
            margin: 2rem;
        }
    

    }



  
`

export default BlockResume
