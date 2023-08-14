import React from 'react';
import './article.css';

const Article = ({ imageUrl, date, title }) => {
  return (
    <article className='gpt3__blog-container_article'>
      <figure className='gpt3__blog-container_article-image'>
        <img src={imageUrl} alt="blog image" />
      </figure>
      <div className='gpt3__blog-conatiner_article-content'>
        <div>
          <p className='gpt3__blog-conatiner_article-content__date'>{date}</p>
          <p className='gpt3__blog-conatiner_article-content__title'>{title}</p>
        </div>
        <p className='gpt3__blog-conatiner_article-content__readfull'>Read Full Article</p>
      </div>
    </article>
  )
}

export default Article