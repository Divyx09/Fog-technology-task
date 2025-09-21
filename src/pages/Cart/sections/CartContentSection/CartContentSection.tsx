import { TrashIcon, MinusIcon, PlusIcon } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useApp } from "../../../../context/AppContext";
import { formatPrice, calculateCartTotal } from "../../../../utils";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";

export const CartContentSection = (): JSX.Element => {
  const { state, actions } = useApp();
  const navigate = useNavigate();
  const { cartItems, loading } = state;

  useEffect(() => {
    actions.loadCart();
  }, []);

  const handleQuantityChange = async (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      await actions.removeFromCart(productId);
    } else {
      await actions.updateCartItemQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = async (productId: string) => {
    await actions.removeFromCart(productId);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const total = calculateCartTotal(cartItems);

  if (loading.cart) {
    return (
      <section className="w-full bg-white py-8 md:py-16 lg:py-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-32 sm:h-48 lg:h-64">
            <div className="text-base sm:text-lg text-gray-500">Loading cart...</div>
          </div>
        </div>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <section className="w-full bg-white py-8 md:py-16 lg:py-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-2xl sm:text-3xl lg:text-[32px] mb-4 lg:mb-8">
              Your cart is empty
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 lg:mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button 
              onClick={() => navigate('/shop')}
              className="bg-[#b88e2f] hover:bg-[#a67d28] text-white px-6 sm:px-8 py-3 text-sm sm:text-base rounded-lg"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-8 md:py-16 lg:py-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px]">
          {/* Cart Items */}
          <div className="flex-1">
            {/* Desktop Header - Hidden on mobile */}
            <div className="hidden lg:flex bg-[#f9f1e7] h-[55px] items-center px-4 xl:px-[140px] mb-8 lg:mb-[55px] rounded-lg">
              <div className="grid grid-cols-5 gap-4 w-full">
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm lg:text-base">
                  Product
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm lg:text-base text-center">
                  Price
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm lg:text-base text-center">
                  Quantity
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm lg:text-base text-center">
                  Subtotal
                </div>
                <div className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm lg:text-base text-center">
                  Action
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <div className="space-y-4 lg:space-y-0">
              {cartItems.map((item) => {
                const subtotal = item.price * item.quantity;
                return (
                  <div key={item.id} className="lg:hidden">
                    {/* Mobile Layout */}
                    <Card className="border border-gray-200 shadow-sm">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <ProductImage
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg bg-[#f9f1e7] flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-base sm:text-lg mb-2 line-clamp-2">
                              {item.name}
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className="text-gray-500">Price: </span>
                                <span className="[font-family:'Poppins',Helvetica] font-medium text-black">
                                  {formatPrice(item.price)}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-500">Subtotal: </span>
                                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#b88e2f]">
                                  {formatPrice(subtotal)}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  className="w-8 h-8 text-gray-500 hover:text-red-500 border border-gray-300"
                                >
                                  <MinusIcon className="w-4 h-4" />
                                </Button>
                                <div className="w-12 h-8 border border-gray-300 rounded flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-black text-base">
                                  {item.quantity}
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  className="w-8 h-8 text-gray-500 hover:text-green-500 border border-gray-300"
                                >
                                  <PlusIcon className="w-4 h-4" />
                                </Button>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-red-500 hover:bg-red-50 hover:text-red-600 w-8 h-8"
                              >
                                <TrashIcon className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}

              {/* Desktop Layout */}
              {cartItems.map((item) => {
                const subtotal = item.price * item.quantity;
                return (
                  <div key={`desktop-${item.id}`} className="hidden lg:flex items-center px-4 xl:px-[140px] py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <div className="grid grid-cols-5 gap-4 w-full items-center">
                      <div className="flex items-center gap-4">
                        <ProductImage
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 xl:w-[108px] xl:h-[105px] object-cover rounded-lg bg-[#f9f1e7] flex-shrink-0"
                        />
                        <span className="[font-family:'Poppins',Helvetica] font-normal text-gray-700 text-sm xl:text-base line-clamp-2">
                          {item.name}
                        </span>
                      </div>
                      <div className="text-center [font-family:'Poppins',Helvetica] font-normal text-gray-600 text-sm xl:text-base">
                        {formatPrice(item.price)}
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-6 h-6 text-gray-500 hover:text-red-500"
                          >
                            <MinusIcon className="w-3 h-3" />
                          </Button>
                          <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base">
                            {item.quantity}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-6 h-6 text-gray-500 hover:text-green-500"
                          >
                            <PlusIcon className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-center [font-family:'Poppins',Helvetica] font-medium text-black text-sm xl:text-base">
                        {formatPrice(subtotal)}
                      </div>
                      <div className="flex items-center justify-center">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-[#b88e2f] hover:bg-red-50 hover:text-red-500"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart Totals */}
          <Card className="w-full lg:w-[393px] lg:h-[390px] bg-[#f9f1e7] border-0 shadow-lg lg:sticky lg:top-4">
            <CardContent className="p-6 sm:p-8 lg:p-[75px]">
              <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-xl sm:text-2xl lg:text-[32px] text-center mb-6 lg:mb-[61px]">
                Cart Totals
              </h2>
              
              <div className="space-y-4 lg:space-y-[31px] mb-6 lg:mb-[42px]">
                <div className="flex justify-between items-center">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm sm:text-base">
                    Subtotal
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-sm sm:text-base">
                    {formatPrice(total)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-300">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm sm:text-base">
                    Total
                  </span>
                  <span className="[font-family:'Poppins',Helvetica] font-bold text-[#b88e2f] text-lg sm:text-xl">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <Button 
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                className="w-full h-12 sm:h-14 lg:h-[58px] bg-transparent border-2 border-black text-black hover:bg-black hover:text-white [font-family:'Poppins',Helvetica] font-normal text-lg sm:text-xl rounded-xl lg:rounded-[15px] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Check Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};