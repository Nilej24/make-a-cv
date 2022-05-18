import React, { useRef } from 'react';

function InfoForm(props) {
  const { firstName, lastName, email, phone, description } = props.data;

  const { fnInput, lnInput, emailInput, phoneInput, descInput } = props.refs;

  return (
    <form className="hidden" onSubmit={props.handleSubmit}>
      <div>
        <label>
          first name
          <input ref={fnInput} type="text" defaultValue={firstName} />
        </label>
      </div>
      <div>
        <label>
          last name
          <input ref={lnInput} type="text" defaultValue={lastName} />
        </label>
      </div>
      <div>
        <label>
          email
          <input ref={emailInput} type="text" defaultValue={email} />
        </label>
      </div>
      <div>
        <label>
          phone
          <input ref={phoneInput} type="number" defaultValue={phone} />
        </label>
      </div>
      <div>
        <label>
          description
          <textarea ref={descInput} cols="30" rows="10" defaultValue={description}></textarea>
        </label>
      </div>
      <button type="submit">save</button>
    </form>
  );
}

export default InfoForm;
