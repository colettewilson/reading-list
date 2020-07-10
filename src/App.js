import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import axios from "axios"
import Home from "./pages/Home"
import styles from "./App.module.css"

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
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
