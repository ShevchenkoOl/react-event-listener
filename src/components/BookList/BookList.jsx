import HomePage from 'components/HomePage/HomePage';
import React, { useState } from 'react';
import styles from './bookList.module.css';
import { nanoid } from 'nanoid';
import BookItem from './BookItem';
import MySelect from './MySelect';
import FindBook from './FindBook';

const BookList = () => {
  const [books, setBooks] = useState([]); // это состояние массива книг
  const [book, setBook] = useState({ name: '', author: '' }); // это состояние одной книге
  const [selectedSort, setSelectedSort] = useState(''); // это состояние для сортировки
  const [seachQuery, setSearchQery] = useState[''] // состояние инпут для поиска книг 

  const addNewBook = e => {
    e.preventDefault();
    // console.log(book.name, book.author);
    //     const newBook = {
    //         id: nanoid(),
    //         name: book.name,
    //         author: book.author
    // };
    //     setBook([...book, newBook]);
    //     console.log(newBook)
    // или
    setBooks([...books, { ...book, id: nanoid() }]); //создаёт новый массив, состоящий из элементов, распакованных из book, и нового объекта {book, id: nanoid()}.
    setBook({ name: '', author: '' });
  };

  const remove = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  const sortBooks = sort => {
    // функция для сортировке массива
    setSelectedSort(sort);
    console.log(sort); // sort это название полей name, author
    setBooks([...books].sort((a, b) => a[sort].localeCompare(b[sort]))); // сортировкa массива книг с использованием localeCompare и обновления состояния books с учетом выбранного критерия сортировки (name или author)
  };

  return (
    <>
      <HomePage />
      <form className={styles.form}>
        <h1 className={styles.title}>Book List</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Book's name"
          value={book.name}
          onChange={e => setBook({ ...book, name: e.target.value })}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={e => setBook({ ...book, author: e.target.value })}
        />
        <button className={styles.btn} type="submit" onClick={addNewBook}>
          Add new book
        </button>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MySelect
          value={selectedSort}
          onChange={sortBooks}
          defaultValue="sort"
          options={[
            { value: 'name', name: 'by name' },
            { value: 'author', name: 'by author' },
          ]}
        />
      </div>
      {books.length > 0 ? (
        <>
        <FindBook value={seachQuery} onChange={event => setSearchQery(event.target.value)}/>
        <ul className={styles.list}>
          {books.map(book => (
            <BookItem book={book} key={book.id} removeBook={remove} />
          ))}
        </ul>
        </>
      ) : (
        <p>The list is empty!</p>
      )}
    </>
  );
};

export default BookList;
