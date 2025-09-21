import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { useApp } from "../../../../context/AppContext";

export const ProductBannerSection = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { state } = useApp();
  const { products } = state;
  
  // Find the current product to display its name
  const currentProduct = products.find(product => product._id === id);
  const productName = currentProduct?.name || "Product";

  return (
    <section className="w-full bg-[#f9f1e7] py-[35px]">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-1.5">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to="/"
                  className="font-normal text-base [font-family:'Poppins',Helvetica] text-[#9f9f9f] tracking-[0] leading-[normal] hover:text-black transition-colors"
                >
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRightIcon className="w-5 h-5 text-black" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  to="/shop"
                  className="font-normal text-base [font-family:'Poppins',Helvetica] text-[#9f9f9f] tracking-[0] leading-[normal] hover:text-black transition-colors"
                >
                  Shop
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <div className="w-px h-[37px] bg-[#9f9f9f]" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-normal text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal]">
                {productName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};