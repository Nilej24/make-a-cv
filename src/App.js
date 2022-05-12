import React from 'react';

import Info from './components/Info';
import Education from './components/Education';
import Employment from './components/Employment';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    return (
      <div>
        <Info />
        <Education />
        <Employment />
      </div>
    );
  }
}

export default App;
