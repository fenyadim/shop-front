import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { ProductsWrapper } from "@/components";
import { IProductsData, IQueryParam } from "@/@types";


const CategoryPage: NextPage<IProductsData> = ({ products }) => {
  return <ProductsWrapper products={products} />;
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.params as IQueryParam;

  const res = await fetch(
    `${process.env.URL_BACK}/api/categoriesp?filters[slug][$containsi]=${category}&populate[products][populate][0]=image`
  );
  const { data } = await res.json();

  return {
    props: { products: data[0].products },
  };
};
