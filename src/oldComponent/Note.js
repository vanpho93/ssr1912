import React from 'react';
import { connect } from 'react-redux';

const getClass = isImportant => (isImportant ? 'red' : 'green');

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isUpdating: false };
    }
    save() {
        const newContent = this.refs.txtContent.value;
        const { parent, index } = this.props;
        parent.state.mang[index].content = newContent;
        parent.setState(parent.state);

        this.state.isUpdating = false;
        this.setState(this.state);
    }
    cancel() {
        this.state.isUpdating = false;
        this.setState(this.state);
    }
    update() {
        this.state.isUpdating = true;
        this.setState(this.state);
    }
    remove() {
      const { index, dispatch } = this.props;
      dispatch({ type: 'REMOVE_ITEM', index });
    }
    render() {
        const { subject, content, important } = this.props;
        const input = (
            <input 
                type="text" 
                defaultValue={content} 
                placeholder="Enter new content" 
                ref="txtContent" 
            />);
        const xhtml = this.state.isUpdating ? input : <p>{content}</p>;

        const buttonUpdate = (
            <div>
                <button onClick={this.cancel.bind(this)}>Huỷ</button>
                <button onClick={this.save.bind(this)}>Lưu</button>
            </div>
        );

        const buttonNotUpdate = (
            <div>
                <button onClick={this.remove.bind(this)}>Xoá</button>
                <button onClick={this.update.bind(this)}>Sửa</button>
            </div>
        );

        const htmlControls = this.state.isUpdating ? buttonUpdate : buttonNotUpdate;

        return (
            <div>
                <h3 className={getClass(important)}>{subject}</h3>
                { xhtml }
                <hr />
                { htmlControls }
            </div>
        );
    }
}

module.exports = connect()(Note);
