import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstName: 'FirstName',
      lastName: 'LastName',
      email: 'me@mail.com',
      phone: '07696969696',
    };
  }

  render() {
    const { firstName, lastName, email, phone } = this.state;

    return (
      <div>
        <h1>{firstName} {lastName}</h1>
        <button>edit</button>
        <div>email: {email}</div>
        <div>phone: {phone}</div>
      </div>
    );
  }
}

export default Info;
