import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";
import { Features } from "../../components/Features/Features";
import { ComparisonContentSection } from "./sections/ComparisonContentSection/ComparisonContentSection";

export const ProductComparison = (): JSX.Element => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Comparison" },
  ];

  return (
    <Layout>
      <Banner title="Product Comparison" breadcrumbs={breadcrumbs} />
      <ComparisonContentSection />
      <Features />
    </Layout>
  );
};