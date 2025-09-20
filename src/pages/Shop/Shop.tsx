import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";
import { Features } from "../../components/Features/Features";
import { FilterSection } from "./sections/FilterSection/FilterSection";
import { ProductGridSection } from "./sections/ProductGridSection/ProductGridSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";

export const Shop = (): JSX.Element => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Shop" },
  ];

  return (
    <Layout>
      <Banner title="Shop" breadcrumbs={breadcrumbs} />
      <FilterSection />
      <ProductGridSection />
      <PaginationSection />
      <Features />
    </Layout>
  );
};