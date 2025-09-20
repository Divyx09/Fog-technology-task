import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";
import { Features } from "../../components/Features/Features";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const Contact = (): JSX.Element => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

  return (
    <Layout>
      <Banner title="Contact" breadcrumbs={breadcrumbs} />
      {/* <ContactInfoSection /> */}
      <MainContentSection />
      <Features />
    </Layout>
  );
};
