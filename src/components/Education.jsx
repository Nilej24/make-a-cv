import React from 'react';

function Course(name, school, startDate, endDate, description) {
  return {name, school, startDate, endDate, description};
}

class Education extends React.Component {
  constructor(props) {
    super(props);

    const description = 'some info about the course I took';

    this.state = {
      courses: [
        Course('Course', 'School I Took the Course at', 'January 2018', 'December 2018', description),
      ],
    };
  }

  render() {
    return (
      <div>
        <button>edit</button>
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
