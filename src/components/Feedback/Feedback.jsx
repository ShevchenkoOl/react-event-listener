import React from "react";
import HomePage from "components/HomePage/HomePage";
import { useState } from "react";

import styles from "./feedback.module.css";


const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handeleClickGood = () => {
    setGood(good + 1);
  };

  const handeleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handeleClickBad = () => {
    setBad(bad + 1);
  };

  const total = good + neutral + bad;
  const positiveFeedback = total
    ? (((good + neutral) / total) * 100).toFixed(2)
    : 0; //округляет до сотой части, то есть два знака после запятой
  // значение по умолчанию для positiveFeedback как 0, если total равно 0. Это предотвращает отображение неопределенного значения % при отсутствии отзывов.

  return (
    <>
      <HomePage />
      <div className={styles.container}>
        <h1 className={styles.title}>Please, leave your feedback</h1>
        <div className={styles.buttonContainer}>
          <button className={styles.btn} onClick={handeleClickGood}>
            Good
          </button>
          <button className={styles.btn} onClick={handeleClickNeutral}>
            Neutral
          </button>
          <button className={styles.btn} onClick={handeleClickBad}>
            Bad
          </button>
        </div>
      </div>
      {total > 0 ? (
        <div className={styles.container}>
          <h2 className={styles.titleH2}>Statistics:</h2>
          <ul className={styles.list}>
            <li className={styles.item}>Good: {good}</li>
            <li className={styles.item}>Neutral: {neutral}</li>
            <li className={styles.item}>Bad: {bad}</li>
            <li className={styles.item}>Total: {total}</li>
            <li className={styles.item}>
              Positive feedback: {positiveFeedback}%
            </li>
          </ul>
        </div>
      ) : (
        <div className={styles.container}>
          <h2 className={styles.titleH2}>
            Unfortunately, there are no reviews yet!
          </h2>
        </div>
      )}
    </>
  );
};

export default Feedback;
