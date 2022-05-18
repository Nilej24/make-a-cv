import React, {useState, useRef} from 'react';

import InfoForm from './InfoForm';
import EditToggleBtn from './EditToggleBtn';

function Info(props) {
  const [state, setState] = useState({
    firstName: 'FirstName',
    lastName: 'LastName',
    email: 'me@mail.com',
    phone: '07696969696',
    description: 'some info about me',
  });

  const fnInput = useRef();
  const lnInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const descInput = useRef();

  const refs = {
    fnInput, lnInput, emailInput, phoneInput, descInput
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    setState({
      firstName: fnInput.current.value,
      lastName: lnInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
      description: descInput.current.value,
    });
  }

  const { firstName, lastName, email, phone, description } = state;

  return (
    <div className="Info">
      <EditToggleBtn />
      <InfoForm data={state} handleSubmit={handleFormSubmit} refs={refs} />
      <h1>{firstName} {lastName}</h1>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <p>{description}</p>
    </div>
  );
}

export default Info;
