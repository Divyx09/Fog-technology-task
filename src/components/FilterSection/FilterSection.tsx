import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import { FilterIcon, RefreshCwIcon, SearchIcon, ChevronDownIcon } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { ProductFilters } from "../../types";
import { apiService } from "../../services/api";
import { GridIcon, ListIcon, SlidersHorizontalIcon } from "lucide-react";

export const FilterSection: React.FC = () => {
  const { state, actions } = useApp();
  const { filters, pagination } = state;
  const [fileters, setFilters] = useState<Boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const [localFilters, setLocalFilters] = useState<ProductFilters>(filters);
  const [brands, setBrands] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load brands for filter dropdown
  useEffect(() => {
    const loadBrands = async () => {
      try {
        const brandsData = await apiService.getBrands();
        setBrands(brandsData);
      } catch (error) {
        console.error("Failed to load brands:", error);
      }
    };

    loadBrands();
  }, []);

  // Update local filters when global filters change
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleFilterChange = (
    key: keyof ProductFilters,
    value: string | number | undefined
  ) => {
    setLocalFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const applyFilters = () => {
    setIsLoading(true);
    actions.setFilters(localFilters);
    setTimeout(() => setIsLoading(false), 500);
  };

  const resetFilters = () => {
    setIsLoading(true);
    actions.resetFilters();
    setLocalFilters({
      page: 1,
      limit: 12,
      sortBy: "name",
      sortOrder: "asc",
    });
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  return (
    <section className="w-full bg-[#f9f1e7] py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-0 bg-white">
          <section className="w-full bg-[#f9f1e7] py-4 lg:py-6">
            <div className="max-w-7xl mx-auto px-4">
              {/* Mobile Layout */}
              <div className="lg:hidden">
                {/* Top Row - Filter Button and Results Count */}
                <div className="flex items-center justify-between mb-4">
                  <Button
                    onClick={() => {
                      setFilters(!fileters);
                      if (!fileters) {
                        setIsDropdownOpen(true);
                      } else {
                        setIsDropdownOpen(false);
                      }
                    }}
                    variant="ghost"
                    className="flex items-center gap-2 [font-family:'Poppins',Helvetica] font-normal text-black text-lg hover:bg-transparent p-2"
                  >
                    <SlidersHorizontalIcon className="w-5 h-5" />
                    Filter
                    {fileters && (
                      <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    )}
                  </Button>
                  
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm text-right flex-1 ml-4">
                    Showing {pagination.totalItems} results
                  </p>
                </div>
                
                {/* Bottom Row - View Icons and Sort Options */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 hover:bg-black/10"
                    >
                      <GridIcon className="w-6 h-6 text-black" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 hover:bg-black/10"
                    >
                      <ListIcon className="w-6 h-6 text-black" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm">
                        Show
                      </span>
                      <div className="w-12 h-10 bg-white flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm rounded">
                        {pagination.itemsPerPage}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm">
                        Sort
                      </span>
                      <div className="min-w-[80px] h-10 bg-white flex items-center px-3 [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-sm rounded">
                        Default
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <Button
                    onClick={() => {
                      setFilters(!fileters);
                      if (!fileters) {
                        setIsDropdownOpen(true);
                      } else {
                        setIsDropdownOpen(false);
                      }
                    }}
                    variant="ghost"
                    className="flex items-center gap-3 [font-family:'Poppins',Helvetica] font-normal text-black text-xl hover:bg-transparent"
                  >
                    <SlidersHorizontalIcon className="w-6 h-6" />
                    Filter
                    {fileters && (
                      <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    )}
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
                    Showing {pagination.totalItems} results
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl">
                      Show
                    </span>
                    <div className="w-[55px] h-[55px] bg-white flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-xl">
                      {pagination.itemsPerPage}
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
          {fileters && (
            <div className="p-3 lg:p-4">
              {/* Results info */}
              <div className="flex items-center justify-end mb-3 lg:mb-2">
                <div className="text-xs lg:text-sm text-gray-600 text-right">
                  Showing {pagination.totalItems} results
                  {localFilters.search && (
                    <span> for "{localFilters.search}"</span>
                  )}
                  {(localFilters.brand ||
                    localFilters.minPrice ||
                    localFilters.maxPrice) && (
                    <span> with filters applied</span>
                  )}
                </div>
              </div>

              {/* Filter Content */}
              <div className="border border-gray-200 rounded-lg p-3 lg:p-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4 items-end">
                    {/* Search */}
                    <div className="md:col-span-2 lg:col-span-2">
                      <Label
                        htmlFor="search"
                        className="text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2 block"
                      >
                        Search Products
                      </Label>
                      <form onSubmit={handleSearchSubmit} className="relative">
                        <Input
                          id="search"
                          type="text"
                          placeholder="Search products..."
                          value={localFilters.search || ""}
                          onChange={(e) =>
                            handleFilterChange("search", e.target.value)
                          }
                          className="pr-10 bg-white text-sm h-9 lg:h-10"
                        />
                        <Button
                          type="submit"
                          size="icon"
                          variant="ghost"
                          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 lg:h-8 lg:w-8"
                        >
                          <SearchIcon className="h-3 w-3 lg:h-4 lg:w-4" />
                        </Button>
                      </form>
                    </div>

                    {/* Brand Filter */}
                    <div>
                      <Label
                        htmlFor="brand"
                        className="text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2 block"
                      >
                        Brand
                      </Label>
                      <select
                        id="brand"
                        value={localFilters.brand || ""}
                        onChange={(e) =>
                          handleFilterChange(
                            "brand",
                            e.target.value === "" ? undefined : e.target.value
                          )
                        }
                        className="h-9 lg:h-10 w-full rounded-md border border-slate-200 bg-white px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
                      >
                        <option value="">All Brands</option>
                        {brands.map((brand) => (
                          <option key={brand} value={brand}>
                            {brand}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Sort By */}
                    <div>
                      <Label
                        htmlFor="sortBy"
                        className="text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2 block"
                      >
                        Sort By
                      </Label>
                      <select
                        id="sortBy"
                        value={localFilters.sortBy || "name"}
                        onChange={(e) =>
                          handleFilterChange(
                            "sortBy",
                            e.target.value as
                              | "name"
                              | "price"
                              | "brand"
                              | "createdAt"
                          )
                        }
                        className="h-9 lg:h-10 w-full rounded-md border border-slate-200 bg-white px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
                      >
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                        <option value="brand">Brand</option>
                        <option value="createdAt">Newest</option>
                      </select>
                    </div>

                    {/* Sort Order */}
                    <div>
                      <Label
                        htmlFor="sortOrder"
                        className="text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2 block"
                      >
                        Order
                      </Label>
                      <select
                        id="sortOrder"
                        value={localFilters.sortOrder || "asc"}
                        onChange={(e) =>
                          handleFilterChange(
                            "sortOrder",
                            e.target.value as "asc" | "desc"
                          )
                        }
                        className="h-9 lg:h-10 w-full rounded-md border border-slate-200 bg-white px-2 lg:px-3 py-1 lg:py-2 text-xs lg:text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
                      >
                        <option value="asc">
                          {localFilters.sortBy === "price"
                            ? "Low to High"
                            : "A to Z"}
                        </option>
                        <option value="desc">
                          {localFilters.sortBy === "price"
                            ? "High to Low"
                            : "Z to A"}
                        </option>
                      </select>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 md:col-span-2 lg:col-span-1">
                      <Button
                        onClick={applyFilters}
                        disabled={isLoading}
                        className="bg-[#b88e2f] hover:bg-[#a67d28] text-white flex items-center gap-1 lg:gap-2 px-3 lg:px-4 h-9 lg:h-10 text-xs lg:text-sm"
                      >
                        {isLoading ? (
                          <RefreshCwIcon className="h-3 w-3 lg:h-4 lg:w-4 animate-spin" />
                        ) : (
                          <FilterIcon className="h-3 w-3 lg:h-4 lg:w-4" />
                        )}
                        Apply
                      </Button>
                      <Button
                        onClick={resetFilters}
                        variant="outline"
                        disabled={isLoading}
                        className="border-[#b88e2f] text-[#b88e2f] hover:bg-[#b88e2f] hover:text-white px-3 lg:px-4 h-9 lg:h-10 text-xs lg:text-sm"
                      >
                        Reset
                      </Button>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mt-3 lg:mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                    <div>
                      <Label
                        htmlFor="minPrice"
                        className="text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2 block"
                      >
                        Min Price ($)
                      </Label>
                      <Input
                        id="minPrice"
                        type="number"
                        placeholder="0"
                        value={localFilters.minPrice || ""}
                        onChange={(e) =>
                          handleFilterChange(
                            "minPrice",
                            e.target.value ? Number(e.target.value) : undefined
                          )
                        }
                        className="bg-white h-9 lg:h-10 text-xs lg:text-sm"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="maxPrice"
                        className="text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2 block"
                      >
                        Max Price ($)
                      </Label>
                      <Input
                        id="maxPrice"
                        type="number"
                        placeholder="1000"
                        value={localFilters.maxPrice || ""}
                        onChange={(e) =>
                          handleFilterChange(
                            "maxPrice",
                            e.target.value ? Number(e.target.value) : undefined
                          )
                        }
                        className="bg-white h-9 lg:h-10 text-xs lg:text-sm"
                      />
                    </div>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
