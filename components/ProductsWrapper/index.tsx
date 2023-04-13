import React from "react";
import styles from "./ProductsWrapper.module.scss";
import ProductItem from "@/components/ProductItem";

const ProductsWrapper: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ProductItem
        srcImg="image/product.png"
        name="Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
      <ProductItem
        srcImg="image/product.png"
        name="Lasting Cover Foundation Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
      <ProductItem
        srcImg="image/product.png"
        name="Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
      <ProductItem
        srcImg="image/product.png"
        name="Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
      <ProductItem
        srcImg="image/product.png"
        name="Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
      <ProductItem
        srcImg="image/product.png"
        name="Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
      <ProductItem
        srcImg="image/product.png"
        name="Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
    </div>
  );
};

export default ProductsWrapper;
