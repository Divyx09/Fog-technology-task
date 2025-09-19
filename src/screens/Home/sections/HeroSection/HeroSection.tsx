import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full h-[716px] relative">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Hero background"
        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1440&h=716&fit=crop"
      />
      
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="absolute right-[58px] top-1/2 transform -translate-y-1/2 w-[643px] h-[443px] bg-[#fff3e3] rounded-[10px] p-[62px]">
        <div className="space-y-4">
          <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#333333] text-base tracking-[3px] leading-[normal]">
            New Arrival
          </p>
          
          <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[#b88e2f] text-[52px] tracking-[0] leading-[65px]">
            Discover Our<br />
            New Collection
          </h1>
          
          <p className="[font-family:'Poppins',Helvetica] font-medium text-[#333333] text-lg tracking-[0] leading-[24px] mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          
          <Button className="bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-bold text-base px-[72px] py-[25px] h-auto">
            BUY NOW
          </Button>
        </div>
      </div>
    </section>
  );
};