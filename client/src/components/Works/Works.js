import React, {Component} from 'react';
import './Works.css'

export default class Works extends Component {
    render() {
        return (
            <div>
                <section class="hero is-fullheight">
                    <div class="hero-body">
                        <div class="container">
                            <div>
                                <h1 className="title-of-page hvr-buzz-out">
                                    Projects                           
                                </h1>
                                <br/>
                                <p class="subtitle">
                                    here's a list of projects that i've done so far
                                </p>
                            </div>
                            <br/>
                            <div class="tile is-ancestor">
                                <div className="box1">
                                <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">Interstellar Invasion</p>
                                    <p class="subtitle">(project one)</p>
                                    <a href="http://interstellar-invasion.surge.sh/"><img src="https://i.imgur.com/suE8bQ4.png" alt="interstellar image"/></a>
                                </article>
                                </div>
                                </div>
                                <div className="box2">
                                <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">Who's Playing?</p>
                                    <p class="subtitle">(project two)</p>
                                    <a href="https://whos-play.herokuapp.com/"><img src="https://i.imgur.com/mIXd7dB.png" alt="Whos playing image"/></a>
                                </article>
                                </div>
                                </div>
                                <div className="box3">
                                <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">Leisurely Slacking</p>
                                    <p class="subtitle">(project three)</p>
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