import React from "react";
import Image from "next/image";
import styles from "./Button.module.scss";

import cartImg from "../../public/image/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ADD_PRODUCT } from "@/redux/basketSlice";

interface IState {
  productSlug: string;
  count: number;
}

function reducer(state: IState[], action) {
  const { type, payload } = action;

  switch (type) {
    case "addProduct":
      return [...state, { productSlug: payload, count: 1 }];

    case "incProduct": {
      return state.map((products, index) => {
        if (products.productSlug === payload) {
          return {
            ...products,
            count: products.count + 1,
          };
        } else {
          return products;
        }
      });
    }

    case "decProduct":
      return state.map((products, index) => {
        if (products.productSlug === payload) {
          if (products.count > 0) {
            return {
              ...products,
              count: products.count - 1,
            };
          } else {
            return {
              ...products,
              count: 0,
            };
          }
        } else {
          return products;
        }
      });

    default:
      return state;
  }
}

const Button: React.FC<{ price: number; slug: string; onBasket: boolean }> = ({
  price,
  slug,
  onBasket,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      {!onBasket ? (
        <div
          className={styles.button_wrapper}
          onClick={() => dispatch({ type: ADD_PRODUCT, payload: slug })}
        >
          <p>{price} руб.</p>
          <Image src={cartImg} alt="Cart" width={13} height={13} />
        </div>
      ) : (
        <div className={styles.button_wrapper}>
          <button>-</button>
          <p>1</p>
          <button
            onClick={() => dispatch({ type: "incProduct", payload: slug })}
          >
            +
          </button>
        </div>
      )}
    </>
  );
};

export default Button;
