import { useEffect, useRef, useState } from 'react';
import HomePage from 'components/HomePage/HomePage';

import styles from './switcher.module.css';
import { nanoid } from 'nanoid';

const SwitcherBackground = () => {
//   const [isDisabled, setIsDisabled] = useState(true);
  const [color, setColor] = useState('#fff');
  const [isRunning, setIsRunning] = useState(true); //// Состояние для контроля работы таймера
  const intervalRef = useRef(null); // Для хранения идентификатора таймера
  
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

  const startChangingColor = () => {
    setIsRunning(true);
  };

  const stopChangingColor = () => {
    setIsRunning(false);
    setColor('#fff'); // Устанавливаем цвет фона в изначальное значение
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setColor(getRandomHexColor());
      }, 1000);
    } else if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Очистка интервала при размонтировании компонента
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]); // Эффект выполнится каждый раз при изменении isRunning

  return (
    <>
      <HomePage />
      <div className={styles.container} style={{ backgroundColor: color }}>
        <button
          className={styles.btn}
          id="btnStart"
        //   disabled={!isDisabled}
          onClick={startChangingColor}
        >
          Start
        </button>
        <button
          className={styles.btn}
          id="btnStop"
        //   disabled={isDisabled}
          onClick={stopChangingColor}
        >
          Stop
        </button>
      </div>
    </>
  );
};

export default SwitcherBackground;

// Перший, простий і найважливіший хук useState. З назви зрозуміло, що він пов'язаний з станом компонента. Саме завдяки йому у функціональних компонентів з'явився внутрішній стан.

// const SwitcherBackground = () => {

// // let numbers = [1, 25, 69, 115];
// const [numbers, setNumbers] = useState([]);

// const addNumbers = () => {
//   const randomNumber = Math.round(Math.random()*10);
//   // console.log(randomNumber);
//   setNumbers([...numbers, randomNumber]);
// };


// const [value, setValue] = useState(0); // Хук useState повертає масив із двох елементів: перший - поточне значення стану, другий - функцію для його зміни, яку можна використовувати де завгодно, наприклад, в обробнику подій. React буде зберігати цей стан між рендерами. Використовуючи деструктуризацію, можна задати будь-які імена змінних.
// const [input, setInput] = useState("");

// // Очистка поля ввода
// // Добавление состояния displayText:
// const [displayText, setDisplayText] = useState("");
// const [isActive, setIsActive] = useState(false); // перемыкач  кнопки 

// const text = isActive ? "Click me" : "Clicked";

// useEffect(() => {
//     console.log(`Setting document title to: You clicked ${value} times`);
//     document.querySelector("p").textContent = `You clicked ${value} times`;
//   }); // Запускается только при изменении `value`
  
// // useEffect выполняет функцию, которую вы ему передали, после того как компонент рендерится (отрисовывается) на экране.
// // В данном случае, функция внутри useEffect обновляет заголовок документа (document.title) с текстом, который включает текущее значение value.
//   return (
//     <>
//     <HomePage />
//     <div className={styles.container}>
//       <ul>
//         {numbers.map((num) => <li key={nanoid()}>{num}</li>)}
//       </ul>
//       <button className={styles.btn} onClick={addNumbers}>Add random number</button>
//     <p>{value}</p>
//       <button className={styles.btn} type="button" onClick={() => setValue(value + 1)}>
//         Increment value by 1
//       </button>
//       <form onSubmit={(e)=> {e.preventDefault(); setDisplayText(input); setInput("")}}>
//         <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>  {/* Атрибут value в элементе <input> отвечает за текущее значение, которое отображается в поле ввода. */}
//         <div>{displayText}</div>
//       </form>
//       <button className={styles.btn} onClick={() => setIsActive(prevState => !prevState)}>{text}</button> {/* или второй вариант  setIsActive(isActive => !isActive)*/ }
//     {/* prevState означает "предыдущее состояние". Вы можете использовать любое имя для этого аргумента. */}
//     </div>
//     </>
//   );
// };

// export default SwitcherBackground;


// Когда использовать useEffect:

// Работа с API: Получение данных с сервера при загрузке компонента.
// import React, { useState, useEffect } from 'react';

// const DataFetchingComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании компонента

//   return (
//     <div>
//       {data ? <p>Data: {data}</p> : <p>Loading...</p>}
//     </div>
//   );
// };

// Подписки: Подписка на события (например, WebSocket, события DOM) и их последующая отписка.
// import React, { useState, useEffect } from 'react';

// const ResizeComponent = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     // Функция очистки события
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Эффект выполнится только один раз при монтировании компонента

//   return (
//     <div>
//       <p>Window width: {windowWidth}</p>
//     </div>
//   );
// };

// Изменение заголовка документа: Изменение заголовка страницы в зависимости от состояния компонента.
// import React, { useState, useEffect } from 'react';

// const TitleComponent = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }, [count]); // Эффект выполнится каждый раз при изменении count

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// };

// Таймеры: Установка и очистка таймеров (например, setInterval, setTimeout).
// import React, { useState, useEffect } from 'react';

// const TimerComponent = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount(prevCount => prevCount + 1);
//     }, 1000);

//     // Функция очистки интервала
//     return () => clearInterval(intervalId);
//   }, []); // Эффект выполнится только один раз при монтировании компонента

//   return (
//     <div>
//       <p>Count: {count}</p>
//     </div>
//   );
// };

// Очистка ресурсов: Очистка ресурсов при размонтировании компонента, чтобы избежать утечек памяти.
