import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mang: [
            { id: 1, subject: 'Hoc Tap', content: 'Lam bai tap ve nha', important: false},
            { id: 2, subject: 'Hoc Tap', content: 'Nop do an cuoi khoa', important: true},
            { id: 3, subject: 'An Choi', content: 'Di choi 8/3', important: false}
        ] };
    }

    render() {
        const arrayEle = this.state.mang.map((e, i) => (
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
