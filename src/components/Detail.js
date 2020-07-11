import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Related from "./Related"
import styles from "./Detail.module.css"

const Detail = ({ book }) => {
  if (!book) return null
  return (
    <article className={styles.detail}>
      <aside className={styles.detailImage}>
        <img src={book.cover} alt={`${book.name ? book.name : "Book"} cover`} />
      </aside>
      <main className={styles.detailMain}>
        <div className={styles.detailTitle}>
          <h1>{book.name}</h1>
          <p>By {book.author}</p>
        </div>
        <p>ISBN: {book.isbn}</p>
        {/*book.author && <Related author={book.author} current={book.name} />*/}
      </main>
      <footer>
        <Link to="/">Back to reading list</Link>
      </footer>
    </article>
  )
}

export default Detail

Detail.propTypes = {
  book: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isbn:PropTypes.string.isRequired
  }).isRequired
}
