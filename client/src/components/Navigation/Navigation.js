import React, {Component} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import Home from '../Home/Home';
import Works from '../Works/Works';
import Contact from '../Contact/Contact';


export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Menu>
                    <Link className="menu-item" to={'/'}><p>Home</p></Link>
                    <br/>
                    <Link className="menu-item" to={'/works'}><p>Works</p></Link>
                    <br/>
                    <Link className="menu-item" to={'/contact'}><p>Contact</p></Link>
                </Menu>

                <Switch>
                    <Route path='/' exact component={ Home }/>
                    <Route path='/works' exact component={ Works } />
                    <Route path='/contact' exact component={ Contact } />
                </Switch>
            </div>
        )
    }
}