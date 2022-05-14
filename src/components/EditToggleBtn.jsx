import React from 'react';

class EditToggleBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  handleClick = (ev) => {
    const adjForm = ev.target.nextElementSibling;

    this.setState({
      editing: !this.state.editing,
    });

    adjForm.classList.toggle('hidden');
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        {this.state.editing ? 'done' : 'edit'}
      </button>
    );
  }
}

export default EditToggleBtn;
