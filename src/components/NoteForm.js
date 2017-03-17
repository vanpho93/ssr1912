const React = require('react');

class NoteForm extends React.Component {
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
        <button>Add</button>
      </div>
    );
  }
}

module.exports = NoteForm;
