import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { AboutBannerSection } from "./sections/AboutBannerSection/AboutBannerSection";
import { AboutContentSection } from "./sections/AboutContentSection/AboutContentSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";
import { ValuesSection } from "./sections/ValuesSection/ValuesSection";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const About = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] flex flex-col">
      <HeaderSection />
      <AboutBannerSection />
      <AboutContentSection />
      <TeamSection />
      <ValuesSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
};