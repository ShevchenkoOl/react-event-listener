import React from 'react';

import styles from './bookList.module.css';

const BookItem = ({book, removeBook}) => {
  return (
    <li className={styles.item}>
      <span>{book.name}</span>
      <span>{book.author}</span>
      <button className={styles.btnDel} onClick={()=>removeBook(book.id)}>Delete</button>
    </li>
  );
};

export default BookItem;
