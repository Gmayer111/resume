import FlipPage from 'components/UI/FlipPage'
import ResumeTitle from 'components/UI/ResumeTitle'
import 'assets/Styles/Contact.scss';
import React, { useRef } from 'react'


function Contact() {

    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const commentRef = useRef(null);

    console.log(fullNameRef);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://symfony.localhost/api/contacts", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                fullname: fullNameRef.current.value,
                email: emailRef.current.value,
                comment: commentRef.current.value
            })
        })
        .then(reponse => Response.json())
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })

    }

    return (
        <FlipPage  title={"Contact"} logo={<i className="fas fa-envelope"></i>}>
            <div className="main-block-contact">
                <div className='blockUp'>
                    <ResumeTitle title={'DIPLOMES'} />
                </div>

                <div className='blockDown'>
                    
                    <form onSubmit={handleSubmit}>
                        <div className='formUp'>
                            <span className='fields-text'>
                                <input type="text" style={{height: '40px'}} ref={fullNameRef} placeholder=" "/>          
                                <label className='labelName'>Votre nom</label>  
                            </span>
                            <span className='fields-text'>
                                <input type="email" style={{height: '40px'}} ref={emailRef} placeholder=" "/>          
                                <label className='labelName'>Votre nom</label>  
                            </span>
                        </div>
                        <div className='formDown'>
                            <span style={{width: '100%'}}>
                                <textarea type="text" ref={commentRef} placeholder=" " name="" id="" rows="10"></textarea>
                                <label className='labelName'>Votre nom</label>  
                            </span>
                            <button type="submit" >
                                <div>ENVOYER</div>
                            </button>
                       </div>
                    </form>

                </div>   

            </div>

            
        </FlipPage>
    )
}

export default Contact
