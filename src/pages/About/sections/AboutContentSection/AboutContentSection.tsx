import React from "react";

export const AboutContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-4xl tracking-[0] leading-[48px] mb-6">
              Our Story
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              Founded in 2010, Furniro has been dedicated to creating beautiful, functional furniture that transforms houses into homes. Our journey began with a simple vision: to make high-quality, stylish furniture accessible to everyone.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              Over the years, we've grown from a small workshop to a leading furniture brand, but our commitment to craftsmanship and customer satisfaction remains unchanged. Every piece we create is designed with care, built to last, and crafted to inspire.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px]">
              Today, we continue to innovate and evolve, bringing you the latest in furniture design while maintaining the timeless quality that has made us who we are.
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
              Our Mission
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              At Furniro, our mission is to create furniture that not only looks beautiful but also enhances the way you live. We believe that your home should be a reflection of your personality and a sanctuary where you can relax and recharge.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px] mb-6">
              We're committed to sustainable practices, using responsibly sourced materials and eco-friendly manufacturing processes. Our goal is to create furniture that's not only good for your home but also good for the planet.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-base tracking-[0] leading-[24px]">
              Every day, we strive to exceed your expectations with exceptional quality, innovative design, and outstanding customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};