import { Provider } from 'react-redux';
import List from 'List';
import TopBar from 'TopBar';
import store from './redux/store';
import SimpleRouter from './routerCom/SimpleRouter';

const React = require('react');
const ReactDOM = require('react-dom');


require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
jQuery(document).ready(() => $(document).foundation());


ReactDOM.render(
    <Provider store={store}>
            <SimpleRouter />
    </Provider>,
    document.getElementById('root')
);
