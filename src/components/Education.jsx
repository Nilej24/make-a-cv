import React from 'react';

function Course(name, school, startDate, endDate) {
  return {name, school, startDate, endDate};
}

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [

      ],
    };
  }

  render() {
    return (
      <div>education lol</div>
    );
  }
}

export default Education;
