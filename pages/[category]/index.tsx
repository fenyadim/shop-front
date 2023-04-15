import React from "react";
import { GetServerSideProps } from "next";
import ProductsWrapper from "@/components/ProductsWrapper";

const CategoryPage: React.FC = ({ products }) => {
  return <ProductsWrapper products={products} />;
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.params;

  const res = await fetch(
    `http://127.0.0.1:1337/api/categoriesp?filters[slug][$containsi]=${category}&populate[products][populate][0]=image`
  );
  const { data } = await res.json();

  return {
    props: { products: data[0].attributes.products.data },
  };
};
