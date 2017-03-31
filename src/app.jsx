import { Provider } from 'react-redux';
import List from 'List';
import TopBar from 'TopBar';
import store from './redux/store';
import SimpleAuth from './routerCom/SimpleAuth';

const React = require('react');
const ReactDOM = require('react-dom');


require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
jQuery(document).ready(() => $(document).foundation());

class ListName extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mang: []};
    }
    render() {
        return (
            <div>
            {this.state.mang.map(e => <p key={e}>{e}</p>)}
            </div>
        );
    }

    componentDidMount() {
        fetch('/getlist')
        .then(res => res.json())
        .then(result => this.setState({ mang: result }));
    }
}


ReactDOM.render(
    <ListName />,
    document.getElementById('root')
);

//khoaphamtraining@gmail.com
//github
//heroku
//video demo
//NodeJS 1912 + ten + ten de tai