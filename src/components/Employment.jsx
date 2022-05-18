import React, { useState } from 'react';

import EditToggleBtn from './EditToggleBtn';
import AddToListForm from './AddToListForm';

function Job(title, company, startDate, endDate, description) {
  return {title, company, startDate, endDate, description};
}

function Employment(props) {

  const [jobs, setJobs] = useState([
    Job(
      'Job Title',
      'Company I Worked for',
      'January 2019',
      'Present',
      'some info about the job'
    ),
  ]);

  const addToJobs = (jobArgs) => {
    setJobs([
      ...jobs,
      Job(...jobArgs),
    ]);
  }

  const deleteBtnClick = (index) => {
    const newJobsArray = [...jobs];
    newJobsArray.splice(index, 1);

    setJobs(newJobsArray);
  }

  return (
    <div>
      <EditToggleBtn />
      <AddToListForm sectionName="employment" numberOfInputs='5' addToList={addToJobs} />
      <h2>Employment</h2>
      {jobs.map((job, index) => {
        const {title, company, startDate, endDate, description} = job;
        
        return (
          <div>
            <button className="deleteBtn" onClick={() => deleteBtnClick(index)}>x</button>
            <h3>{title}</h3>
            <p>{company}</p>
            <p>{startDate} - {endDate}</p>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Employment;
