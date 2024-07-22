import React from 'react';
import styles from './bookList.module.css';

const MyModal = ({ children, visible, setVisible }) => {
  // visible - видно модальное окно или нет, функция setVisible которая будет модальное окно скрывать если ми нажмем на темную область.

  //с помощью этой конструкции мы определяем добавлять класс active или нет
  const rootClass = [styles.myModal]; // создается массив rootClass, содержащий базовый класс styles.myModal
  if (visible) {
    // Если свойство visible равно true, к массиву rootClass добавляется класс styles.active.
    rootClass.push(styles.active);
  }
  return (
    <div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
      {/* Закрытие модалки при клике на затемненный фон, используется для динамического присвоения нескольких классов элементу, Метод массива .join('') объединяет все элементы массива в одну строку.*/}
      <div className={styles.myModalContent} onClick={e => e.stopPropagation()}> {/*используется для предотвращения распространения события клика. Это полезно в случае модального окна, чтобы клики внутри модального контента не закрывали само модальное окно, если фон модального окна кликабелен и закрывает окно при клике на него.*/}
        {children}
      </div>
    </div>
  );
};

export default MyModal;
