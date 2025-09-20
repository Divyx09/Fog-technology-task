import React from "react";

export const ContactFormSection = (): JSX.Element => {
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

  return (
    <section className="flex w-full h-auto relative flex-col items-center justify-around gap-2.5 px-0 py-[100px] bg-[#faf3ea]">
      <div className="flex w-full max-w-[1334px] items-center justify-between relative flex-[0_0_auto] px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]"
          >
            <img
              className="relative w-[60px] h-[60px]"
              alt={feature.alt}
              src={feature.icon}
            />

            <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#242424] text-[25px] tracking-[0] leading-[37.5px] whitespace-nowrap">
                {feature.title}
              </div>

              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-medium text-color-gray-3 text-xl tracking-[0] leading-[30px] whitespace-nowrap">
                {feature.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};