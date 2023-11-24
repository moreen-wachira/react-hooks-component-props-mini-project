// Article.js
import React from 'react';

function Article({ title, date, preview }) {
  const minutesToRead = Math.ceil(preview.split(' ').length / 200); // Assuming average reading speed is 200 words per minute

  const renderReadTime = (minutes) => {
    const coffeeCups = '☕️'.repeat(Math.ceil(minutes / 5));
    const bentoBoxes = '🍱'.repeat(Math.ceil(minutes / 10));

    return (
      <span>
        {minutes <= 30 ? coffeeCups : bentoBoxes} {minutes} min read
      </span>
    );
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || 'January 1, 1970'}</small>
      <p>{preview}</p>
      <p>{renderReadTime(minutesToRead)}</p>
    </article>
  );
}

export default Article;
