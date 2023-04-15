import React from "react";
import { GetServerSideProps } from "next";
import ProductsWrapper from "@/components/ProductsWrapper";

const SubCategoryPage: React.FC = ({ products }) => {
  return <ProductsWrapper products={products} />;
};

export default SubCategoryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { subcategory } = context.params;

  const res = await fetch(
    `http://127.0.0.1:1337/api/subcategories?filters[slug][$containsi]=${subcategory}&populate[products][populate]=image`
  );
  const { data } = await res.json();

  return {
    props: { products: data[0].attributes.products.data },
  };
};
