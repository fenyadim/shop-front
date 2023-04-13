import React from "react";
import styles from "./Button.module.scss";

const Button: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className={styles.button_wrapper}>
      <p>{price} руб.</p>
      <img src="image/cart.svg" alt="Cart" />
    </div>
  );
};

export default Button;
