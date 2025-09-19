import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
    image: "https://images.pexels.com/photos/586769/pexels-photo-586769.jpeg?auto=compress&cs=tinysrgb&w=285&h=301&fit=crop",
    isNew: false,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=285&h=301&fit=crop",
    isNew: false,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=285&h=301&fit=crop",
    isNew: false,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=285&h=301&fit=crop",
    isNew: true,
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=285&h=301&fit=crop",
    isNew: false,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=285&h=301&fit=crop",
    isNew: true,
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
    image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=285&h=301&fit=crop",
    isNew: false,
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=285&h=301&fit=crop",
    isNew: true,
  },
];

export const ProductsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[56px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-[40px] tracking-[0] leading-[48px]">
            Our Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative bg-[#f4f5f7] border-0 shadow-none overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[301px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-6 right-6 flex flex-col gap-2">
                    {product.discount && (
                      <div className="w-12 h-12 bg-[#e97171] rounded-full flex items-center justify-center">
                        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base">
                          {product.discount}
                        </span>
                      </div>
                    )}
                    {product.isNew && (
                      <div className="w-12 h-12 bg-[#2ec1ac] rounded-full flex items-center justify-center">
                        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base">
                          New
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <Button className="bg-white text-[#b88e2f] hover:bg-gray-100 [font-family:'Poppins',Helvetica] font-semibold text-base px-12 py-3">
                        Add to cart
                      </Button>
                      <div className="flex items-center justify-center gap-5 text-white">
                        <button className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-semibold text-base hover:text-gray-300">
                          Share
                        </button>
                        <button className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-semibold text-base hover:text-gray-300">
                          Compare
                        </button>
                        <button className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-semibold text-base hover:text-gray-300">
                          Like
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#f4f5f7]">
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-2xl mb-2">
                    {product.name}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-medium text-[#898989] text-base mb-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#3a3a3a] text-xl">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-[#b0b0b0] text-base line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-[#b88e2f] text-[#b88e2f] hover:bg-[#b88e2f] hover:text-white [font-family:'Poppins',Helvetica] font-semibold text-base px-[74px] py-3 h-auto"
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};