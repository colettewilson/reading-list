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
      {props.isLoading ? <Loader /> : <Detail {...props.book} />}
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  let slug = ownProps.match.params.bookSlug
  return {
    isLoading: state.books.isLoading,
    book: state.books.bookList.find(b => slugify(b.name) === slug)
  }
}

export default connect(mapStateToProps, null)(BookPage)
