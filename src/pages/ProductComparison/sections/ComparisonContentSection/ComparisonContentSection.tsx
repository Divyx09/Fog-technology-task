import { StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const products = [
  {
    id: 1,
    name: "Asgaard Sofa",
    price: "Rs. 250,000.00",
    rating: 4.7,
    reviews: 204,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=280&h=177&fit=crop",
  },
  {
    id: 2,
    name: "Outdoor Sofa Set",
    price: "Rs. 224,000.00",
    rating: 4.2,
    reviews: 145,
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=280&h=177&fit=crop",
  },
];

const specifications = [
  { label: "Sales Package", values: ["1 sectional sofa", "1 Three Seater, 2 Single Seater"] },
  { label: "Model Number", values: ["TFCBLIGRBL6SRHS", "DTUBLIGRBL568"] },
  { label: "Secondary Material", values: ["Solid Wood", "Solid Wood"] },
  { label: "Configuration", values: ["L-shaped", "L-shaped"] },
  { label: "Upholstery Material", values: ["Fabric + Cotton", "Fabric + Cotton"] },
  { label: "Upholstery Color", values: ["Bright Grey & Lion", "Bright Grey & Lion"] },
];

const dimensions = [
  { label: "Filling Material", values: ["Foam", "Matte"] },
  { label: "Finish Type", values: ["Bright Grey & Lion", "Bright Grey & Lion"] },
  { label: "Adjustable Headrest", values: ["No", "Yes"] },
  { label: "Maximum Load Capacity", values: ["280 KG", "300 KG"] },
  { label: "Origin of Manufacture", values: ["India", "India"] },
];

const warranty = [
  { label: "Warranty Summary", values: ["1 Year Manufacturing Warranty", "1.2 Year Manufacturing Warranty"] },
  { label: "Warranty Service Type", values: ["For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com", "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com"] },
  { label: "Covered in Warranty", values: ["Warranty Against Manufacturing Defect", "Warranty of the product is limited to manufacturing defects only."] },
  { label: "Not Covered in Warranty", values: ["The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.", "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage."] },
  { label: "Domestic Warranty", values: ["1 Year", "3 Months"] },
];

export const ComparisonContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[35px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex gap-[52px] mb-[48px]">
          <div className="w-[223px]">
            <h2 className="[font-family:'Poppins',Helvetica] font-medium text-black text-[28px] mb-[25px]">
              Go to Product page for more Products
            </h2>
            <Button 
              variant="ghost" 
              className="[font-family:'Poppins',Helvetica] font-medium text-[#727272] text-xl underline hover:bg-transparent p-0 h-auto"
            >
              View More
            </Button>
          </div>

          {products.map((product) => (
            <div key={product.id} className="w-[280px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[177px] object-cover rounded-[10px] bg-[#f9f1e7] mb-[16px]"
              />
              <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-2xl mb-[8px]">
                {product.name}
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg mb-[8px]">
                {product.price}
              </p>
              <div className="flex items-center gap-[5px] mb-[16px]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg">
                  {product.rating}
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-[#ffc700] text-[#ffc700]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm">
                  {product.reviews} Review
                </span>
              </div>
            </div>
          ))}

          <div className="w-[242px]">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-2xl mb-[25px]">
              Add A Product
            </h3>
            <Button className="w-full h-[39px] bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-semibold text-sm rounded-md">
              Choose a Product
            </Button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="space-y-[48px]">
          {/* General */}
          <div>
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-[28px] mb-[33px]">
              General
            </h3>
            <div className="space-y-[30px]">
              {specifications.map((spec, index) => (
                <div key={index} className="flex gap-[52px]">
                  <div className="w-[223px]">
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                      {spec.label}
                    </span>
                  </div>
                  {spec.values.map((value, valueIndex) => (
                    <div key={valueIndex} className="w-[280px]">
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                        {value}
                      </span>
                    </div>
                  ))}
                  <div className="w-[242px]"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-[28px] mb-[33px]">
              Product
            </h3>
            <div className="space-y-[30px]">
              {dimensions.map((dim, index) => (
                <div key={index} className="flex gap-[52px]">
                  <div className="w-[223px]">
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                      {dim.label}
                    </span>
                  </div>
                  {dim.values.map((value, valueIndex) => (
                    <div key={valueIndex} className="w-[280px]">
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                        {value}
                      </span>
                    </div>
                  ))}
                  <div className="w-[242px]"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty */}
          <div>
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-[28px] mb-[33px]">
              Warranty
            </h3>
            <div className="space-y-[30px]">
              {warranty.map((item, index) => (
                <div key={index} className="flex gap-[52px]">
                  <div className="w-[223px]">
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                      {item.label}
                    </span>
                  </div>
                  {item.values.map((value, valueIndex) => (
                    <div key={valueIndex} className="w-[280px]">
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                        {value}
                      </span>
                    </div>
                  ))}
                  <div className="w-[242px]"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart Buttons */}
          <div className="flex gap-[52px] pt-[48px]">
            <div className="w-[223px]"></div>
            {products.map((product) => (
              <div key={product.id} className="w-[280px]">
                <Button className="w-full h-[64px] bg-[#b88e2f] hover:bg-[#a67d28] text-white [font-family:'Poppins',Helvetica] font-normal text-xl rounded-md">
                  Add To Cart
                </Button>
              </div>
            ))}
            <div className="w-[242px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};