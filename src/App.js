import './App.css';
import Works from './Works';
import About from './About';
import * as React from 'react';
import { SocialIcon } from 'react-social-icons';


function App() {
  return (
    <div className="App">
      <About />
      <Works />
      <div className="Bottom-Navigation">
        <SocialIcon url="https://www.linkedin.com/" network="linkedin" fgColor='white' />
        <SocialIcon url="https://www.instagram.com" network="instagram" fgColor='white' />
        <SocialIcon url="mailto:" network="email" fgColor='white' />
      </div>
    </div>
  );
}

export default App;
