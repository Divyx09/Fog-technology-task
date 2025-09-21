import React from "react";

export const AboutContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-4xl tracking-[0] leading-[48px] mb-6">
              Our Journey
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              Since 2010, Furniro has been passionately crafting exceptional furniture that turns living spaces into personal sanctuaries. We started with a clear purpose: making premium, elegant furniture designs available to households everywhere.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              Through the years, we've evolved from a modest artisan workshop into a renowned furniture destination, yet our dedication to superior craftsmanship and customer delight stays at our core. Each creation reflects thoughtful design, enduring quality, and the power to transform spaces.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px]">
              Now, we push boundaries with fresh innovations while preserving the exceptional standards and authentic character that define our brand heritage.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Our workshop"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Our mission"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-4xl tracking-[0] leading-[48px] mb-6">
              Our Purpose
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              Furniro exists to design furniture that transcends mere aesthetics—pieces that elevate your daily living experience. We understand that your home represents your unique identity and serves as your personal retreat for comfort and rejuvenation.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              Environmental responsibility drives our operations through ethical material sourcing and green production methods. We're dedicated to crafting furniture that benefits both your living space and our shared environment.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px]">
              Our daily commitment focuses on surpassing your expectations through remarkable quality, cutting-edge design, and unparalleled customer care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};