import { ShoppingBagIcon, TrashIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
}

export const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-[417px] bg-white z-50 shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-[30px] border-b border-[#d9d9d9]">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-2xl">
              Shopping Cart
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="w-6 h-6 p-0 hover:bg-gray-100"
            >
              <XIcon className="w-4 h-4" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-[30px]">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBagIcon className="w-16 h-16 text-[#9f9f9f] mb-4" />
                <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
                  Your cart is empty
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[108px] h-[105px] object-cover rounded-[10px] bg-[#f9f1e7]"
                    />
                    <div className="flex-1">
                      <h3 className="[font-family:'Poppins',Helvetica] font-normal text-black text-base mb-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="[font-family:'Poppins',Helvetica] font-light text-black text-base">
                          {item.quantity}
                        </span>
                        <span className="[font-family:'Poppins',Helvetica] font-light text-black text-xs">
                          X
                        </span>
                        <span className="[font-family:'Poppins',Helvetica] font-medium text-[#b88e2f] text-xs">
                          Rs. {item.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-5 h-5 p-0 text-[#9f9f9f] hover:text-red-500 hover:bg-red-50"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-[30px] border-t border-[#d9d9d9]">
              <div className="flex justify-between items-center mb-[26px]">
                <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-base">
                  Subtotal
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#b88e2f] text-base">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>

              <Separator className="mb-[26px] bg-[#d9d9d9]" />

              <div className="flex gap-[14px]">
                <Button
                  variant="outline"
                  className="flex-1 h-[30px] border border-black rounded-[50px] text-black text-xs hover:bg-black hover:text-white"
                >
                  Cart
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-[30px] border border-black rounded-[50px] text-black text-xs hover:bg-black hover:text-white"
                >
                  Checkout
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-[30px] border border-black rounded-[50px] text-black text-xs hover:bg-black hover:text-white"
                >
                  Comparison
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};