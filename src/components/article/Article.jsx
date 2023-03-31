import React from 'react'
import PropTypes from 'prop-types'
import './article.css'

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-img">
        <img src={imgUrl} alt="blog" />
      </div>

      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <a href="#!">Read Full Article</a>
      </div>
    </div>
  )
}

Article.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Article
