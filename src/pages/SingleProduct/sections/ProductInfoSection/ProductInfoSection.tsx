import React, { useState } from "react";
import { StarIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const ProductInfoSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="w-full bg-white py-8 lg:py-12 border-t border-[#d9d9d9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:gap-[52px] mb-6 lg:mb-[37px]">
          {[
            { id: "description", label: "Description" },
            { id: "additional", label: "Additional Info" },
            { id: "reviews", label: "Reviews [5]" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`[font-family:'Poppins',Helvetica] text-lg sm:text-xl lg:text-2xl px-4 py-2 transition-colors ${
                activeTab === tab.id
                  ? "font-medium text-black border-b-2 border-[#b88e2f]"
                  : "font-normal text-[#9f9f9f] hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "description" && (
            <div className="space-y-6 lg:space-y-[30px]">
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm sm:text-base leading-relaxed lg:leading-[24px]">
                Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              </p>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm sm:text-base leading-relaxed lg:leading-[24px]">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
              </p>
              
              {/* Images - Responsive Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[29px] mt-6 lg:mt-[36px]">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=605&h=348&fit=crop"
                  alt="Product detail 1"
                  className="w-full h-[200px] sm:h-[250px] lg:h-[348px] object-cover rounded-[10px] bg-[#f9f1e7]"
                />
                <img
                  src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=605&h=348&fit=crop"
                  alt="Product detail 2"
                  className="w-full h-[200px] sm:h-[250px] lg:h-[348px] object-cover rounded-[10px] bg-[#f9f1e7]"
                />
              </div>
            </div>
          )}

          {activeTab === "additional" && (
            <div className="space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div className="space-y-2">
                  <h4 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-base lg:text-lg">Specifications</h4>
                  <div className="space-y-1 text-sm lg:text-base text-[#9f9f9f]">
                    <p>• Dimensions: 24cm x 16cm x 10cm</p>
                    <p>• Weight: 3.2 kg</p>
                    <p>• Material: Premium fabric and wood</p>
                    <p>• Color options: Multiple available</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-base lg:text-lg">Care Instructions</h4>
                  <div className="space-y-1 text-sm lg:text-base text-[#9f9f9f]">
                    <p>• Clean with dry cloth only</p>
                    <p>• Avoid direct sunlight</p>
                    <p>• Keep away from moisture</p>
                    <p>• Professional cleaning recommended</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              {/* Reviews Summary */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-[#f9f1e7] rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-5 h-5 fill-[#ffc700] text-[#ffc700]"
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">4.8</span>
                </div>
                <span className="text-[#9f9f9f] text-sm lg:text-base">Based on 5 customer reviews</span>
              </div>
              
              {/* Individual Reviews */}
              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b border-gray-200 pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className="w-4 h-4 fill-[#ffc700] text-[#ffc700]"
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-sm lg:text-base">Customer {review}</span>
                      <span className="text-[#9f9f9f] text-xs lg:text-sm">2 days ago</span>
                    </div>
                    <p className="text-[#9f9f9f] text-sm lg:text-base">Great product! Excellent quality and fast delivery. Highly recommended.</p>
                  </div>
                ))}
              </div>
              
              <Button className="w-full sm:w-auto bg-[#b88e2f] hover:bg-[#a67d28] text-white">
                Write a Review
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};