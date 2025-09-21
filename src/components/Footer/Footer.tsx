import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const helpLinks = [
  { label: "Payment Options", href: "#" },
  { label: "Returns", href: "#" },
  { label: "Privacy Policies", href: "#" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full relative mt-[30px] bg-white border-t border-[#0000002b]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] py-6 sm:py-8 lg:py-12">
        {/* Mobile Layout - Stacked */}
        <div className="grid grid-cols-1 gap-6 mb-6 sm:hidden">
          {/* Brand Section */}
          <div className="text-center">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal] mb-4">
              Funiro.
            </h2>
            <p className="font-normal text-[#9f9f9f] text-sm [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal] max-w-xs mx-auto">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="text-center">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-sm tracking-[0] leading-[normal] mb-4">
              Links
            </h3>
            <nav className="flex flex-wrap justify-center gap-4">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="font-medium text-sm [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal] hover:text-[#9f9f9f] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Help Section */}
          <div className="text-center">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-sm tracking-[0] leading-[normal] mb-4">
              Help
            </h3>
            <nav className="flex flex-wrap justify-center gap-4">
              {helpLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] hover:text-[#9f9f9f] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="text-center">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-sm tracking-[0] leading-[normal] mb-4">
              Newsletter
            </h3>
            <div className="space-y-3 max-w-xs mx-auto">
              <Input
                placeholder="Enter Your Email Address"
                className="border-0 border-b border-[#9f9f9f] rounded-none bg-transparent px-0 pb-2 [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm tracking-[0] leading-[normal] focus-visible:ring-0 focus-visible:border-black text-center"
              />
              <Button
                variant="ghost"
                className="w-full border border-[#9f9f9f] rounded-md bg-transparent px-4 py-2 h-auto [font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] hover:bg-black hover:text-white transition-colors"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        {/* Tablet Layout - 2 columns */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6 mb-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-xl lg:text-2xl tracking-[0] leading-[normal] mb-6">
                Funiro.
              </h2>
              <p className="font-normal text-[#9f9f9f] text-sm lg:text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                400 University Drive Suite 200 Coral Gables,
                <br />
                FL 33134 USA
              </p>
            </div>
            <div>
              <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-sm lg:text-base tracking-[0] leading-[normal] mb-4">
                Links
              </h3>
              <nav className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="block font-medium text-sm lg:text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal] hover:text-[#9f9f9f] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-sm lg:text-base tracking-[0] leading-[normal] mb-4">
                Help
              </h3>
              <nav className="space-y-3">
                {helpLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block [font-family:'Poppins',Helvetica] font-medium text-black text-sm lg:text-base tracking-[0] leading-[normal] hover:text-[#9f9f9f] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-sm lg:text-base tracking-[0] leading-[normal] mb-4">
                Newsletter
              </h3>
              <div className="space-y-3">
                <Input
                  placeholder="Enter Your Email Address"
                  className="border-0 border-b border-[#9f9f9f] rounded-none bg-transparent px-0 pb-2 [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm tracking-[0] leading-[normal] focus-visible:ring-0 focus-visible:border-black"
                />
                <Button
                  variant="ghost"
                  className="w-full border border-[#9f9f9f] rounded-md bg-transparent px-4 py-2 h-auto [font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] hover:bg-black hover:text-white transition-colors"
                >
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - 4 columns */}
        <div className="hidden lg:grid grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-black text-2xl tracking-[0] leading-[normal] mb-12">
              Funiro.
            </h2>
            <p className="font-normal text-[#9f9f9f] text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-base tracking-[0] leading-[normal] mb-12">
              Links
            </h3>
            <nav className="space-y-8">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block font-medium text-base [font-family:'Poppins',Helvetica] text-black tracking-[0] leading-[normal] hover:text-[#9f9f9f] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-base tracking-[0] leading-[normal] mb-12">
              Help
            </h3>
            <nav className="space-y-8">
              {helpLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block [font-family:'Poppins',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal] hover:text-[#9f9f9f] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#9f9f9f] text-base tracking-[0] leading-[normal] mb-12">
              Newsletter
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter Your Email Address"
                    className="border-0 border-b border-[#9f9f9f] rounded-none bg-transparent px-0 pb-2 [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm tracking-[0] leading-[normal] focus-visible:ring-0 focus-visible:border-black"
                  />
                </div>
                <Button
                  variant="ghost"
                  className="border-0 border-b border-[#9f9f9f] rounded-none bg-transparent px-0 pb-2 h-auto [font-family:'Poppins',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] hover:bg-transparent hover:border-black"
                >
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-4 sm:mb-6 lg:mb-8 bg-[#9f9f9f]" />

        <div className="text-center sm:text-left">
          <p className="font-normal text-black text-sm lg:text-base [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
            1986 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};