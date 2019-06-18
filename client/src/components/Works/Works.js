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
                                <h1 className="title-of-page hvr-buzz-out">
                                    Projects                           
                                </h1>
                                <br/>
                                <p className="subtitle">
                                    here's a list of projects that i've done so far
                                </p>
                                <br/>
                            </div>
                            <br/>
                            <div className="tile is-ancestor">
                                <div id="box1" className="hvr-grow">
                                <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title">Interstellar Invasion</p>
                                    <p className="subtitle">(project one)</p>
                                    <a href="http://interstellar-invasion.surge.sh/"><img src="https://i.imgur.com/suE8bQ4.png" alt="interstellar image"/></a>
                                </article>
                                </div>
                                </div>
                                <div id="box2" className="hvr-grow">
                                <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title">Who's Playing?</p>
                                    <p className="subtitle">(project two)</p>
                                    <a href="https://whos-play.herokuapp.com/"><img src="https://i.imgur.com/mIXd7dB.png" alt="Whos playing image"/></a>
                                </article>
                                </div>
                                </div>
                                <div id="box3" className="hvr-grow">
                                <div className="tile is-parent">
                                <article className="tile is-child box">
                                    <p className="title">Leisurely Slacking</p>
                                    <p className="subtitle">(project three)</p>
                                    <a href="http://fh-slackers.surge.sh/"><img src="https://i.imgur.com/RzB0Eef.png" alt="Leisurely slacking image"/></a>
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