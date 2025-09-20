import { TrashIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const cartItems = [
  {
    id: 1,
    name: "Asgaard sofa",
    price: 250000,
    quantity: 1,
    subtotal: 250000,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=108&h=105&fit=crop",
  },
];

export const CartContentSection = (): JSX.Element => {
  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <section className="w-full bg-white py-[72px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-[30px]">
          {/* Cart Items */}
          <div className="flex-1">
            {/* Header */}
            <div className="bg-[#f9f1e7] h-[55px] flex items-center px-[140px] mb-[55px]">
              <div className="grid grid-cols-4 gap-4 w-full">
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                  Product
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-base text-center">
                  Price
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-base text-center">
                  Quantity
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-base text-center">
                  Subtotal
                </div>
              </div>
            </div>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center px-[140px] py-[25px] border-b border-gray-100">
                <div className="grid grid-cols-4 gap-4 w-full items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[108px] h-[105px] object-cover rounded-[10px] bg-[#f9f1e7]"
                    />
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-center [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                    Rs. {item.price.toLocaleString()}
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 border border-[#9f9f9f] rounded flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base mx-auto">
                      {item.quantity}
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-base">
                      Rs. {item.subtotal.toLocaleString()}
                    </span>
                    <Button variant="ghost" size="icon" className="text-[#b88e2f] hover:bg-[#b88e2f]/10">
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Totals */}
          <Card className="w-[393px] h-[390px] bg-[#f9f1e7] border-0 shadow-none">
            <CardContent className="p-[75px]">
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[32px] text-center mb-[61px]">
                Cart Totals
              </h2>
              
              <div className="space-y-[31px] mb-[42px]">
                <div className="flex justify-between">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                    Subtotal
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-base">
                    Total
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#b88e2f] text-xl">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <Button className="w-full h-[58px] bg-transparent border-2 border-black text-black hover:bg-black hover:text-white [font-family:'Poppins',Helvetica] font-normal text-xl rounded-[15px]">
                Check Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};