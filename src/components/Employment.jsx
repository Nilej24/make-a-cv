import React from 'react';

function Job(title, company, startDate, endDate, description) {
  return {title, company, startDate, endDate, description};
}

class Employment extends React.Component {
  constructor(props) {
    super(props);

    const description = 'some info about my job';

    this.state = {
      jobs: [
        Job('Job Title', 'Company I Worked for', 'January 2019', 'December 2019', description),
      ],
    };
  }

  render() {
    return (
      <div>
        <button>edit</button>
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
