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
                                content={'Réalisation de circuits sur-mesure et à la carte sur le continent asiatique et océanique.'}
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
                                content={'Durant ces années j\'ai pû mettre à profit mon expérience acquise dans des grandes brasseries parisiennes ainsi qu\'à l\'étranger.'}
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
                                titleUp={`Graduate Développeur web full stack (BAC +2)`}
                                titleDown={'Digital Campus (Studi)'}
                                content={'Titre RNCP de niveau 5 reconnu par l\'état.'}
                                height='200px'
                                heightDate='225px'
                            />
                        </div>  
                        <div>
                            <BlockResume 
                                endDate={'2018'}
                                startDate={'2017'}
                                titleUp={'Licence professionnelle Chef de projet touristique'}
                                titleDown={'Paris School of Tourism & Communication'}
                                content={'Diplômes reconnu par l\'état.'}
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
                            language={'Javascript - ECMAScript 6'} 
                            size={'60'}
                        />
                        <BlockMeasure 
                            language={'ReactJS'} 
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
                            language={'MySQL'} 
                            size={'80'}
                        />
                        <BlockMeasure 
                            language={'Symfony'} 
                            size={'50'}
                        />
                    </div>
                </div>
            </div>
        </FlipPage>
    )
}

export default Resume
