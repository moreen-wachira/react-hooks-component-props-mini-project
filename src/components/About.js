import React from 'react';

const About = ({ image, aboutText }) => {
  const defaultImage = "https://via.placeholder.com/215";
  
  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;