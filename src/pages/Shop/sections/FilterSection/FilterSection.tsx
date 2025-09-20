import { FilterIcon, GridIcon, ListIcon, SlidersHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { useApp } from "../../../../context/AppContext";

export const FilterSection = (): JSX.Element => {
  const { state } = useApp();
  const { pagination } = state;
  const { currentPage, itemsPerPage, totalItems } = pagination;
  
  const startItem = totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  return (
    <section className="w-full bg-[#f9f1e7] py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              className="flex items-center gap-3 [font-family:'Poppins',Helvetica] font-normal text-black text-xl hover:bg-transparent"
            >
              <SlidersHorizontalIcon className="w-6 h-6" />
              Filter
            </Button>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-7 h-7 hover:bg-black/10"
              >
                <GridIcon className="w-7 h-7 text-black" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-7 h-7 hover:bg-black/10"
              >
                <ListIcon className="w-7 h-7 text-black" />
              </Button>
            </div>

            <div className="w-px h-8 bg-[#9f9f9f]" />

            <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base">
              {totalItems > 0 ? `Showing ${startItem}–${endItem} of ${totalItems} results` : 'No products found'}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                Show
              </span>
              <div className="w-[55px] h-[55px] bg-white flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-xl">
                {itemsPerPage}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                Sort by
              </span>
              <div className="w-[188px] h-[55px] bg-white flex items-center px-4 [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-xl">
                Default
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};