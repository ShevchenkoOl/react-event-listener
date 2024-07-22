import HomePage from 'components/HomePage/HomePage';
import React, { useMemo, useState } from 'react';
import styles from './bookList.module.css';
import { nanoid } from 'nanoid';
import BookItem from './BookItem';
import MySelect from './MySelect';
import FindBook from './FindBook';
import MyModal from './MyModal';

const BookList = () => {
  const [books, setBooks] = useState([
    // это состояние массива книг
    {
      id: nanoid(),
      name: 'Leon King',
      author: 'Konan Doil',
    },
    {
      id: nanoid(),
      name: 'Svejk',
      author: 'Capek',
    },
    { id: nanoid(), name: 'Kazka', author: 'Hans Christian Anderson' },
  ]);

  const [book, setBook] = useState({ name: '', author: '' }); // это состояние одной книге
  const [selectedSort, setSelectedSort] = useState(''); // это состояние для сортировки
  const [searchQuery, setSearchQery] = useState(''); // состояние инпут для поиска книг
  const [modal, setModal] = useState(false); // состояние которое отвечает за то или видимое модальное окно или нет

  // Аргументы useMemo:
  // Функция: () => { ... } — функция, которая выполняет сортировку книг.
  // Массив зависимостей: [selectedSort, books] — список зависимостей, от которых зависит результат выполнения функции.

  const sortedBook = useMemo(() => {
    //это хук, который запоминает результат функции и возвращает это запомненное значение до тех пор, пока зависимости не изменятся.
    // useMemo будет запоминать результат выполнения этой функции и пересчитывать его только в случае изменения selectedSort или books.
    console.log('working');
    if (selectedSort) {
      // Если selectedSort не пустой, создается новый отсортированный массив книг по выбранному критерию (name или author) с использованием localeCompare.
      return [...books].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      ); // сортировкa массива книг с использованием localeCompare и обновления состояния books с учетом выбранного критерия сортировки (name или author)
    }
    return books; // Если selectedSort пустой, возвращается исходный массив books.
  }, [selectedSort, books]);

  const sortedAndSearchedBook = useMemo(() => {
    // Отфильтрованный массив книг создается путем фильтрации sortedBook, проверяя, включает ли имя книги (приведенное к нижнему регистру) строку searchQuery (также приведенную к нижнему регистру).
    // useMemo будет запоминать результат выполнения этой функции и пересчитывать его только в случае изменения searchQuery или sortedBook.
    return sortedBook.filter(book =>
      book.name.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedBook]);

  const addNewBook = (e) => {
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
    setModal(false);
  };

  const remove = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  const sortBooks = sort => {
    // функция для сортировке массива
    setSelectedSort(sort);
    console.log(sort); // sort это название полей name, author
    // setBooks([...books].sort((a, b) => a[sort].localeCompare(b[sort]))); // Саму сортировку мы перенесли выше // сортировкa массива книг с использованием localeCompare и обновления состояния books с учетом выбранного критерия сортировки (name или author)
  };

  return (
    <>
      <HomePage />
      <button className={styles.btn} onClick={() => setModal(true)}>Create book list</button>
      <MyModal visible={modal} setVisible={setModal}>
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
      </MyModal>
      
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
      <FindBook
        value={searchQuery}
        onChange={event => setSearchQery(event.target.value)}
      />
      {sortedAndSearchedBook.length > 0 ? (
        <>
          <ul className={styles.list}>
            {sortedAndSearchedBook.map(book => (
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
