import React, { useRef } from 'react';

function AddToListForm(props) {

  const refs = [
    useRef(), useRef(), useRef(), useRef(), useRef()
  ];

  const addToParentList = (ev) => {
    ev.preventDefault();

    const factoryArgs = [];
    
    for (let i = 0; i < props.numberOfInputs; i += 1) {
      const value = refs[i].current.value;
      factoryArgs.push(value);
    }

    props.addToList(factoryArgs);

    ev.target.reset();
  }

  const labels =[
    'course name', 'school', 'start date', 'end date', 'description'
  ]
  
  switch(props.sectionName) {
    case 'education':
      break;
    case 'employment':
      labels[0] = 'job title';
      labels[1] = 'company';
      break;
    default:
      console.log('lol');
  }

  return (
    <form className="hidden" onSubmit={addToParentList}>
      <div>
        <label>{labels[0]}</label>
        <input ref={refs[0]} type="text" />
      </div>
      <div>
        <label>{labels[1]}</label>
        <input ref={refs[1]} type="text" />
      </div>
      <div>
        <label>{labels[2]}</label>
        <input ref={refs[2]} type="text" />
      </div>
      <div>
        <label>{labels[3]}</label>
        <input ref={refs[3]} type="text" />
      </div>
      <div>
        <label>{labels[4]}</label>
        <textarea ref={refs[4]} cols="30" rows="10"></textarea>
      </div>
      <button>add</button>
    </form>
  );
}

export default AddToListForm;
