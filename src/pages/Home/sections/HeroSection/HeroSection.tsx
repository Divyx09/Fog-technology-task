import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full h-[500px] md:h-[600px] lg:h-[716px] relative">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Hero background"
        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1440&h=716&fit=crop"
      />
      
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content Container - Responsive */}
      <div className="absolute inset-4 md:inset-8 lg:right-[58px] lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:left-auto lg:w-[643px] lg:h-[443px] flex items-center lg:items-start">
        <div className="w-full max-w-lg lg:max-w-none bg-[#fff3e3] rounded-[10px] p-6 md:p-8 lg:p-[62px] mx-auto lg:mx-0">
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
            <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#333333] text-sm md:text-base tracking-[2px] md:tracking-[3px] leading-[normal]">
              New Arrival
            </p>
            
            <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[#b88e2f] text-2xl md:text-4xl lg:text-[52px] tracking-[0] leading-tight lg:leading-[65px]">
              Discover Our<br />
              New Collection
            </h1>
            
            <p className="[font-family:'Poppins',Helvetica] font-medium text-[#333333] text-sm md:text-base lg:text-lg tracking-[0] leading-relaxed lg:leading-[24px] mb-6 md:mb-8 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            
            <Button className="bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-bold text-sm md:text-base px-8 md:px-12 lg:px-[72px] py-3 md:py-4 lg:py-[25px] h-auto w-full sm:w-auto">
              BUY NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};