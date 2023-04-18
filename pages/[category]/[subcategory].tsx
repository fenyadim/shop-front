import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { IProductsData, IQueryParam } from "@/@types";
import { ProductsWrapper } from "@/components";

const SubCategoryPage: NextPage<IProductsData> = ({ products }) => {
  return <ProductsWrapper products={products} />;
};

export default SubCategoryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { subcategory } = context.params as IQueryParam;

  const res = await fetch(
    `${process.env.URL_BACK}/api/subcategories?filters[slug][$containsi]=${subcategory}&populate[products][populate]=image`
  );
  const { data } = await res.json();

  return {
    props: { products: data[0].products },
  };
};
