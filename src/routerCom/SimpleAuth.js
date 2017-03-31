import React from 'react';
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';

let isAuthenticated = true;

const Home = () => <h2>Home Component</h2>;
const Public = () => <h2>Public Component</h2>;
const Private = () => <h2>Private Component</h2>;

const SimpleAuth = () => (
    <HashRouter>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/public'>Public</Link></li>
                <li><Link to='/private'>Private</Link></li>
            </ul>
            <Route exact path='/' component={Home} />
            <Route path='/public' component={Public} />
            <Route 
                path='/private' 
                render={() => (isAuthenticated ? <Private /> : <Redirect to={{ pathname: '/' }} />)} 
            />
        </div>
    </HashRouter>
);

export default SimpleAuth;
