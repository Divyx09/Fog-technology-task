import React from "react";

const values = [
  {
    icon: "🎨",
    title: "Design Excellence",
    description: "We believe in creating furniture that's not just functional, but also beautiful and inspiring."
  },
  {
    icon: "🌱",
    title: "Sustainability",
    description: "Our commitment to the environment drives us to use eco-friendly materials and processes."
  },
  {
    icon: "⚡",
    title: "Quality Craftsmanship",
    description: "Every piece is carefully crafted with attention to detail and built to last for generations."
  },
  {
    icon: "❤️",
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We're here to help you create the home of your dreams."
  }
];

export const ValuesSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-4xl tracking-[0] leading-[48px] mb-4">
            Our Values
          </h2>
          <p className="max-w-2xl mx-auto [font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px]">
            These core values guide everything we do, from the way we design our furniture to how we serve our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-8 rounded-lg hover:bg-[#f9f1e7] transition-colors duration-300">
              <div className="text-6xl mb-6">{value.icon}</div>
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-xl mb-4">
                {value.title}
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base leading-[24px]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};