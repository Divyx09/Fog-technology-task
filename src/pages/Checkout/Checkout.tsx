import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { CheckoutBannerSection } from "./sections/CheckoutBannerSection/CheckoutBannerSection";
import { CheckoutFormSection } from "./sections/CheckoutFormSection/CheckoutFormSection";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const Checkout = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] flex flex-col">
      <HeaderSection />
      <CheckoutBannerSection />
      <CheckoutFormSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
};