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

export const ContactInfoSection = (): JSX.Element => {
  return (
    <section className="w-full h-[316px] relative">
      <img
        className="absolute -top-1.5 left-0 w-full h-[328px] blur-[3px] object-cover"
        alt="Rectangle"
        src="/rectangle-1.png"
      />

      <div className="absolute top-[61px] left-1/2 transform -translate-x-1/2 w-[198px] h-[133px]">
        <h1 className="absolute top-[61px] left-0 font-medium text-5xl [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal]">
          Contact
        </h1>

        <img
          className="absolute top-0 left-[60px] w-[77px] h-[77px] object-cover"
          alt="Meubel house logos"
          src="/meubel-house-logos-05-1.png"
        />
      </div>

      <div className="absolute top-[195px] left-1/2 transform -translate-x-1/2">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-1.5">
            <BreadcrumbItem>
              <BreadcrumbLink className="font-medium text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal]">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRightIcon className="w-5 h-5" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-light text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal]">
                Contact
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};
