import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Link } from "react-router-dom";
import { Share2, BarChart3, Heart } from "lucide-react";

const relatedProducts = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=285&h=301&fit=crop",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=285&h=301&fit=crop",
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=285&h=301&fit=crop",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image:
      "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=285&h=301&fit=crop",
    isNew: true,
  },
];

export const RelatedProductsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-[56px] border-t border-[#d9d9d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-['Poppins'] font-medium text-black text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-[25px]">
            Related Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-[69px]">
          {relatedProducts.map((product) => (
            <Link to={`/shop/${product.id}`} key={product.id}>
              <Card className="group relative bg-[#f4f5f7] border-0 shadow-none overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-[301px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 right-3 md:top-4 lg:top-6 md:right-4 lg:right-6 flex flex-col gap-1 md:gap-2">
                      {product.discount && (
                        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#e97171] rounded-full flex items-center justify-center">
                          <span className="font-['Poppins'] font-medium text-white text-xs md:text-sm lg:text-base">
                            {product.discount}
                          </span>
                        </div>
                      )}
                      {product.isNew && (
                        <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#2ec1ac] rounded-full flex items-center justify-center">
                          <span className="font-['Poppins'] font-medium text-white text-xs md:text-sm lg:text-base">
                            New
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center space-y-4 md:space-y-6 px-4">
                        <Button 
                          className="bg-white text-[#b88e2f] hover:bg-gray-100 font-['Poppins'] font-semibold text-sm md:text-base px-6 md:px-8 lg:px-12 py-2 md:py-3 h-auto"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                        >
                          Add to cart
                        </Button>
                        <div className="flex items-center justify-center gap-3 md:gap-5 text-white">
                          <button 
                            className="flex items-center gap-1 font-['Poppins'] font-semibold text-sm md:text-base hover:text-gray-300 transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                          >
                            <Share2 className="w-4 h-4" />
                            <span className="hidden sm:inline">Share</span>
                          </button>
                          <button 
                            className="flex items-center gap-1 font-['Poppins'] font-semibold text-sm md:text-base hover:text-gray-300 transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                          >
                            <BarChart3 className="w-4 h-4" />
                            <span className="hidden sm:inline">Compare</span>
                          </button>
                          <button 
                            className="flex items-center gap-1 font-['Poppins'] font-semibold text-sm md:text-base hover:text-gray-300 transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                          >
                            <Heart className="w-4 h-4" />
                            <span className="hidden sm:inline">Like</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-4 bg-[#f4f5f7]">
                    <h3 className="font-['Poppins'] font-semibold text-[#3a3a3a] text-lg md:text-xl lg:text-2xl mb-1 md:mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="font-['Poppins'] font-medium text-[#898989] text-sm md:text-base mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 md:gap-4">
                      <span className="font-['Poppins'] font-semibold text-[#3a3a3a] text-lg md:text-xl">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="font-['Poppins'] font-normal text-[#b0b0b0] text-sm md:text-base line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-[#b88e2f] text-[#b88e2f] hover:bg-[#b88e2f] hover:text-white font-['Poppins'] font-semibold text-sm md:text-base px-8 md:px-12 lg:px-[74px] py-2 md:py-3 h-auto transition-all duration-300"
          >
            Show More
          </Button>
        </div>
      </div>
    </section>
  );
};
