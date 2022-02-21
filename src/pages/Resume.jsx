import FlipPage from 'components/UI/FlipPage'
import React from 'react'
import 'assets/Styles/Resume.scss'
import BlockResume from 'components/UI/BlockResume'
import ResumeTitle from 'components/UI/ResumeTitle'
import BlockMeasure from 'components/UI/BlockMeasure'

function Resume() {
    return (
        <FlipPage title={"Parcours."} logo={<i className="fas fa-university"></i>}>
            <div className='main-block-resume'>
                <div className='blockUp'>
                    <div className="blockLeft">
                        <div>
                            <ResumeTitle title={'EXPERIENCE'} />
                        </div>
                        <div className='resume'>
                            <BlockResume 
                                endDate={'2022'}
                                startDate={'2018'}
                                titleUp={'Forfaitiste'}
                                titleDown={'Tour opérateur Asia'}
                                content={'Je réalise des circuits sur-mesure et à la carte sur le continent asiatique et océanique. je dois prendre en considération les attentes des clients.'}
                                height='230px'
                                heightDate='255px'
                            />
                        </div>
                        <div>
                            <BlockResume 
                                endDate={'2018'}
                                startDate={'2015'}
                                titleUp={'Agent de voyages / Billettiste (plateau d\'affaires)'}
                                titleDown={'Saint Léger Voyages & Allées Venues'}
                                content={'Sociétés dans lesquelles j\'ai pû faire mon alternance, je m\'occupai de l\'achat de billets sur GDS pour une clientèle haut de gamme.'}
                                height='290px'
                                heightDate='315px'
                            />                                
                        </div>    
                        <div>
                            <BlockResume 
                                endDate={'2015'}
                                startDate={'2011'}
                                titleUp={'Chef de rang / VVT Australie'}
                                titleDown={'Elysée Lenôtre & Restaurant Australie'}
                                content={'Durant ces années j\'ai pû mettre à profit mon expérience acquise au cours de mon alternance dans la restauration dans des grandes brasseries parisiennes ainsi qu\'à l\'étranger.'}
                                height='310px'
                                heightDate='335px'
                            />                                
                        </div>
                    </div>
                    <div className="blockRight">
                        <div>
                            <ResumeTitle title={'DIPLOMES'} />
                        </div>
                        <div>
                            <BlockResume 
                                endDate={'2022'}
                                startDate={'2021'}
                                titleUp={'Développeur Web Full Stack'}
                                titleDown={'Digital Campus (Studi)'}
                                content={'Titre de niveau 5 reconnu par l\'état pour devenir développeur Web front-end / back-end.'}
                                height='200px'
                                heightDate='225px'
                            />
                        </div>  
                        <div>
                            <BlockResume 
                                endDate={'2018'}
                                startDate={'2017'}
                                titleUp={'Licence professionnelle dans la production touristique'}
                                titleDown={'Paris School of Tourism & Communication'}
                                content={'Diplômes reconnu par l\'état pour devenir chef de produits touristiques. Négociation des contrats avec les réceptifs étrangers et réalisation de circuits incluant les diverses commissions.'}
                                height='360px'
                                heightDate='385px'
                            />
                        </div>
                    </div>
                </div>
                <div className="blockDown">
                    <div className="blockDownLeft">
                        <div className='block-title'>
                            <ResumeTitle title={'FRONT-END'} />
                        </div>
                        <BlockMeasure 
                            language={'HTML5'}
                            size={'90'}
                        />
                        <BlockMeasure 
                            language={'CSS / SASS'} 
                            size={'60'}
                        />
                        <BlockMeasure 
                            language={'JAVASCRIPT'} 
                            size={'60'}
                        />
                        <BlockMeasure 
                            language={'REACT'} 
                            size={'50'}
                        />
                    </div>
                    <div className="blockDownRight">
                        <div className='block-title'>
                            <ResumeTitle title={'BACK-END'} />
                        </div>
                        <BlockMeasure 
                            language={'PHP'} 
                            size={'60'}
                        />
                        <BlockMeasure 
                            language={'MYSQL'} 
                            size={'80'}
                        />
                        <BlockMeasure 
                            language={'SYMFONY'} 
                            size={'50'}
                        />
                    </div>
                </div>
            </div>
        </FlipPage>
    )
}

export default Resume
