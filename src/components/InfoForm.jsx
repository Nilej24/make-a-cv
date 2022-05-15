import React from 'react';

function InfoForm(props) {
  const { firstName, lastName, email, phone, description } = props.data;

  return (
    <form className="hidden" onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="fname-edit">first name</label>
        <input id="fname-edit" type="text" defaultValue={firstName} />
      </div>
      <div>
        <label htmlFor="lname-edit">last name</label>
        <input id="lname-edit" type="text" defaultValue={lastName} />
      </div>
      <div>
        <label htmlFor="email-edit">email</label>
        <input id="email-edit" type="text" defaultValue={email} />
      </div>
      <div>
        <label htmlFor="phone-edit">phone</label>
        <input id="phone-edit" type="number" defaultValue={phone} />
      </div>
      <div>
        <label htmlFor="info-description-edit">description</label>
        <textarea id="info-description-edit" cols="30" rows="10" defaultValue={description}></textarea>
      </div>
      <button type="submit">save</button>
    </form>
  );
}

export default InfoForm;
