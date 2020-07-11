import React from "react"
import { connect } from "react-redux"
import { slugify } from "../helpers/slugify"
import Header from "../components/Header"
import Loader from "../components/Loader"
import Detail from "../components/Detail"

const BookPage = (props) => {
  return (
    <>
      <Header />
      {props.isLoading ? <Loader /> : <Detail book={props.book} related={props.related} />}
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  let slug = ownProps.match.params.bookSlug
  let book = state.books.bookList.find(b => slugify(b.name) === slug)
  let related = state.books.bookList.filter(b => b.author === book.author && b.name !== book.name)
  return {
    isLoading: state.books.isLoading,
    book: book,
    related: related.length > 0 && related
  }
}

export default connect(mapStateToProps, null)(BookPage)
