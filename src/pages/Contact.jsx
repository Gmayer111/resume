import FlipPage from 'components/UI/FlipPage'
import ResumeTitle from 'components/UI/ResumeTitle'
import 'assets/Styles/Contact.scss';
import React from 'react'


class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = [{valueName: ''}, {valueMail: ''}, {valueComment: ''}, {visibility: ''}];
        this.fullNameRef = React.createRef(null);
        this.emailRef = React.createRef(null);
        this.commentRef = React.createRef(null);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = (event) => {

        
      const BASE_URL = process.env.REACT_APP_BASE_URL;
        
        fetch(BASE_URL, {
            "mode": "cors",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                fullname: this.fullNameRef.current.value,
                email: this.emailRef.current.value,
                comment: this.commentRef.current.value
            })
        })
        .then(response => response.json())
        .then(response => {
            this.setState({valueName: ''});
            this.setState({valueMail: ''});
            this.setState({valueComment: ''});
            this.setState({visibility: 'visible'});
            setTimeout(() => {
                this.setState({visibility: 'hidden'})
            }, 3000)
        })
        .catch(err => {
            console.log(err);
        })
        
        event.preventDefault();
    }
    
    handleChange(e) {
        this.setState({valueName: e.target.value})
    }

    handleChangeMail(e) {
        this.setState({valueMail: e.target.value})
    }

    handleChangeComment(e) {
        this.setState({valueComment: e.target.value})
    }

    render() {
        const visibility = this.state.visibility;
        return (
            <FlipPage  title={"Contact"} logo={<i className="fas fa-envelope"></i>}>
                <div className="main-block-contact">
                    <div className='blockUp'>
                        <ResumeTitle title={'FORMULAIRE DE CONTACT'} />
                    </div>

                    <div className='blockDown'>
                        
                        <form onSubmit={this.handleSubmit}>
                            <div className='formUp'>
                                <span className='fields-text'>
                                    <input 
                                        type="text" 
                                        style={{height: '40px'}} 
                                        ref={this.fullNameRef} 
                                        placeholder=" " 
                                        required 
                                        pattern="^\s*[a-zA-Z,\s]+\s*$"
                                        value={this.state.valueName}
                                        onChange={this.handleChange}
                                    />          
                                    <label className='labelName'>Votre nom</label>  
                                </span>
                                <span className='fields-text'>
                                    <input 
                                        type="email" 
                                        style={{height: '40px'}} 
                                        ref={this.emailRef} 
                                        placeholder=" " 
                                        required 
                                        pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                                        value={this.state.valueMail}
                                        onChange={this.handleChangeMail}

                                    />          
                                    <label className='labelName'>Votre email</label>  
                                </span>
                            </div>
                            <div className={`formCenter ${visibility ? ' formMove' : null}`} style={{visibility}}>
                                <p>Formulaire envoyé !</p>
                            </div>
                            <div className='formDown'>
                                <span style={{width: '100%'}}>
                                    <textarea 
                                        type="text" 
                                        ref={this.commentRef} 
                                        placeholder=" " 
                                        name="" 
                                        rows="10"
                                        required
                                        pattern="^\s*[a-zA-Z,\s]+\s*$"
                                        value={this.state.valueComment}
                                        onChange={this.handleChangeComment}
                                    ></textarea>
                                    <label className='labelName'>Votre commentaire</label>  
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

}

export default Contact
