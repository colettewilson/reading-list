import React from "react"
import { Link } from "react-router-dom"
import { slugify } from "../helpers/slugify"

const Related = (props) => {
  return (
    <>
      <p>Related titles by <b>{props.author}</b>:</p>
      <ul>
        {props.titles.map(title =>
          <li key={title.book_id}><Link to={`/book/${slugify(title.name)}`}>{title.name}</Link></li>
        )}
      </ul>
    </>
  )
}

export default Related
