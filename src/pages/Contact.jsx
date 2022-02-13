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

        // const data = {
        //     fullNameRef: fullNameRef.current.value,
        //     emailRef: emailRef.current.value,
        //     commentRef: commentRef.current.value 
        // }

        //alert(JSON.stringify(data))

        // (async function() {
    
        //     const url = "http://symfony.localhost/api/contacts";
        //     const options = {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             fullName: fullNameRef,
        //             email: emailRef,
        //             comment: commentRef
        //         }),
        //         headers: {
        //             "Content-type": "application/json"
        //         }
                
        //     }
        
        //     const response = await fetch(url, options)
        //         .then(response => response.json())
        //         .then(response => {
        //             console.log(response);
        //         })
        //     // const contact = await response.json();
        //     // console.log(contact);
        // })();

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
