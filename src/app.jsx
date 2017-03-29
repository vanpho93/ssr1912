import { Provider } from 'react-redux';
import List from './oldComponent/List';
import TopBar from './oldComponent/TopBar';
import store from './redux/store';

const React = require('react');
const ReactDOM = require('react-dom');


require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
jQuery(document).ready(() => $(document).foundation());


ReactDOM.render(
    <Provider store={store}>
        <div>
            <TopBar />
            <List />
        </div>
    </Provider>,
    document.getElementById('root')
);
