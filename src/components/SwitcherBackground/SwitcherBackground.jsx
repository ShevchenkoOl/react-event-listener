import { useEffect, useState } from 'react';
import HomePage from 'components/HomePage/HomePage';

import styles from './switcher.module.css';

// const SwitcherBackground = () => {
// //   const [isDisabled, setIsDisabled] = useState(true);
//   const [color, setColor] = useState('#fff');
//   const inderval = 1000;

//   const getRandomHexColor = () => {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   };

//   const startChangingColor = () => {
//     setInterval(() => {
//       return setColor(getRandomHexColor);
//     }, inderval);
//     // setIsDisabled(true);
//   };

//   const stopChangingColor = () => {
//     clearInterval(inderval)
//     setColor("#fff");
//     console.log("Stop")    
//       };

//   return (
//     <>
//       <HomePage />
//       <div className={styles.container} style={{ backgroundColor: color }}>
//         <button
//           className={styles.btn}
//           id="btnStart"
//         //   disabled={!isDisabled}
//           onClick={startChangingColor}
//         >
//           Start
//         </button>
//         <button
//           className={styles.btn}
//           id="btnStop"
//         //   disabled={isDisabled}
//           onClick={stopChangingColor}
//         >
//           Stop
//         </button>
//       </div>
//     </>
//   );
// };

// export default SwitcherBackground;

// Перший, простий і найважливіший хук. З назви зрозуміло, що він пов'язаний з станом компонента. Саме завдяки йому у функціональних компонентів з'явився внутрішній стан.

const SwitcherBackground = () => {
const [value, setValue] = useState(0); // Хук useState повертає масив із двох елементів: перший - поточне значення стану, другий - функцію для його зміни, яку можна використовувати де завгодно, наприклад, в обробнику подій. React буде зберігати цей стан між рендерами. Використовуючи деструктуризацію, можна задати будь-які імена змінних.
const [input, setInput] = useState("");

// Очистка поля ввода
// Добавление состояния displayText:
const [displayText, setDisplayText] = useState("");

const [isActive, setIsActive] = useState(false); // перемыкач  кнопки 

const text = isActive ? "Click me" : "Clicked";

useEffect(() => {
    console.log(`Setting document title to: You clicked ${value} times`);
    document.querySelector("p").textContent = `You clicked ${value} times`;
  }); // Запускается только при изменении `value`
  
// useEffect выполняет функцию, которую вы ему передали, после того как компонент рендерится (отрисовывается) на экране.
// В данном случае, функция внутри useEffect обновляет заголовок документа (document.title) с текстом, который включает текущее значение value.
  return (
    <>
    <HomePage />
    <div className={styles.container}>
    <p>{value}</p>
      <button className={styles.btn} type="button" onClick={() => setValue(value + 1)}>
        Increment value by 1
      </button>
      <form onSubmit={(e)=> {e.preventDefault(); setDisplayText(input); setInput("")}}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>  {/* Атрибут value в элементе <input> отвечает за текущее значение, которое отображается в поле ввода. */}
        <div>{displayText}</div>
      </form>
      <button className={styles.btn} onClick={() => setIsActive(prevState => !prevState)}>{text}</button> {/* или второй вариант  setIsActive(isActive => !isActive)*/ }
    </div>
    </>
  );
};

export default SwitcherBackground;