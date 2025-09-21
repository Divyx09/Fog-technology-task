import React from "react";

const features = [
  {
    icon: "/trophy-1.svg",
    alt: "Trophy",
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: "/guarantee.svg",
    alt: "Guarantee",
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: "/shipping.svg",
    alt: "Shipping",
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: "/customer-support.svg",
    alt: "Customer support",
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="flex w-full h-auto relative flex-col items-center justify-center gap-2.5 px-4 py-[50px] md:py-[100px] bg-[#faf3ea]">
      <div className="w-full max-w-[1334px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left p-4 bg-white/50 rounded-lg hover:bg-white/80 transition-colors duration-300"
            >
              <img
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex-shrink-0"
                alt={feature.alt}
                src={feature.icon}
              />

              <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#242424] text-lg md:text-[25px] tracking-[0] leading-tight">
                  {feature.title}
                </div>

                <div className="[font-family:'Poppins',Helvetica] font-medium text-color-gray-3 text-sm md:text-xl tracking-[0] leading-relaxed">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};