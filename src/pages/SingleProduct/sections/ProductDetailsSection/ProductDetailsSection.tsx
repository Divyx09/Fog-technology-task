import { FacebookIcon, LinkedinIcon, MinusIcon, PlusIcon, StarIcon, TwitterIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

const productImages = [
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=481&h=391&fit=crop",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=76&h=80&fit=crop",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=76&h=80&fit=crop",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=76&h=80&fit=crop",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=76&h=80&fit=crop",
];

export const ProductDetailsSection = (): JSX.Element => {
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="w-full bg-white py-[35px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-[105px]">
          {/* Product Images */}
          <div className="flex gap-[31px]">
            <div className="flex flex-col gap-8">
              {productImages.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-[76px] h-20 object-cover rounded-[10px] bg-[#f9f1e7] cursor-pointer hover:opacity-80"
                />
              ))}
            </div>
            <img
              src={productImages[0]}
              alt="Main product"
              className="w-[481px] h-[500px] object-cover rounded-[10px] bg-[#f9f1e7]"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 max-w-[606px]">
            <h1 className="[font-family:'Poppins',Helvetica] font-normal text-black text-[42px] mb-4">
              Asgaard sofa
            </h1>
            
            <p className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-2xl mb-4">
              Rs. 250,000.00
            </p>

            <div className="flex items-center gap-[18px] mb-[13px]">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4 ? "fill-[#ffc700] text-[#ffc700]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="w-px h-[30px] bg-[#9f9f9f]" />
              <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-[13px]">
                5 Customer Review
              </span>
            </div>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-[13px] mb-[22px]">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>

            {/* Size Selection */}
            <div className="mb-[22px]">
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm mb-3">
                Size
              </p>
              <div className="flex gap-4">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-[30px] h-[30px] rounded-[5px] [font-family:'Poppins',Helvetica] font-normal text-[13px] ${
                      selectedSize === size
                        ? "bg-[#b88e2f] text-white"
                        : "bg-[#f9f1e7] text-black hover:bg-[#b88e2f] hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm mb-3">
                Color
              </p>
              <div className="flex gap-4">
                {[
                  { name: "purple", color: "#816dfa" },
                  { name: "black", color: "#000000" },
                  { name: "brown", color: "#b88e2f" },
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-[30px] h-[30px] rounded-full border-2 ${
                      selectedColor === color.name
                        ? "border-gray-400"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.color }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-[18px] mb-[60px]">
              <div className="flex items-center border border-[#9f9f9f] rounded-[10px] w-[123px] h-16">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 hover:bg-transparent"
                >
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <span className="flex-1 text-center [font-family:'Poppins',Helvetica] font-medium text-black text-base">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 hover:bg-transparent"
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>

              <Button className="w-[215px] h-16 bg-transparent border border-black text-black hover:bg-black hover:text-white [font-family:'Poppins',Helvetica] font-normal text-xl rounded-[15px]">
                Add To Cart
              </Button>

              <Button 
                variant="outline"
                className="w-[215px] h-16 border border-black text-black hover:bg-black hover:text-white [font-family:'Poppins',Helvetica] font-normal text-xl rounded-[15px]"
              >
                + Compare
              </Button>
            </div>

            {/* Product Meta */}
            <div className="space-y-3 border-t border-[#d9d9d9] pt-10">
              <div className="flex">
                <span className="w-20 [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                  SKU
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                  : SS001
                </span>
              </div>
              <div className="flex">
                <span className="w-20 [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                  Category
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                  : Sofas
                </span>
              </div>
              <div className="flex">
                <span className="w-20 [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                  Tags
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                  : Sofa, Chair, Home, Shop
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-20 [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                  Share
                </span>
                <div className="flex items-center gap-6 ml-2">
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">:</span>
                  <div className="flex gap-6">
                    <FacebookIcon className="w-5 h-5 text-black cursor-pointer hover:text-[#b88e2f]" />
                    <LinkedinIcon className="w-5 h-5 text-black cursor-pointer hover:text-[#b88e2f]" />
                    <TwitterIcon className="w-5 h-5 text-black cursor-pointer hover:text-[#b88e2f]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};