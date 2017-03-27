import List from './oldComponent/List';

const React = require('react');
const ReactDOM = require('react-dom');

const redux = require('redux');

const defaultState = { 
    mang: [
        { id: 1, subject: 'Hoc Tap', content: 'Lam bai tap ve nha', important: false},
        { id: 2, subject: 'Hoc Tap', content: 'Nop do an cuoi khoa', important: true},
        { id: 3, subject: 'An Choi', content: 'Di choi 8/3', important: false}
    ] 
};

const reducer = (state = defaultState, action) => {

};

ReactDOM.render(
    <List />,
    document.getElementById('root')
);
