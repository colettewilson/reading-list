import React from "react"
import { Link } from "react-router-dom"
import Related from "./Related"
import styles from "./Detail.module.css"

const Detail = (props) => {
  return (
    <article className={styles.detail}>
      {props.cover && <aside className={styles.detailImage}>
        <img src={props.cover} alt={`${props.name ? props.name : "Book"} cover`} />
      </aside>}
      <main className={styles.detailMain}>
        <div className={styles.detailTitle}>
          {props.name && <h1>{props.name}</h1>}
          {props.author && <p>By {props.author}</p>}
        </div>
        {props.isbn && <p>ISBN: {props.isbn}</p>}
        {props.author && <Related author={props.author} current={props.name} />}
      </main>
      <footer>
        <Link to="/">Back to reading list</Link>
      </footer>
    </article>
  )
}

export default Detail
