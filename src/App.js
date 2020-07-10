import React, { useState, useEffect } from "react"
import axios from "axios"
import styles from "./App.module.css"
import Header from "./components/Header"
import Loader from "./components/Loader"

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

  console.log(isLoading, bookList)

  return (
    <div className={styles.app}>
      <Header />
      <Loader />
    </div>
  )
}

export default App
