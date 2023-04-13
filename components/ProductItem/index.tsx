import React from "react";
import styles from "./ProductItem.module.scss";
import Button from "@/components/Button";

interface IProduct {
  srcImg: string;
  name: string;
  brand: string;
  volume: number;
  price: number;
}

const ProductItem: React.FC<IProduct> = ({
  price,
  srcImg,
  volume,
  brand,
  name,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.product_img} src={srcImg} alt="image" />
      <div className={styles.info_wrapper}>
        <h3 className={styles.brand_name}>{brand}</h3>
        <h2 className={styles.product_name}>{name}</h2>
        <div className={styles.info_bottom}>
          <p className={styles.volume}>Объем: {volume}ml</p>
          <Button price={price} />
          {/*<div>*/}
          {/*    <a href="#">{price} руб.</a>*/}
          {/*    <span></span>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
