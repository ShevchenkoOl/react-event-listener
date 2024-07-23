import { useMemo } from 'react';

export const useSortedBook = (books, sort) => {
  // Аргументы useMemo:
  // Функция: () => { ... } — функция, которая выполняет сортировку книг.
  // Массив зависимостей: [selectedSort, books] — список зависимостей, от которых зависит результат выполнения функции.
  const sortedBook = useMemo(() => {
    //это хук, который запоминает результат функции и возвращает это запомненное значение до тех пор, пока зависимости не изменятся.
    // useMemo будет запоминать результат выполнения этой функции и пересчитывать его только в случае изменения selectedSort или books.
    console.log('working');
    if (sort) {
      // Если selectedSort не пустой, создается новый отсортированный массив книг по выбранному критерию (name или author) с использованием localeCompare.
      return [...books].sort((a, b) => a[sort].localeCompare(b[sort])); // сортировкa массива книг с использованием localeCompare и обновления состояния books с учетом выбранного критерия сортировки (name или author)
    }
    return books; // Если selectedSort пустой, возвращается исходный массив books.
  }, [sort, books]);

  return sortedBook;
};

export const useBooks = (books, sort, query) => {
    const sortedBook = useSortedBook(books, sort);
    const sortedAndSearchedBook = useMemo(() => {
        // Отфильтрованный массив книг создается путем фильтрации sortedBook, проверяя, включает ли имя книги (приведенное к нижнему регистру) строку searchQuery (также приведенную к нижнему регистру).
        // useMemo будет запоминать результат выполнения этой функции и пересчитывать его только в случае изменения searchQuery или sortedBook.
        return sortedBook.filter(book =>
          book.name.toLowerCase().includes(query)
        );
      }, [query, sortedBook]);
    return sortedAndSearchedBook;
}
