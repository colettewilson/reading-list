import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { slugify } from "../helpers/slugify"

const Related = (props) => {
  return (
    <>
      {props.titles && props.titles.length > 0 &&
        <>
          <p>Related titles by <b>{props.author}</b>:</p>
          <ul>
            {props.titles.map(title =>
              <li key={title.book_id}><Link to={`/book/${slugify(title.name)}`}>{title.name}</Link></li>
            )}
          </ul>
        </>
      }
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  let author = ownProps.author
  let current = ownProps.current
  return {
    titles: state.books.bookList.filter(b => b.author === author && b.name !== current)
  }
}

export default connect(mapStateToProps, null)(Related)
