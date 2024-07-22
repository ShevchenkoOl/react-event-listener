import React from "react";
import styles from './bookList.module.css';

const FindBook = ({value, onChange}) => {
  return (
    <div className={styles.form}>
      <label className={styles.title} htmlFor="find">Find book by name</label>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default FindBook;