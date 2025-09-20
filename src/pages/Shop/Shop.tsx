import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { ShopBannerSection } from "./sections/ShopBannerSection/ShopBannerSection";
import { FilterSection } from "./sections/FilterSection/FilterSection";
import { ProductGridSection } from "./sections/ProductGridSection/ProductGridSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const Shop = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] flex flex-col">
      <HeaderSection />
      <ShopBannerSection />
      <FilterSection />
      <ProductGridSection />
      <PaginationSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
};