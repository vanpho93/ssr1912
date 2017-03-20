import React from 'react';

export default class NoteForm extends React.Component {
  add() {
    const { parent } = this.props;
    const newObj = {
        id: this.refs.txtId.value,
        subject: this.refs.txtSubject.value,
        content: this.refs.txtContent.value,
        important: true
    };
    parent.state.mang.push(newObj);
    parent.setState(parent.state);
  }
  render() {
    return (
      <div>
        <br />
        <input type="text" ref="txtId" placeholder="id" />
        <br /><br />
        <input type="text" ref="txtSubject" placeholder="subject" />
        <br /><br />
        <input type="text" ref="txtContent" placeholder="content" />
        <br /><br />
        <button onClick={this.add.bind(this)}>Add</button>
      </div>
    );
  }
}
