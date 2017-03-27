import { connect } from 'react-redux';

import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';


class List extends React.Component {
    render() {
        const arrayEle = this.props.mang.map((e, i) => (
            <Note
                index={e.id}
                subject={e.subject}
                content={e.content}
                important={e.important}
                key={e.id}
                parent={this}
            />
        ));
        return (
            <div>
                { arrayEle }
                <NoteForm parent={this} />
            </div>
        );
    }
}

module.exports = connect(state => ({ mang: state.mang }))(List);

/**
    1. Cai dat stage-0
    2. Update file .babelrc
    3. Viet action
    4. Connect trong file Node
    4. Check lai index - id trong file List
*/
