import React from 'react';
import crewmate1 from '../images/crewmatesOne.png';
import crewmate2 from '../images/crewmatesTwo.png'

import '../styles/homepage.css'

const HomePage = () => {
  return (
    <div className="page">
      <h2>Welcome to the Crewmate Creator!</h2>
      <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
      <div className="images">
        <img src={crewmate1} alt="Crewmate 1" />
        <img src={crewmate2} alt="Crewmate 2" />
      </div>
    </div>
  );
};

export default HomePage;
