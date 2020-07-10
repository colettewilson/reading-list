import React from "react"
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

export default Home

