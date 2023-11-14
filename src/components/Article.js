import React from 'react';

const Article = ({ title, date, preview }) => {
  const calculateReadTime = (minutes) => {
    const coffeeCups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);

    return (
      <span>
        {Array(coffeeCups).fill('☕️').join('')} {Array(bentoBoxes).fill('🍱').join('')} {minutes} min read
      </span>
    );
  };

  const formattedDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      {calculateReadTime(30)}
    </article>
  );
};

export default Article;