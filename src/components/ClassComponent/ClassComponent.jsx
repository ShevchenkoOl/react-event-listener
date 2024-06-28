import React, { Component } from "react";
import HomePage from "components/HomePage/HomePage";

import styles from "../componentStyle.module.css";

class Counter extends Component {
  // Значения по умолчанию для пропсов
  static defaultProps = {
    step: 1,
  };

  // Начальное состояние
  state = {
    value: 0,
  };

  // Обработчик увеличения
  handleIncrement = (evt) => {
    console.log("Increment button was clicked!", evt);
    this.setState((prevState, props) => ({
      value: prevState.value + props.step,
    }));
  };

  // Обработчик уменьшения
  handleDecrement = (evt) => {
    console.log("Decrement button was clicked!", evt);
    this.setState((prevState, props) => ({
      value: prevState.value - props.step,
    }));
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;

    return (
      <>
        <HomePage />
        <div className={styles.container}>
          <h2 className={styles.title}>Counter</h2>
          <span className={styles.value}>{value}</span>
          <button className={styles.btn} type="button" onClick={this.handleIncrement}>
            Increment by {step}
          </button>
          <button className={styles.btn} type="button" onClick={this.handleDecrement}>
            Decrement by {step}
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
