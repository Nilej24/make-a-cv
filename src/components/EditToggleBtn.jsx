import React, { useState } from 'react';

function EditToggleBtn(props) {

  const [editing, setEditing] = useState(false);

  const handleClick = (ev) => {
    const adjForm = ev.target.nextElementSibling;
    adjForm.classList.toggle('hidden');

    setEditing(!editing);
  }

  return (
    <button type="button" onClick={handleClick}>
      {editing ? 'done' : 'edit'}
    </button>
  );
}

export default EditToggleBtn;
