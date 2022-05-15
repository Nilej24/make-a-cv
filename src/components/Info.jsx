import React from 'react';

import InfoForm from './InfoForm';
import EditToggleBtn from './EditToggleBtn';

class Info extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstName: 'FirstName',
      lastName: 'LastName',
      email: 'me@mail.com',
      phone: '07696969696',
      description: 'some info about me',
    };
  }

  handleFormSubmit = (ev) => {
    ev.preventDefault();

    const firstName = document.querySelector('#fname-edit').value;
    const lastName = document.querySelector('#lname-edit').value;
    const email = document.querySelector('#email-edit').value;
    const phone = document.querySelector('#phone-edit').value;
    const description = document.querySelector('#info-description-edit').value;

    this.setState({
      firstName, lastName, email, phone, description
    });
  }

  render() {
    const { firstName, lastName, email, phone, description } = this.state;

    return (
      <div className="Info">
        <EditToggleBtn />
        <InfoForm data={this.state} handleSubmit={this.handleFormSubmit} />
        <h1>{firstName} {lastName}</h1>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
        <p>{description}</p>
      </div>
    );
  }
}

export default Info;
