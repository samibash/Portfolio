import React, {Component} from 'react';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="main-container">
                <div class="container-home">
                    <h1 id="home-title">
                        <em>Hi, my name's Sami</em>                        
                    </h1>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src="https://i.imgur.com/D53MyRT.png?1" alt="image of me" />
                            </figure>
                        </div>
                        <br/>
                        <div className="card-content">
                            <div className="content-home">
                                <h4>i'm a <strong>junior software developer</strong> and an 
                                    <strong> Army veteran</strong>, based in the NYC area. 
                                    <br/>
                                    You can often catch me: 
                                </h4>
                                    <ul>
                                        <li>drumming/creating music, and</li>
                                        <li>hanging out, and eating with family and friends</li>
                                    </ul>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}