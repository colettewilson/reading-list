import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import axios from "axios"
import { connect } from "react-redux"
import { setBookList } from "./store/actions"
import Home from "./pages/Home"
import BookPage from "./pages/BookPage"
import styles from "./App.module.css"

function App(props) {
  const url = `http://localhost:3000/data.json`
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source()

  const fetchData = async() => {
    await axios.get(url, {
      cancelToken: source.token
    })
      .then(response => {
        props.dispatch(setBookList({
          isLoading: false,
          bookList: response.data.books
        }))
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
          <Route path="/book/:bookSlug" component={BookPage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.books.isLoading,
    bookList: state.books.bookList
  }
}

export default connect(mapStateToProps, null)(App)
