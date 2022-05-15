import React from 'react';

import EditToggleBtn from './EditToggleBtn';
import AddToListForm from './AddToListForm';

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

  addToCourses = (courseArgs) => {
    this.setState({
      courses: [
        ...this.state.courses,
        Course(...courseArgs),
      ],
    });
  }

  render() {
    return (
      <div className="Education">
        <EditToggleBtn />
        <AddToListForm sectionName="education" numberOfInputs='5' addToList={this.addToCourses} />
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
