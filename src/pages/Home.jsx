import React, { useEffect, useRef } from 'react'
import 'assets/Styles/Home.scss'

export default function Home() {
    
    const front = useRef();
    const back = useRef();

    useEffect(() => {

        let words = ['textFront', 'textBack'];
        let i = 0;

        function changeText() {
            i = (i + 1) % words.length;
            return words[i]
        }

        const domNodeFront = front.current;
        const domNodeBack = back.current;

        function flashChangeText() {

            let text = changeText(); 

            if (text === 'textFront') {
                domNodeBack.style.display = 'none'
                domNodeFront.style.display = 'inline-block'
                domNodeFront.style.animation = 'moveBorder 1.5s ease-in infinite alternate'
            } else {
                domNodeFront.style.display = 'none'
                domNodeBack.style.display = 'inline-block'
                domNodeBack.style.animation = 'moveBorder 1.5s ease-in infinite alternate'
            }
        }

        setInterval(flashChangeText, 3000)

    }, [])


    return (
        <div className="imgContainer">
            <div className="blockTitle">
                <h1>
                    <span className="firstName">GAEL</span>
                    <span className="lastName"> MAYER</span>
                </h1>
                <p>
                    <span className='title'>Développeur Web </span>
                    <span className='textAnim'>
                        <b className='textAnim textFront' ref={front}>Front-end</b>
                        <b className='textAnim textBack' ref={back}>Back-end</b>                        
                    </span>

                </p>
            </div>
        </div>

    )
}

