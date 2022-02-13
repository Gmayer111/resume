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
                                content={'In many places, there are folktales of stardust falling into the ocean and becoming Staryu.Its fangs are so sharp, if it bites you in the dark.'}
                            />
                        </div>
                        <div>
                            <BlockResume 
                                endDate={'2022'}
                                startDate={'2018'}
                                titleUp={'Forfaitiste'}
                                titleDown={'Tour opérateur Asia'}
                                content={'In many places, there are folktales of stardust falling into the ocean and becoming Staryu.Its fangs are so sharp, if it bites you in the dark.'}
                            />                                
                        </div>    
                        <div>
                            <BlockResume 
                                endDate={'2022'}
                                startDate={'2018'}
                                titleUp={'Forfaitiste'}
                                titleDown={'Tour opérateur Asia'}
                                content={'In many places, there are folktales of stardust falling into the ocean and becoming Staryu.Its fangs are so sharp, if it bites you in the dark.'}
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
                                startDate={'2018'}
                                titleUp={'Forfaitiste'}
                                titleDown={'Tour opérateur Asia'}
                                content={'In many places, there are folktales of stardust falling into the ocean and becoming Staryu.Its fangs are so sharp, if it bites you in the dark.'}
                            />
                        </div>
                        <div>
                            <BlockResume 
                                endDate={'2022'}
                                startDate={'2018'}
                                titleUp={'Forfaitiste'}
                                titleDown={'Tour opérateur Asia'}
                                content={'In many places, there are folktales of stardust falling into the ocean and becoming Staryu.Its fangs are so sharp, if it bites you in the dark.'}
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
                            size={'80'}
                        />
                        <BlockMeasure 
                            language={'CSS / SASS'} 
                            size={'70'}
                        />
                        <BlockMeasure 
                            language={'JAVASCRIPT'} 
                            size={'90'}
                        />
                        <BlockMeasure 
                            language={'REACT'} 
                            size={'70'}
                        />
                    </div>
                    <div className="blockDownRight">
                        <div className='block-title'>
                            <ResumeTitle title={'BACK-END'} />
                        </div>
                        <BlockMeasure 
                            language={'PHP'} 
                            size={'70'}
                        />
                        <BlockMeasure 
                            language={'MYSQL'} 
                            size={'70'}
                        />
                        <BlockMeasure 
                            language={'SYMFONY'} 
                            size={'70'}
                        />
                    </div>
                </div>
            </div>
        </FlipPage>
    )
}

export default Resume
