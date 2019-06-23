import React, {Component} from 'react';
import './Works.css'

export default class Works extends Component {
    render() {
        return (
            <div>
                <section className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <div>
                                <h1 className="title-of-page hvr-hang">
                                    Projects                           
                                </h1>
                                <br/>
                                <br/>
                            </div>
                            <br/>
                            <div className="tile is-ancestor">
                                <div id="box1">
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">Interstellar Invasion</p>
                                            <p>This is an in-browser game based on the popular arcade game, 
                                            Space Invaders. The objective of this game is to eliminate all of 
                                            the alien invaders, which are in a group right above you. You can attack 
                                            the aliens by pressing the space bar, and a projectile will shoot upwards 
                                            into them.</p>
                                            <br/>
                                            <div className="hvr-grow">
                                                <a href="http://interstellar-invasion.surge.sh/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/suE8bQ4.png" alt="interstellar"/></a>
                                            </div>
                                            <br/>
                                            <br/>
                                            <a href="https://github.com/samibash/Interstellar-Invasion" target="_blank" rel="noopener noreferrer" className="button is-medium is-dark is-rounded hvr-grow"><i className="fab fa-github-square"></i>Github</a>
                                            <a href="http://interstellar-invasion.surge.sh/" className="button is-medium is-success is-rounded hvr-grow" target="_blank" rel="noopener noreferrer">Site</a>
                                        </article>
                                    </div>
                                </div>
                                <div id="box2">
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">Who's Playing?</p>
                                            <p>This is a React application that 
                                            takes in the user's zipcode (either the zipcode where the user resides, 
                                            or a zipcode for a place where the user would like to go to), then 
                                            return all of the live shows, sporting events, and performances that are 
                                            happening in an area near the zipcode that they inputted.</p>
                                            <br/>
                                            <div className="hvr-grow">
                                                <a href="https://whos-play.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/mIXd7dB.png" alt="Whos playing"/></a>
                                            </div>
                                            <br/>
                                            <br/>
                                            <a href="https://github.com/samibash/Who-s-Playing-" target="_blank" rel="noopener noreferrer" className="button is-medium is-dark is-rounded hvr-grow"><i className="fab fa-github-square"></i>Github</a>
                                            <a href="https://whos-play.herokuapp.com/" className="button is-medium is-success is-rounded hvr-grow" target="_blank" rel="noopener noreferrer">Site</a>
                                        </article>
                                    </div>
                                </div>
                                <div id="box3">
                                    <div className="tile is-parent">
                                        <article className="tile is-child box">
                                            <p className="title">Leisurely Slacking</p>
                                            <p>This application's purpose is to suggest the best places to travel to in 
                                            the world for every month of the calendar year. 
                                            We also suggest the best bars/pubs to visit while you're there as well. 
                                            Each desired month will feature an image of the destination; description; 
                                            and hotel information with a link.</p>
                                            <br/>
                                            <div className="hvr-grow">
                                                <a href="http://fh-slackers.surge.sh/" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/RzB0Eef.png" alt="Leisurely slacking"/></a>
                                            </div>
                                            <br/>
                                            <br/>
                                            <a href="https://github.com/samibash/Leisurely-Slacking" target="_blank" rel="noopener noreferrer" className="button is-medium is-dark is-rounded hvr-grow"><i className="fab fa-github-square"></i>Github</a>
                                            <a href="http://fh-slackers.surge.sh/" className="button is-medium is-success is-rounded hvr-grow" target="_blank" rel="noopener noreferrer">Site</a>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}