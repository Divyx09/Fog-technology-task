import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

export const ProductBannerSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f9f1e7] py-[35px]">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-1.5">
            <BreadcrumbItem>
              <BreadcrumbLink className="font-normal text-base [font-family:'Poppins',Helvetica] text-[#9f9f9f] tracking-[0] leading-[normal]">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRightIcon className="w-5 h-5 text-black" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="font-normal text-base [font-family:'Poppins',Helvetica] text-[#9f9f9f] tracking-[0] leading-[normal]">
                Shop
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <div className="w-px h-[37px] bg-[#9f9f9f]" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-normal text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal]">
                Asgaard sofa
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};