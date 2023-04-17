import React from "react";
import { GetServerSideProps, NextPage } from "next";
import ProductsWrapper from "@/components/ProductsWrapper";

const SubCategoryPage: NextPage = ({ products }) => {
  return <ProductsWrapper products={products} />;
};

export default SubCategoryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { subcategory } = context.params;

  const res = await fetch(
    `${process.env.URL_BACK}/api/subcategories?filters[slug][$containsi]=${subcategory}&populate[products][populate]=image`
  );
  const { data } = await res.json();

  return {
    props: { products: data[0].products },
  };
};
