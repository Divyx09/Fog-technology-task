import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  Menu,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { CartSidebar } from "../CartSidebar/CartSidebar";
import { useApp } from "../../context/AppContext";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const location = useLocation();
  const { state } = useApp();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = state;

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu clicked, current state:", isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log("New state will be:", !isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    console.log("Close mobile menu called");
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[54px] py-3 sm:py-4 md:py-[29px] h-[60px] sm:h-[70px] md:h-[100px]">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 sm:gap-2 md:gap-[5px]"
            onClick={closeMobileMenu}
          >
            <img
              className="w-6 h-5 sm:w-8 sm:h-6 md:w-[50px] md:h-8"
              alt="Meubel house logos"
              src="/meubel-house-logos-05.png"
            />
            <div className="[font-family:'Montserrat',Helvetica] font-bold text-black text-lg sm:text-xl md:text-[34px] tracking-[0] leading-[normal]">
              Furniro
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-4 lg:gap-8 xl:gap-[75px]">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={`[font-family:'Poppins',Helvetica] font-medium text-sm lg:text-base tracking-[0] leading-[normal] hover:text-gray-600 transition-colors ${
                        location.pathname === item.href
                          ? "text-[#b88e2f]"
                          : "text-black"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-[45px]">
            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6 lg:w-7 lg:h-7 xl:w-[28px] xl:h-[28px] p-0 hover:bg-gray-100"
            >
              <UserIcon className="w-5 h-5 lg:w-6 lg:h-6 xl:w-[28px] xl:h-[28px] text-black" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6 lg:w-7 lg:h-7 xl:w-[28px] xl:h-[28px] p-0 hover:bg-gray-100"
            >
              <SearchIcon className="w-5 h-5 lg:w-6 lg:h-6 xl:w-[28px] xl:h-[28px] text-black" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6 lg:w-7 lg:h-7 xl:w-[28px] xl:h-[28px] p-0 hover:bg-gray-100"
            >
              <HeartIcon className="w-5 h-5 lg:w-6 lg:h-6 xl:w-[28px] xl:h-[28px] text-black" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className="w-6 h-6 lg:w-7 lg:h-7 xl:w-[28px] xl:h-[28px] p-0 hover:bg-gray-100 relative"
            >
              <ShoppingCartIcon className="w-5 h-5 lg:w-6 lg:h-6 xl:w-[28px] xl:h-[28px] text-black" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 bg-[#b88e2f] text-white text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center font-medium">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className="w-8 h-8 sm:w-9 sm:h-9 p-0 hover:bg-gray-100 relative touch-manipulation"
            >
              <ShoppingCartIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ffffff] text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-medium">
                  {cartItemCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="w-8 h-8 sm:w-9 sm:h-9 p-0 hover:bg-gray-100 touch-manipulation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 sm:px-6 py-4 space-y-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={`block [font-family:'Poppins',Helvetica] font-medium text-base tracking-[0] leading-[normal] hover:text-gray-600 hover:bg-gray-50 transition-colors py-3 px-2 rounded-md touch-manipulation ${
                    location.pathname === item.href
                      ? "text-[#b88e2f] bg-[#b88e2f]/10"
                      : "text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Action Icons */}
              <div className="flex items-center justify-center gap-6 pt-4 mt-4 border-t border-gray-100">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 p-0 hover:bg-gray-100 touch-manipulation"
                  aria-label="User account"
                >
                  <UserIcon className="w-6 h-6 text-black" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 p-0 hover:bg-gray-100 touch-manipulation"
                  aria-label="Search"
                >
                  <SearchIcon className="w-6 h-6 text-black" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 p-0 hover:bg-gray-100 touch-manipulation"
                  aria-label="Wishlist"
                >
                  <HeartIcon className="w-6 h-6 text-black" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
