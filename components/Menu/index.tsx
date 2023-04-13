import React from "react";
import styles from "./Menu.module.scss";

const Menu: React.FC = () => {
  return (
    <div className={styles.menu_wrapper}>
      <a href="#">
        <img src="image/Speech Bubble.svg" alt="message" />
      </a>
      <a href="#" className={styles.basket_btn}>
        <img src="image/Basket.svg" alt="basket" />
      </a>
      <a href="#">
        <img src="image/About.svg" alt="about" />
      </a>
    </div>
  );
};

export default Menu;
