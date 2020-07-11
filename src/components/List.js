import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { slugify } from "../helpers/slugify"
import styles from "./List.module.css"

const List = (props) => {
  return (
    <ul className={styles.list}>
      {props.books && props.books.map(book =>
        <li key={book.book_id}>
          <Link to={`/book/${slugify(book.name)}`}>
            {book.cover && <div className={styles.listImage}><img src={book.cover} alt={`${book.name} cover`} /></div>}
            <header>
              {book.name && <h3>{book.name}</h3>}
              {book.author && <p>{book.author}</p>}
            </header>
            <footer>
              <span>More info</span>
            </footer>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default List

List.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      isbn:PropTypes.string.isRequired
    })
  ).isRequired
}
