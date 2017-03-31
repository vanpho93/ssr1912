import React from 'react';

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
    <div>
        <Home />
        <About />
        <Contact name='Pho' />
    </div>
);

export default SimpleRouter;
