import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { BlogBannerSection } from "./sections/BlogBannerSection/BlogBannerSection";
import { BlogContentSection } from "./sections/BlogContentSection/BlogContentSection";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const Blog = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] flex flex-col">
      <HeaderSection />
      <BlogBannerSection />
      <BlogContentSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
};