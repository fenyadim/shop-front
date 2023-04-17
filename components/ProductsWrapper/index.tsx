import React, { useEffect } from "react";
import ProductItem from "@/components/ProductItem";
import { IBasket, IProductsData } from "@/@types";

import styles from "./ProductsWrapper.module.scss";

const ProductsWrapper: React.FC<IProductsData> = ({ products }) => {
  return (
    <div className={styles.wrapper}>
      {products.length !== 0 ? (
        products.map(({ image, volume, name, slug, price, desc }) => (
          <React.Fragment key={slug}>
            <ProductItem
              slug={slug}
              srcImg={image.url}
              name={name}
              brand="Carslan"
              volume={volume}
              price={price}
            />
          </React.Fragment>
        ))
      ) : (
        <h1>Ничего нет!</h1>
      )}
    </div>
  );
};

export default ProductsWrapper;
