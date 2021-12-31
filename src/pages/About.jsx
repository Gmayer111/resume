import Layout from 'components/UI/Layout'
import React, { useState } from 'react'
import 'assets/Styles/Layout.scss'
import 'assets/Styles/Modules.scss'
import { useSpring, a} from 'react-spring';


const About = () => {

    const [flipped, setFlipped] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(3000px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 3, tension: 400, friction: 200 },
    })


    return (
        <Layout>
            <main class='wrapper'
            onClick={() => setFlipped(state => !state)}>
                <a.div 
                    class='c back'
                    style={{ opacity: opacity.to(o => 1 - o), transform }}
                />
                <a.div 
                    class='c front'
                    style={{ 
                        opacity, 
                        transform,
                        rotateY: `180deg`,
                 }}
                />
            </main>
        </Layout>
    )
}



export default About
