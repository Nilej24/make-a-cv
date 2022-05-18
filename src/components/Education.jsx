import React, { useState } from 'react';

import EditToggleBtn from './EditToggleBtn';
import AddToListForm from './AddToListForm';

function Course(name, school, startDate, endDate, description) {
  return {name, school, startDate, endDate, description};
}

function Education(props) {

  const [courses, setCourses] = useState([
   Course(
      'Course',
      'School I Took the Course at',
      'January 2018',
      'December 2018',
      'some info about the course I took',
    )
  ]);

  const addToCourses = (courseArgs) => {
    setCourses([
      ...courses,
      Course(...courseArgs),
    ]);
  }

  const deleteBtnClick = (index) => {
    const newCoursesArray = [...courses];
    newCoursesArray.splice(index, 1);

    setCourses(newCoursesArray);
  }

  return (
    <div className="Education">
      <EditToggleBtn />
      <AddToListForm sectionName="education" numberOfInputs='5' addToList={addToCourses} />
      <h2>Education</h2>
      {courses.map((course, index) => {
        const {name, school, startDate, endDate, description} = course;
        
        return (
          <div>
            <button className="deleteBtn" onClick={() => deleteBtnClick(index)}>x</button>
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

export default Education;
