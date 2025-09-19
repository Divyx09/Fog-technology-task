import React from "react";

const categories = [
  {
    name: "Dining",
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=381&h=480&fit=crop",
  },
  {
    name: "Living",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=381&h=480&fit=crop",
  },
  {
    name: "Bedroom",
    image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=381&h=480&fit=crop",
  },
];

export const BrowseRangeSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[56px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-[62px]">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#333333] text-[32px] tracking-[0] leading-[48px] mb-2">
            Browse The Range
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-xl tracking-[0] leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-[30px]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#333333] text-2xl tracking-[0] leading-[36px]">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};