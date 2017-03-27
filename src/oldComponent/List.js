import { connect } from 'react-redux';

import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';


class List extends React.Component {
    render() {
        const arrayEle = this.props.mang.map((e, i) => (
            <Note
                index={i}
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
