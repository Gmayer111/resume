import React from "react"
import "assets/Styles/About.scss"

const About = () => {

    return (
        <div className="aboutContainer">
            <div className="titleContainer">
                <h1>A propos de moi.</h1>
                <div className="logo">
                    <i className="fas fa-user"></i>
                </div>
            </div>

            <div className="describeContainer">
                <div className="leftContainer">
                    <h2>Développeur Web Front-end & Back-end</h2>
                    <p>
                    Lakes where Dragonair live are filled with offerings from people, because they 
                    believe this Pokémon is able to control the weather.Swellow is very conscientious 
                    about the upkeep of its glossy wings. Once two Swellow are gathered, they diligently 
                    take care of cleaning each other’s wings.
                    <br />
                    <br />
                    <br />
                    
                    There was an era when it was overfished due to the rumor that having one of its heart-shaped scales 
                    would enable you to find a sweetheart.Through Primal Reversion and with nature’s full power, 
                    it will take back its true form.
                    </p>
                </div>
            </div>

        </div>
    )
}



export default About
