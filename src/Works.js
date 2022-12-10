import './Works.css'
import React from 'react';

export default function Works() {
  return (
    <div className="Works-Box">
      <div className='Item'>
        <img className='ItemImage' src='personas.png' alt='personas'></img>
        <div className='ItemContent'>
          <h1>
            <a target="_blank" rel="noopener noreferrer" href="https://cutelittlemouse.github.io/personas-and-storyboard/">Personas and Storyboarding </a>
          </h1>
          <p>Analyzed the accessbility problems of the digital menu of a local restaurant, conducted field research and interview on user interaction, created two personas and a storyboard about interacting with the interface.</p>
        </div>
      </div>
      <div className='Item'>
        <img className='ItemImage' src='responsive.jpg' alt='personas'></img>
        <div className='ItemContent'>
          <h1>
            <a target="_blank" rel="noopener noreferrer" href="https://cutelittlemouse.github.io/responsive-redesign/">Responsive Redesign</a>
          </h1>
          <p>A redesign of Rhode Island Land Trust Council's website with responsiveness on mobile, tablet, and desktop platforms. Identified accessbility problems, produced low-fidelity wireframing and high-fidelity prototyping.</p>
        </div>
      </div>
      <div className='Item'>
        <img className='ItemImage' src='iterativeDesign.png' alt='personas'></img>
        <div className='ItemContent'>
          <h1>
            <a target="_blank" rel="noopener noreferrer" href="https://cs1300-iterative-design.pages.dev/">Iterative design</a>
          </h1>
          <p>Created a Figma prototype for Pyrls, a software for healthcare providers about drug information. Conducted user testing and improved the prototype based on feedback. </p>
        </div>
      </div>
      <div className='Item'>
        <img className='ItemImage' src='mouse.png' alt='personas'></img>
        <div className='ItemContent'>
          <h1>
            <a target="_blank" rel="noopener noreferrer" href="https://cutelittlemouse.github.io/mouse/">Development</a>
          </h1>
          <p>Used react to develop a "Mouse Feeding Plan" website, including two filters, two sorting criteria, and an aggregator </p>
        </div>
      </div>
    </div>

  );
}