import React from "react";
import { Button } from "../../../../components/ui/button";

export const PaginationSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-9">
          <Button className="w-[60px] h-[60px] bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-normal text-xl rounded-[10px]">
            1
          </Button>
          <Button
            variant="ghost"
            className="w-[60px] h-[60px] bg-[#f9f1e7] hover:bg-[#b88e2f] hover:text-white text-black [font-family:'Poppins',Helvetica] font-normal text-xl rounded-[10px]"
          >
            2
          </Button>
          <Button
            variant="ghost"
            className="w-[60px] h-[60px] bg-[#f9f1e7] hover:bg-[#b88e2f] hover:text-white text-black [font-family:'Poppins',Helvetica] font-normal text-xl rounded-[10px]"
          >
            3
          </Button>
          <Button
            variant="ghost"
            className="w-[98px] h-[60px] bg-[#f9f1e7] hover:bg-[#b88e2f] hover:text-white text-black [font-family:'Poppins',Helvetica] font-light text-xl rounded-[10px]"
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};