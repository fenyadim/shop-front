import React from "react";
import styles from "./ProductsWrapper.module.scss";
import ProductItem from "@/components/ProductItem";

interface IProductsData {
  products: [
    {
      attributes: {
        desc: string;
        image: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        name: string;
        price: number;
        slug: string;
        volume: number;
      };
    }
  ];
}

const ProductsWrapper: React.FC<IProductsData> = ({ products }) => {
  return (
    <div className={styles.wrapper}>
      {products ? (
        products.map(({ attributes }) => (
          <React.Fragment key={attributes.slug}>
            <ProductItem
              slug={attributes.slug}
              srcImg={`http://localhost:1337${attributes.image.data.attributes.url}`}
              name={attributes.name}
              brand="Carslan"
              volume={attributes.volume}
              price={attributes.price}
            />
          </React.Fragment>
        ))
      ) : (
        <h1>Ничего нет!</h1>
      )}
      <ProductItem
        slug="test"
        srcImg="image/product.png"
        name="Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
      <ProductItem
        slug="test1"
        srcImg="image/product.png"
        name="Lasting Cover Foundation Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
      <ProductItem
        slug="test2"
        srcImg="image/product.png"
        name="Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
      <ProductItem
        slug="test3"
        srcImg="image/product.png"
        name="Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
      <ProductItem
        slug="test4"
        srcImg="image/product.png"
        name="Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
      <ProductItem
        slug="test5"
        srcImg="image/product.png"
        name="Lasting Cover Foundation"
        brand="Carslan"
        volume={30}
        price={2781}
      />
      <ProductItem
        slug="test6"
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
