import React from "react"
import styles from "./List.module.css"

const List = (props) => {
  return (
    <ul className={styles.list}>
      {props.books && props.books.map(book =>
        <li key={book.book_id}>
          {book.cover && <div className={styles.listImage}><img src={book.cover} alt={`${book.name} cover`} /></div>}
          <header>
            {book.name && <h3>{book.name}</h3>}
            {book.author && <p>{book.author}</p>}
          </header>
          <footer>
            <span>More info</span>
          </footer>
        </li>
      )}
    </ul>
  )
}

export default List