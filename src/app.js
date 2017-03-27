import { Provider } from 'react-redux';
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
    if (action.type === 'REMOVE_ITEM') {
        console.log(action.index);
        return { ...state, mang: state.mang.filter(e => e.id !== action.index) }; 
    }
    return state;
};

const store = redux.createStore(reducer);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>,
    document.getElementById('root')
);
