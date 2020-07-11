import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { slugify } from "../helpers/slugify"

const Related = ({titles, author}) => {
  return (
    <>
      <p>Related titles by <b>{author}</b>:</p>
      <ul>
        {titles && titles.map(title =>
          <li key={title.book_id}><Link to={`/book/${slugify(title.name)}`} data-testid="book-link">{title.name}</Link></li>
        )}
      </ul>
    </>
  )
}

export default Related

Related.propTypes = {
  author: PropTypes.string.isRequired,
  titles: PropTypes.arrayOf(
    PropTypes.shape({
      book_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired
}
