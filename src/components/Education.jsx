import React from 'react';

import './Education.scss';

import EditToggleBtn from './EditToggleBtn';

function Course(name, school, startDate, endDate, description) {
  return {name, school, startDate, endDate, description};
}

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [
        Course(
          'Course',
          'School I Took the Course at',
          'January 2018',
          'December 2018',
          'some info about the course I took',
        ),
      ],
    };
  }

  render() {
    return (
      <div className="Education">
        <EditToggleBtn />
        <h2>Education</h2>
        {this.state.courses.map((course) => {
          const {name, school, startDate, endDate, description} = course;
          
          return (
            <div>
              <h3>{name}</h3>
              <p>{school}</p>
              <p>{startDate} - {endDate}</p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
