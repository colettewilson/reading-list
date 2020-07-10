import React from "react"
import styles from "./App.module.css"
import Header from "./components/Header"
import Loader from "./components/Loader"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Loader />
    </div>
  )
}

export default App
