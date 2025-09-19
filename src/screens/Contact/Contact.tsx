import React from "react";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { ContactInfoSection } from "./sections/ContactInfoSection/ContactInfoSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const Contact = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] flex flex-col">
      <HeaderSection />
      <ContactInfoSection />
      <MainContentSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
};
