import React, { useState, useEffect } from "react"
import axios from "axios"
import styles from "./App.module.css"
import Header from "./components/Header"
import Loader from "./components/Loader"
import List from "./components/List"

function App() {
  const [{isLoading, bookList}, setBookList] = useState({
    isLoading: true,
    bookList: []
  })
  const url = `http://localhost:3000/data.json`
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source()

  const fetchData = async() => {
    await axios.get(url, {
      cancelToken: source.token
    })
      .then(response => {
        setBookList({
          isLoading: false,
          bookList: response.data.books
        })
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  }

  useEffect(() => {
    fetchData()

    return () => {
      source.cancel('Operation canceled by the user.')
    }
  }, [])

  return (
    <div className={styles.app}>
      <Header />
      {isLoading ? <Loader /> : <List books={bookList} />}
    </div>
  )
}

export default App
