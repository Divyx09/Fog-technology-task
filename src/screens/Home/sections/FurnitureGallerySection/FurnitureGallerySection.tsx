import React from "react";

const galleryImages = [
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=274&h=382&fit=crop",
  "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=451&h=312&fit=crop",
  "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=295&h=392&fit=crop",
  "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=290&h=348&fit=crop",
  "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=425&h=433&fit=crop",
  "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=381&h=323&fit=crop",
  "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=344&h=242&fit=crop",
  "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=178&h=242&fit=crop",
  "https://images.pexels.com/photos/586769/pexels-photo-586769.jpeg?auto=compress&cs=tinysrgb&w=258&h=196&fit=crop",
];

export const FurnitureGallerySection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[67px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-[62px]">
          <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#616161] text-xl tracking-[0] leading-[30px] mb-2">
            Share your setup with
          </p>
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#3a3a3a] text-[40px] tracking-[0] leading-[48px]">
            #FuniroFurniture
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-4 h-[721px]">
          {/* First column */}
          <div className="flex flex-col gap-4">
            <img
              src={galleryImages[0]}
              alt="Furniture gallery"
              className="w-full h-[382px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src={galleryImages[7]}
              alt="Furniture gallery"
              className="w-full h-[323px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Second column */}
          <div className="flex flex-col gap-4">
            <img
              src={galleryImages[1]}
              alt="Furniture gallery"
              className="w-full h-[312px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src={galleryImages[3]}
              alt="Furniture gallery"
              className="w-full h-[348px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Third column */}
          <div className="flex flex-col gap-4">
            <img
              src={galleryImages[2]}
              alt="Furniture gallery"
              className="w-full h-[392px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src={galleryImages[6]}
              alt="Furniture gallery"
              className="w-full h-[242px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Fourth column */}
          <div className="flex flex-col gap-4">
            <img
              src={galleryImages[4]}
              alt="Furniture gallery"
              className="w-full h-[433px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src={galleryImages[8]}
              alt="Furniture gallery"
              className="w-full h-[196px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Fifth column */}
          <div className="flex flex-col gap-4">
            <img
              src={galleryImages[5]}
              alt="Furniture gallery"
              className="w-full h-[323px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src={galleryImages[7]}
              alt="Furniture gallery"
              className="w-full h-[242px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};