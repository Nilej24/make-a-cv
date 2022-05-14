import React from 'react';

import EditToggleBtn from './EditToggleBtn';

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
          'December 2019',
          'some info about the job'
        ),
      ],
    };
  }

  render() {
    return (
      <div>
        <EditToggleBtn />
        <h2>Employment</h2>
        {this.state.jobs.map((job) => {
          const {title, company, startDate, endDate, description} = job;
          
          return (
            <div>
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
