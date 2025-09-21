import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BannerProps {
  title: string;
  backgroundImage?: string;
  breadcrumbs: BreadcrumbItem[];
}

export const Banner: React.FC<BannerProps> = ({ 
  title, 
  backgroundImage = "/rectangle-1.png", 
  breadcrumbs 
}) => {
  return (
    <section className="w-full h-48 sm:h-64 md:h-80 lg:h-[316px] relative">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Page banner background"
        src={backgroundImage}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <img
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-[77px] md:h-[77px] object-cover mb-2 sm:mb-4"
          alt="Meubel house logos"
          src="/meubel-house-logos-05-1.png"
        />
        
        {/* Title */}
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-tight text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
          {title}
        </h1>
      </div>

      {/* Breadcrumbs */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-[61px] left-1/2 transform -translate-x-1/2 px-4">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-1 sm:gap-1.5">
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {breadcrumb.href ? (
                    <BreadcrumbLink asChild>
                      <Link
                        to={breadcrumb.href}
                        className="font-medium text-xs sm:text-sm md:text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal] hover:text-[#b88e2f] transition-colors"
                      >
                        {breadcrumb.label}
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="font-light text-xs sm:text-sm md:text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal]">
                      {breadcrumb.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRightIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};