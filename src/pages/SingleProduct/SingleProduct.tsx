import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { ProductBannerSection } from "./sections/ProductBannerSection/ProductBannerSection";
import { ProductDetailsSection } from "./sections/ProductDetailsSection/ProductDetailsSection";
import { ProductInfoSection } from "./sections/ProductInfoSection/ProductInfoSection";
import { RelatedProductsSection } from "./sections/RelatedProductsSection/RelatedProductsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const SingleProduct = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] flex flex-col">
      <HeaderSection />
      <ProductBannerSection />
      <ProductDetailsSection />
      <ProductInfoSection />
      <RelatedProductsSection />
      <FooterSection />
    </div>
  );
};