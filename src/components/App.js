// App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

function App() {
  return (
    <div>
      <Header blogName={blogData.name} />
      <About
        image={blogData.aboutImage || 'https://via.placeholder.com/215'}
        altText="blog logo"
        aboutText={blogData.about}
      />
      <ArticleList articles={blogData.articles} />
    </div>
  );
}

export default App;
