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
            console.log(text);

            if (text === 'textFront') {
                domNodeBack.style.display = 'none'
                domNodeFront.style.display = 'inline-block'
            } else {
                domNodeFront.style.display = 'none'
                domNodeBack.style.display = 'inline-block'
            }
        }

        setInterval(flashChangeText, 4000)

    }, [])


    return (
        <div className="imgContainer">
            <div className="blockTitle">
                <h1>
                    <span className="firstName">GAEL</span>
                    <span className="lastName"> MAYER</span>
                </h1>
                <p>
                    <span>Développeur Web </span>
                    <span className='textAnim'>
                        <span className='textAnim textFront' ref={front}>Front-end</span>
                        <span className='textAnim textBack' ref={back}>Back-end</span>                        
                    </span>

                </p>
            </div>
        </div>

    )
}

