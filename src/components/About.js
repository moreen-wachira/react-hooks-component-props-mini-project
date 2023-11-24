// About.js
import React from 'react';

function About({ image, altText, aboutText }) {
  return (
    <aside>
      <img src={image} alt={altText} />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
