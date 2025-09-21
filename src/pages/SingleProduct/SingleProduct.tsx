import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import { ProductBannerSection } from "./sections/ProductBannerSection/ProductBannerSection";
import { ProductDetailsSection } from "./sections/ProductDetailsSection/ProductDetailsSection";
import { ProductInfoSection } from "./sections/ProductInfoSection/ProductInfoSection";
import { RelatedProductsSection } from "./sections/RelatedProductsSection/RelatedProductsSection";
import { useApp } from "../../context/AppContext";

export const SingleProduct = (): JSX.Element => {
  const { actions, state } = useApp();
  const { products } = state;
  
  // Load products if not already loaded (for breadcrumb navigation)
  useEffect(() => {
    if (products.length === 0) {
      actions.loadProducts();
    }
  }, [products.length, actions]);
  
  return (
    <Layout>
      <ProductBannerSection />
      <ProductDetailsSection />
      <ProductInfoSection />
      <RelatedProductsSection />
    </Layout>
  );
};