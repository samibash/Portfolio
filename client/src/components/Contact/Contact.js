import React, {Component} from 'react';
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className="section is-medium">
                    <br/>
                    <div className="container">
                        <h1 className="title hvr-buzz-out" id="contact-title">Get in touch</h1>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="container is-fluid">
                            <div>
                                <h2 className="subtitle" id="contact-subtitle">
                                If you want to get in touch and talk about a project collaboration or to 
                                just say hello, you can send me an email at 
                                <a href="mailto:samibachir20@gmail.com"> samibachir20@gmail.com</a>. Or, connect
                                with me below:</h2>
                            </div>
                        </div>
                    </div>
                </section>  

                {/* <div className="container is-fluid">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                        <input className="input" type="text" placeholder="Text input" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">
                        <input className="input" type="email" placeholder="Email input" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                        </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                        <textarea className="textarea" placeholder="Textarea" defaultValue={""} />
                        </div>
                    </div>
                    
                    <div className="field is-grouped">
                        <div className="control">
                        <button className="button is-warning">Submit</button>
                        </div>
                    </div>
                </div> */}

                <br/>
                <br/>

                <footer>
                    <div className="content has-text-centered">
                        <div className="columns">
                            <div className="column">
                                <a href="https://www.facebook.com/sami.bachir.585" className="button is-medium is-link is-rounded hvr-grow"><i className="fab fa-facebook-square"></i>Facebook</a>  
                            </div>
                            <div className="column">
                                <a href="https://www.linkedin.com/in/sami-bachir/" className="button is-medium is-info is-rounded hvr-grow"><i className="fab fa-linkedin"></i>LinkedIn</a>
                            </div>
                            <div className="column">
                                <a href="https://github.com/samibash" className="button is-medium is-dark is-rounded hvr-grow"><i className="fab fa-github-square"></i>Github</a>
                            </div>
                            <div className="column">
                                <a href="https://www.instagram.com/samiblam/" className="button is-medium is-danger is-rounded hvr-grow"><i className="fab fa-instagram"></i>Instagram</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}


   
