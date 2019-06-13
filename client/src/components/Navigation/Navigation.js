import React, {Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Works from '../Works/Works';
import Contact from '../Contact/Contact';


export default class Navigation extends Component {
    render() {
        return (
            <div>
                <aside class="menu">
                    <p class="menu-label">
                        Sami Bachir
                    </p>
                    <ul class="menu-list">
                        <Link className="navbar-item" to={'/'}><p>Home</p></Link>
                        <Link className="navbar-item" to={'/works'}><p>Works</p></Link>
                        <Link className="navbar-item" to={'/contact'}><p>Contact</p></Link>
                    </ul>
                </aside>






                <Switch>
                    <Route path='/' exact component={ Home }/>
                    <Route path='/works' exact component={ Works } />
                    <Route path='/contact' exact component={ Contact } />
                </Switch>
            </div>
        )
    }
}