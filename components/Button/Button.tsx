import React from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "./Button.module.scss";

import {
  ADD_PRODUCT,
  DECREASE_PRODUCT,
  DELETE_PRODUCT,
  INCREASE_PRODUCT,
  getBasket,
  IBasketData,
} from "@/redux/basketSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Button: React.FC<{
  price: number;
  slug: string;
}> = ({ price, slug }) => {
  const [inBasket, setInBasket] = React.useState<boolean>(false);
  const [count, setCount] = React.useState<number>(1);
  const state: IBasketData[] = useAppSelector(getBasket);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const find = state.find((elem) => {
      if (elem.slug === slug) {
        return elem;
      }
    });
    if (find) {
      setInBasket(true);
      setCount(find.count);
    } else {
      setInBasket(false);
    }
  }, [slug, state]);

  const onClickMinus = () => {
    if (count > 1) {
      dispatch(DECREASE_PRODUCT(slug));
    } else {
      dispatch(DELETE_PRODUCT(slug));
    }
  };

  return (
    <>
      {!inBasket ? (
        <div
          className={styles.button_wrapper}
          onClick={() => dispatch(ADD_PRODUCT(slug))}
        >
          <p className={styles.price_title}>{price} руб.</p>
          <Image src="/image/Basket.svg" alt="Cart" width={13} height={13} />
        </div>
      ) : (
        <div className={cn(styles.button_wrapper, styles.button_active)}>
          <button
            className={styles.plus}
            onClick={() => dispatch(INCREASE_PRODUCT(slug))}
          />
          <p>{count}</p>
          <button onClick={onClickMinus} />
        </div>
      )}
    </>
  );
};

export default Button;
