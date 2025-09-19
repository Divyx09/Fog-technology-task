import React from "react";
import { Button } from "../../../../components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export const InspirationSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fcf8f3] py-11">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-[42px]">
          <div className="flex-1 max-w-[422px]">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-[40px] tracking-[0] leading-[48px] mb-2">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-[#616161] text-base tracking-[0] leading-[24px] mb-6">
              Our designer already made a lot of beautiful prototipe of rooms that inspire you
            </p>
            <Button className="bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-semibold text-base px-9 py-3 h-auto">
              Explore More
            </Button>
          </div>

          <div className="flex-1 flex gap-6">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=404&h=582&fit=crop"
                alt="Inner Peace"
                className="w-[404px] h-[582px] object-cover rounded-lg"
              />
              <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm p-8 max-w-[217px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#616161] text-base">
                    01
                  </span>
                  <div className="w-6 h-px bg-[#616161]" />
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#616161] text-base">
                    Bed Room
                  </span>
                </div>
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-[28px] tracking-[0] leading-[33.6px]">
                  Inner Peace
                </h3>
              </div>
              <Button
                size="icon"
                className="absolute bottom-6 right-6 bg-[#b88e2f] hover:bg-[#a67d28] w-12 h-12"
              >
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </Button>
            </div>

            <div className="flex flex-col gap-6">
              <img
                src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=372&h=486&fit=crop"
                alt="Dining room"
                className="w-[372px] h-[486px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};