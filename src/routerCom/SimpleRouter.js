import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

const Home = () => (
    <div>Home component</div>
);

const About = () => (
    <div>About component</div>
);

const Contact = (props) => (
    <div>Contact component {props.name}</div>
);

const SimpleRouter = () => (
    <HashRouter>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' render={() => <Contact name='Pho' />} />
        </div>
    </HashRouter>
);

export default SimpleRouter;
