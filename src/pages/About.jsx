import React from "react"
import "assets/Styles/About.scss"
import Li from "components/UI/Li"
import FlipPage from "components/UI/FlipPage"

const About = () => {

    return (
        <FlipPage title={"A propos de moi"} logo={<i className="fas fa-user"></i>}>
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
                    There was an era when it was overfished due to the rumor that having one of its heart-shaped scales 
                    would enable you to find a sweetheart.Through Primal Reversion and with nature’s full power, 
                    it will take back its true form.
                    </p>
                </div>
                <div className="rightContainer">
                    <h2>Informations personnelles</h2>

                    <ul>
                    <div className="blockInfo">
                        <Li title={"Nom"} info={"Gaël Mayer"} />
                        <Li title={"Age"} info={"33 ans"} />
                        <Li title={"Adresse"} info={"4 rue Dunois, 75013 Paris"} />
                        <Li title={"Mail"} info={"gaelmayer@yahoo.fr"} />
                    </div>                            

                    </ul>
            
                </div>
            </div>                    
        </FlipPage>

    )
}



export default About
