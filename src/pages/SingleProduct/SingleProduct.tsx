import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { ProductBannerSection } from "./sections/ProductBannerSection/ProductBannerSection";
import { ProductDetailsSection } from "./sections/ProductDetailsSection/ProductDetailsSection";
import { ProductInfoSection } from "./sections/ProductInfoSection/ProductInfoSection";
import { RelatedProductsSection } from "./sections/RelatedProductsSection/RelatedProductsSection";

export const SingleProduct = (): JSX.Element => {
  return (
    <Layout>
      <ProductBannerSection />
      <ProductDetailsSection />
      <ProductInfoSection />
      <RelatedProductsSection />
    </Layout>
  );
};