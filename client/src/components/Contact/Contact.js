import React, {Component} from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1>
                    Get in touch
                </h1>
                <p>
                    If you want to get in touch and talk about a project collaboration or to 
                    just say hello, you can send me an email at <a href="mailto:samibachir20@gmail.com">samibachir20@gmail.com</a>
                </p>
                <footer>
                    <h1>
                        ~Socialize~
                    </h1>

                    <div class="columns">
                        <div class="column">
                            <a class="button is-link">Facebook</a>  
                        </div>
                        <div class="column">
                            <a class="button is-info">LinkedIn</a>
                        </div>
                        <div class="column">
                            <a class="button is-dark">Github</a>
                        </div>
                        <div class="column">
                            <a class="button is-danger">Instagram</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}