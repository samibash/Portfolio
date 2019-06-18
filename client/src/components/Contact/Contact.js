import React, {Component} from 'react';
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section class="section is-medium">
                    <div class="container">
                        <h1 class="title hvr-buzz-out" id="contact-title">Get in touch</h1>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div class="container is-fluid">
                            <div>
                                <h2 class="subtitle" id="contact-subtitle">
                                If you want to get in touch and talk about a project collaboration or to 
                                just say hello, you can send me an email at 
                                <a href="mailto:samibachir20@gmail.com"> samibachir20@gmail.com</a>. Or, connect
                                with me below:</h2>
                            </div>
                        </div>
                    </div>
                </section>   
                <br/>
                <br/>
                <br/>
 
                <footer>
                    <div class="content has-text-centered">
                        <div class="columns">
                            <div class="column">
                                <a class="button is-medium is-link is-rounded hvr-grow"><i class="fab fa-facebook-square"></i>Facebook</a>  
                            </div>
                            <div class="column">
                                <a class="button is-medium is-info is-rounded hvr-grow"><i class="fab fa-linkedin"></i>LinkedIn</a>
                            </div>
                            <div class="column">
                                <a class="button is-medium is-dark is-rounded hvr-grow"><i class="fab fa-github-square"></i>Github</a>
                            </div>
                            <div class="column">
                                <a class="button is-medium is-danger is-rounded hvr-grow"><i class="fab fa-instagram"></i>Instagram</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}


   
