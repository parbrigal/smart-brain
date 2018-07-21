import React from 'react';
import Particles from 'react-particles-js';
import './BackgroundParticles.css';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const BackgroundParticles = () => {
  return (
  <div>
    <Particles className='particles' params={particlesOptions} />
  </div>
  );
}

export default BackgroundParticles;
