import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import { setBookList } from "./store/actions"
import Home from "./pages/Home"
import BookPage from "./pages/BookPage"
import styles from "./App.module.css"

function App(props) {
  const url = `https://unruffled-austin-0672da.netlify.app/data.json`
  const controller = new AbortController()
  const signal = controller.signal

  const fetchData = async () => {
    await fetch(`https://cors-anywhere.herokuapp.com/${url}`, { signal })
      .then(response => response.json())
      .then(data => {
        props.dispatch(setBookList({
          isLoading: false,
          bookList: data.books
        }))
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  }

  useEffect(() => {
    fetchData()

    return () => {
      controller.abort()
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
