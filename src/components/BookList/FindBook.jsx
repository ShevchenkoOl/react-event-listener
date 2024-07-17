import React from "react";
import styles from './bookList.module.css';

const FindBook = ({name, onFindContact}) => {
  return (
    <div className={styles.form}>
      <label className={styles.title} htmlFor="find">Find book by name</label>
      <input
        className={styles.input}
        onChange={onFindContact}
        type="text"
        name="find"
        value={name}
        placeholder="Search..."
      />
    </div>
  );
};

export default FindBook;