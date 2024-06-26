import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./homePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Event Listener</h1>
      <div className={styles.section}>
        <NavLink
          to="/functionComponent"
          className={({ isActive }) =>
            isActive ? `${styles.nav} ${styles.activeNav}` : styles.nav
          }
        >
          Using the Functional Component (hooks)
        </NavLink>
        <NavLink
          to="/classComponent"
          className={({ isActive }) =>
            isActive ? `${styles.nav} ${styles.activeNav}` : styles.nav
          }
        >
          Using the Class Component
        </NavLink>
        <NavLink
          to="/Feedback"
          className={({ isActive }) =>
            isActive ? `${styles.nav} ${styles.activeNav}` : styles.nav
          }
        >
          Feedback
        </NavLink>
        <NavLink
          to="/Contacts"
          className={({ isActive }) =>
            isActive ? `${styles.nav} ${styles.activeNav}` : styles.nav
          }
        >
          Contacts
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
