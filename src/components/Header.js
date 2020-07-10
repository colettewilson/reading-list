import React from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header} data-testid="header">
      <Link data-testid="home-link" to="/">
        <span>the reading list</span>
      </Link>
    </header>
  )
}

export default Header
