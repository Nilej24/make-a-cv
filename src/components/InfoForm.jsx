import React from 'react';

function InfoForm(props) {
  const { firstName, lastName, email, phone, description } = props.data;

  return (
    <form className="hidden">
      <div>
        <label htmlFor="fname-edit">first name</label>
        <input id="fname-edit" type="text" value={firstName} />
      </div>
      <div>
        <label htmlFor="lname-edit">second name</label>
        <input id="lname-edit" type="text" value={lastName} />
      </div>
      <div>
        <label htmlFor="email-edit">email</label>
        <input id="email-edit" type="text" value={email} />
      </div>
      <div>
        <label htmlFor="phone-edit">phone</label>
        <input id="phone-edit" type="number" value={phone} />
      </div>
      <div>
        <label htmlFor="email-edit">description</label>
        <textarea id="info-description-edit" cols="30" rows="5">{description}</textarea>
      </div>
    </form>
  );
}

export default InfoForm;
