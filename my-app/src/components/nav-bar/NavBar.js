import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles["joke-blog-title"]}>Joke Blog</h1>
      <div className={styles.pages}>
        <Link to="/">Home</Link>
        <Link className={styles["create-btn"]} to="/create">
          New Joke
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
