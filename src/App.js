import React, { Component } from 'react';
import BackgroundParticles from './components/BackgroundParticles/BackgroundParticles';
import ComponentWrapper from './ComponentWrapper';

class App extends Component {
  render() {
    return (
      <div>
          <BackgroundParticles />
          <ComponentWrapper />
      </div>
    );
  }
}

export default App;
