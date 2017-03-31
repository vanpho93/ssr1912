import React from 'react';
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';
import TopBar from '../oldComponent/TopBar';

let isAuthenticated = true;

const Home = () => <h2>Home Component</h2>;
const Public = () => <h2>Public Component</h2>;
const Private = () => <h2>Private Component</h2>;

const SimpleAuth = () => (
    <HashRouter>
        <div>
            <TopBar />
            <Route exact path='/' component={Home} />
            <Route path='/public' component={Public} />
            <Route 
                path='/private' 
                render={() => 
                    (isAuthenticated ? <Private /> : <Redirect to='/' />
                )} 
            />
        </div>
    </HashRouter>
);

export default SimpleAuth;
