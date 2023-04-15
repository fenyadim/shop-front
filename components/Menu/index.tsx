import React from "react";
import Image from "next/image";
import styles from "./Menu.module.scss";

import messageImg from "../../public/image/Speech Bubble.svg";
import basketImg from "../../public/image/Basket.svg";
import aboutImg from "../../public/image/About.svg";

const Menu: React.FC = () => {
  return (
    <div className={styles.menu_wrapper}>
      <a href="#">
        <Image src={messageImg} alt="message" />
      </a>
      <a href="#" className={styles.basket_btn}>
        <span>1</span>
        <Image src={basketImg} alt="basket" />
      </a>
      <a href="#">
        <Image src={aboutImg} alt="about" />
      </a>
    </div>
  );
};

export default Menu;
