import React from 'react';

import EditToggleBtn from './EditToggleBtn';
import AddToListForm from './AddToListForm';

function Job(title, company, startDate, endDate, description) {
  return {title, company, startDate, endDate, description};
}

class Employment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [
        Job(
          'Job Title',
          'Company I Worked for',
          'January 2019',
          'Present',
          'some info about the job'
        ),
      ],
    };
  }

  addToJobs = (jobArgs) => {
    this.setState({
      jobs: [
        ...this.state.jobs,
        Job(...jobArgs),
      ],
    });
  }

  deleteBtnClick = (index) => {
    const newJobsArray = [...this.state.jobs];
    newJobsArray.splice(index, 1);

    this.setState({
      jobs: newJobsArray,
    });
  }

  render() {
    return (
      <div>
        <EditToggleBtn />
        <AddToListForm sectionName="employment" numberOfInputs='5' addToList={this.addToJobs} />
        <h2>Employment</h2>
        {this.state.jobs.map((job, index) => {
          const {title, company, startDate, endDate, description} = job;
          
          return (
            <div>
              <button className="deleteBtn" onClick={() => this.deleteBtnClick(index)}>x</button>
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
}

export default Employment;
