import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { BrowseRangeSection } from "./sections/BrowseRangeSection/BrowseRangeSection";
import { ProductsSection } from "./sections/ProductsSection/ProductsSection";
import { InspirationSection } from "./sections/InspirationSection/InspirationSection";
import { FurnitureGallerySection } from "./sections/FurnitureGallerySection/FurnitureGallerySection";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex flex-col overflow-hidden">
      <HeaderSection />
      <main className="flex-1 w-full">
        <HeroSection />
        <BrowseRangeSection />
        <ProductsSection />
        <InspirationSection />
        <FurnitureGallerySection />
        <ContactFormSection />
      </main>
      <FooterSection />
    </div>
  );
};