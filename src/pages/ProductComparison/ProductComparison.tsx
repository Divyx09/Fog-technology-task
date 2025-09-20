import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { ComparisonBannerSection } from "./sections/ComparisonBannerSection/ComparisonBannerSection";
import { ComparisonContentSection } from "./sections/ComparisonContentSection/ComparisonContentSection";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const ProductComparison = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] flex flex-col">
      <HeaderSection />
      <ComparisonBannerSection />
      <ComparisonContentSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
};