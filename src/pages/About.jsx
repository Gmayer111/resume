import React from "react"
import "assets/Styles/About.scss"
import Li from "components/UI/Li"
import CV from "assets/Images/nv-CV.pdf"
import FlipPage from "components/UI/FlipPage"
import Button from "components/UI/Button"

function About() {

    return (
        <>

            <FlipPage title={"A propos."} logo={<i className="fas fa-user"></i>}>

                <div className="describeContainer">
                    <div className="leftContainer">
                        <h2>Développeur Web Front-end & Back-end</h2>
                        <p>
                        Fort d’une expérience dans le milieu de la production touristique depuis 
                        6 ans, j’ai décidé de me tourner vers ma passion initiale qui est l’informatique.
                        Je saurais mettre à profit mon savoir-faire dans l’écoute des attentes du client 
                        ainsi que ma passion pour le développement Web.
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
                                <a href={CV}><Button title={'Télécharger CV'}/></a>
                            </div>                            
                        </ul>
                    </div>
                </div>                    
            </FlipPage>            
        </>


    )
}



export default About
