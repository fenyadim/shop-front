import React from "react";
import styles from "./ProductItem.module.scss";
import Button from "@/components/Button";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

interface IProduct {
  slug: string;
  srcImg: string;
  name: string;
  brand: string;
  volume: number;
  price: number;
}

const ProductItem: React.FC<IProduct> = ({
                                           slug,
                                           price,
                                           srcImg,
                                           volume,
                                           brand,
                                           name,
                                         }) => {
  const [onBasket, setOnBasket] = React.useState(false);
  const state = useSelector((state: RootState) => state.basket);

  React.useEffect(() => {
    state.map(({productSlug}) => {
      if (productSlug === slug) {
        setOnBasket(true);
      } else {
        setOnBasket(false);
      }
    });
  }, [state]);

  return (
      <div className={styles.card}>
        <img className={styles.product_img} src={srcImg} alt="image"/>
        <div className={styles.info_wrapper}>
          <h3 className={styles.brand_name}>{brand}</h3>
          <h2 className={styles.product_name}>{name}</h2>
          <div className={styles.info_bottom}>
            <p className={styles.volume}>Объем: {volume}ml</p>
            <Button price={price} slug={slug} onBasket={onBasket}/>
          </div>
        </div>
      </div>
  );
};

export default ProductItem;
