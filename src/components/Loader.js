import React from "react"
import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={styles.loader} data-testid="loader">
      <span className={styles.loaderItem}></span>
      <span className={styles.loaderItem}></span>
      <span className={styles.loaderItem}></span>
      <p>Loading</p>
    </div>
  )
}

export default Loader
