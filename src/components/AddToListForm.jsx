import React from 'react';

class AddToListForm extends React.Component {

  addToParentList = (ev) => {
    ev.preventDefault();

    const factoryArgs = [];
    
    for (let i = 0; i < this.props.numberOfInputs; i += 1) {
      const value = document.querySelector('#' + this.props.sectionName + i).value;
      factoryArgs.push(value);
    }

    this.props.addToList(factoryArgs);

    ev.target.reset();
  }

  render() {
    const {sectionName} = this.props;

    const labels =[
      'course name', 'school', 'start date', 'end date', 'description'
    ]
    
    switch(sectionName) {
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
      <form className="hidden" onSubmit={this.addToParentList}>
        <div>
          <label htmlFor={sectionName + '0'}>{labels[0]}</label>
          <input type="text" id={sectionName + '0'} />
        </div>
        <div>
          <label htmlFor={sectionName + '1'}>{labels[1]}</label>
          <input type="text" id={sectionName + '1'} />
        </div>
        <div>
          <label htmlFor={sectionName + '2'}>{labels[2]}</label>
          <input type="text" id={sectionName + '2'} />
        </div>
        <div>
          <label htmlFor={sectionName + '3'}>{labels[3]}</label>
          <input type="text" id={sectionName + '3'} />
        </div>
        <div>
          <label htmlFor={sectionName + '4'}>{labels[4]}</label>
          <textarea id={sectionName + '4'} cols="30" rows="10"></textarea>
        </div>
        <button>add</button>
      </form>
    );
  }
}

export default AddToListForm;
