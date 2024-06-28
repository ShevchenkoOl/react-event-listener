//----------Функціональні компоненти:
// Современный подход: Функциональные компоненты с хуками (useState, useEffect, useReducer и т.д.) являются современным стандартом в React и предоставляют мощные возможности для управления состоянием и побочными эффектами без необходимости использования классов.
//Рекомендуется использовать функциональные компоненты с хуками для новых разработок из-за их простоты, гибкости и современности. Однако, классовые компоненты могут все еще быть полезны для поддержки существующего кода или в ситуациях, где использование хуков затруднительно. Важно понимать и уметь работать с обоими типами компонентов, чтобы эффективно работать с любым кодом на React.

import React, { useState } from 'react';
import HomePage from "components/HomePage/HomePage";
import styles from '../componentStyle.module.css';

const Counter = ({ step = 1 }) => {
  // Используем хук useState для состояния value
  const [value, setValue] = useState(0);

  // Функция для инкрементации
  const handleIncrement = (evt) => {
    console.log("Increment button was clicked!", evt);
    setValue(prevValue => prevValue + step);
  };

  // Функция для декрементации
  const handleDecrement = (evt) => {
    console.log("Decrement button was clicked!", evt);
    setValue(prevValue => prevValue - step);
  };

  return (
    <>
      <HomePage />
      <div className={styles.container}>
        <h2 className={styles.title}>Counter</h2>
        <span className={styles.value}>{value}</span>
        <button className={styles.btn} type="button" onClick={handleIncrement}>
          Increment by {step}
        </button>
        <button className={styles.btn} type="button" onClick={handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    </>
  );
};

export default Counter;