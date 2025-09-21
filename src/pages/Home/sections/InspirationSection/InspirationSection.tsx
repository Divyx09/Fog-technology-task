import React from "react";
import { Button } from "../../../../components/ui/button";
import { ChevronRightIcon } from "lucide-react";

export const InspirationSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#fcf8f3] py-8 md:py-11">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-[42px]">
          {/* Text Content */}
          <div className="w-full lg:flex-1 lg:max-w-[422px] text-center lg:text-left">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-xl sm:text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-tight lg:leading-[48px] mb-3 md:mb-4">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-medium text-[#616161] text-sm md:text-base tracking-[0] leading-relaxed mb-5 md:mb-6">
              Our designer already made a lot of beautiful prototipe of rooms that inspire you
            </p>
            <Button className="bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-semibold text-sm md:text-base px-6 md:px-9 py-2.5 md:py-3 h-auto w-full sm:w-auto">
              Explore More
            </Button>
          </div>

          {/* Images Section */}
          <div className="w-full lg:flex-1">
            {/* Mobile Layout - Stacked */}
            <div className="flex flex-col gap-4 lg:hidden">
              {/* Main Featured Image */}
              <div className="relative w-full">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=404&h=582&fit=crop"
                  alt="Inner Peace"
                  className="w-full h-[280px] sm:h-[320px] object-cover rounded-lg"
                />
                
                {/* Overlay Content */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm p-3 sm:p-4 max-w-[160px] sm:max-w-[180px] rounded-lg shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-[#616161] text-xs sm:text-sm">
                      01
                    </span>
                    <div className="w-3 h-px bg-[#616161]" />
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-[#616161] text-xs sm:text-sm">
                      Bed Room
                    </span>
                  </div>
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-base sm:text-lg tracking-[0] leading-tight">
                    Inner Peace
                  </h3>
                </div>
                
                {/* Arrow Button */}
                <Button
                  size="icon"
                  className="absolute bottom-3 right-3 bg-[#b88e2f] hover:bg-[#a67d28] w-9 h-9 sm:w-10 sm:h-10"
                >
                  <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </Button>
              </div>

              {/* Mobile Second Image */}
              <div className="w-full">
                <img
                  src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=372&h=486&fit=crop"
                  alt="Dining room"
                  className="w-full h-[220px] sm:h-[250px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Desktop Layout - Side by Side */}
            <div className="hidden lg:flex gap-6">
              {/* Main Featured Image */}
              <div className="relative flex-1 max-w-[404px]">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=404&h=582&fit=crop"
                  alt="Inner Peace"
                  className="w-full h-[582px] object-cover rounded-lg"
                />
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-8 max-w-[217px] rounded-lg">
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
                
                {/* Arrow Button */}
                <Button
                  size="icon"
                  className="absolute bottom-6 right-6 bg-[#b88e2f] hover:bg-[#a67d28] w-12 h-12"
                >
                  <ChevronRightIcon className="w-6 h-6 text-white" />
                </Button>
              </div>

              {/* Desktop Secondary Image */}
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
      </div>
    </section>
  );
};