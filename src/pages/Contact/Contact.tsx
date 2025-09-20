import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";
import { Features } from "../../components/Features/Features";
import { ContactInfoSection } from "./sections/ContactInfoSection/ContactInfoSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const Contact = (): JSX.Element => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact" },
  ];

  return (
    <Layout>
      <Banner title="Contact" breadcrumbs={breadcrumbs} />
      <ContactInfoSection />
      <MainContentSection />
      <Features />
    </Layout>
  );
};
