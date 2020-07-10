import React from "react"
import { connect } from "react-redux"
import Header from "../components/Header"
import Loader from "../components/Loader"
import List from "../components/List"

const Home = (props) => {
  return (
    <>
      <Header />
      {props.isLoading ? <Loader /> : <List books={props.bookList} />}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.books.isLoading,
    bookList: state.books.bookList
  }
}

export default connect(mapStateToProps, null)(Home)

