import { StarIcon, XIcon, ShoppingCartIcon, PlusIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { useApp } from "../../../../context/AppContext";
import { Product } from "../../../../types";
import { formatPrice } from "../../../../utils";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";
import { useNavigate } from "react-router-dom";

// Product comparison attributes for better organization
const comparisonSpecs = [
  {
    category: "General",
    attributes: [
      { key: "name", label: "Product Name" },
      { key: "brand", label: "Brand" },
      { key: "category", label: "Category" },
      { key: "price", label: "Price" },
      { key: "stock", label: "Stock Available" },
    ],
  },
  {
    category: "Product Details",
    attributes: [
      { key: "description", label: "Description" },
      { key: "_id", label: "Product ID" },
      { key: "createdAt", label: "Date Added" },
    ],
  },
];

export const ComparisonContentSection = (): JSX.Element => {
  const { state, actions } = useApp();
  const { products: allProducts, comparisonProducts, loading } = state;
  const navigate = useNavigate();
  const [showProductSelector, setShowProductSelector] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load products if not already loaded
    if (allProducts.length === 0) {
      actions.loadProducts();
    }
  }, [allProducts.length, actions]);

  useEffect(() => {
    setSelectedProducts(comparisonProducts);
  }, [comparisonProducts]);

  const handleAddProduct = (product: Product) => {
    if (comparisonProducts.length < 4) {
      actions.addToComparison(product);
      setShowProductSelector(false);
    }
  };

  const handleRemoveProduct = (productId: string) => {
    actions.removeFromComparison(productId);
  };

  const handleAddToCart = async (product: Product) => {
    await actions.addToCart(product, 1);
  };

  const formatAttributeValue = (product: Product, key: string): string => {
    switch (key) {
      case 'price':
        return formatPrice(product.price);
      case 'createdAt':
        return product.createdAt ? new Date(product.createdAt).toLocaleDateString() : 'N/A';
      case '_id':
        return product._id.slice(-8).toUpperCase();
      case 'stock':
        return `${product.stock} items`;
      default:
        return (product as any)[key] || 'N/A';
    }
  };

  const generateStars = (rating: number = 4.5) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-4 h-4 md:w-5 md:h-5 ${
          i < Math.floor(rating)
            ? "fill-[#ffc700] text-[#ffc700]"
            : "text-gray-300"
        }`}
      />
    ));
  };

  if (loading.products && allProducts.length === 0) {
    return (
      <section className="w-full bg-white py-8 md:py-[35px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-base md:text-lg text-gray-500">Loading products...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-6 md:py-8 lg:py-[35px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="mb-6">
            <h2 className="font-['Poppins'] font-medium text-black text-xl md:text-2xl mb-4">
              Product Comparison ({selectedProducts.length}/4)
            </h2>
            {selectedProducts.length > 0 && (
              <Button
                onClick={() => actions.clearComparison()}
                variant="outline"
                className="mb-4 text-sm"
              >
                Clear All
              </Button>
            )}
          </div>

          {selectedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No products selected for comparison</p>
              <Button
                onClick={() => setShowProductSelector(true)}
                className="bg-[#b88e2f] hover:bg-[#a67d28] text-white"
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {selectedProducts.map((product) => (
                <div key={product._id} className="bg-gray-50 rounded-lg p-4 relative">
                  <Button
                    onClick={() => handleRemoveProduct(product._id)}
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 text-gray-500 hover:text-red-500"
                  >
                    <XIcon className="w-4 h-4" />
                  </Button>
                  
                  <div className="pr-10">
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-['Poppins'] font-medium text-black text-lg mb-2">
                      {product.name}
                    </h3>
                    <p className="font-['Poppins'] font-medium text-[#b88e2f] text-xl mb-2">
                      {formatPrice(product.price)}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {generateStars()}
                      </div>
                      <span className="text-sm text-gray-600">4.5 (150 reviews)</span>
                    </div>
                    
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-[#b88e2f] hover:bg-[#a67d28] text-white"
                    >
                      <ShoppingCartIcon className="w-4 h-4 mr-2" />
                      Add To Cart
                    </Button>
                  </div>
                </div>
              ))}
              
              {selectedProducts.length < 4 && (
                <div className="text-center py-6">
                  <Button
                    onClick={() => setShowProductSelector(true)}
                    variant="outline"
                    className="border-[#b88e2f] text-[#b88e2f] hover:bg-[#b88e2f] hover:text-white"
                  >
                    <PlusIcon className="w-4 h-4 mr-2" />
                    Add Another Product
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="flex gap-8 xl:gap-[52px] mb-8 xl:mb-[48px]">
            <div className="w-48 xl:w-[223px]">
              <h2 className="font-['Poppins'] font-medium text-black text-2xl xl:text-[28px] mb-6 xl:mb-[25px]">
                Product Comparison
              </h2>
              <div className="space-y-3">
                <Button 
                  onClick={() => navigate('/shop')}
                  variant="ghost" 
                  className="font-['Poppins'] font-medium text-[#727272] text-lg xl:text-xl underline hover:bg-transparent p-0 h-auto"
                >
                  Browse Products
                </Button>
                {selectedProducts.length > 0 && (
                  <Button
                    onClick={() => actions.clearComparison()}
                    variant="outline"
                    className="w-full text-sm"
                  >
                    Clear All
                  </Button>
                )}
              </div>
            </div>

            {[...Array(4)].map((_, index) => {
              const product = selectedProducts[index];
              return (
                <div key={index} className="w-56 xl:w-[280px] relative">
                  {product ? (
                    <>
                      <Button
                        onClick={() => handleRemoveProduct(product._id)}
                        variant="ghost"
                        size="icon"
                        className="absolute top-0 right-0 z-10 h-8 w-8 text-gray-500 hover:text-red-500 bg-white/80 rounded-full"
                      >
                        <XIcon className="w-4 h-4" />
                      </Button>
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 xl:h-[177px] object-cover rounded-[10px] bg-[#f9f1e7] mb-4"
                      />
                      <h3 className="font-['Poppins'] font-medium text-black text-xl xl:text-2xl mb-2">
                        {product.name}
                      </h3>
                      <p className="font-['Poppins'] font-medium text-black text-lg mb-2">
                        {formatPrice(product.price)}
                      </p>
                      <div className="flex items-center gap-[5px] mb-4">
                        <span className="font-['Poppins'] font-medium text-black text-lg">
                          4.5
                        </span>
                        <div className="flex gap-1">
                          {generateStars()}
                        </div>
                        <span className="font-['Poppins'] font-normal text-[#9f9f9f] text-sm">
                          150 Reviews
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center h-[280px] flex flex-col justify-center">
                      <PlusIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">Add Product</p>
                      <Button
                        onClick={() => setShowProductSelector(true)}
                        className="bg-[#b88e2f] hover:bg-[#a67d28] text-white text-sm"
                      >
                        Choose Product
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {selectedProducts.length > 0 && (
            <div className="space-y-8 xl:space-y-[48px]">
              {comparisonSpecs.map((section) => (
                <div key={section.category}>
                  <h3 className="font-['Poppins'] font-medium text-black text-2xl xl:text-[28px] mb-6 xl:mb-[33px]">
                    {section.category}
                  </h3>
                  <div className="space-y-6 xl:space-y-[30px]">
                    {section.attributes.map((attr) => (
                      <div key={attr.key} className="flex gap-8 xl:gap-[52px]">
                        <div className="w-48 xl:w-[223px]">
                          <span className="font-['Poppins'] font-normal text-black text-lg xl:text-xl">
                            {attr.label}
                          </span>
                        </div>
                        {[...Array(4)].map((_, index) => {
                          const product = selectedProducts[index];
                          return (
                            <div key={index} className="w-56 xl:w-[280px]">
                              <span className="font-['Poppins'] font-normal text-black text-lg xl:text-xl">
                                {product ? formatAttributeValue(product, attr.key) : '-'}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex gap-8 xl:gap-[52px] pt-8 xl:pt-[48px]">
                <div className="w-48 xl:w-[223px]"></div>
                {[...Array(4)].map((_, index) => {
                  const product = selectedProducts[index];
                  return (
                    <div key={index} className="w-56 xl:w-[280px]">
                      {product && (
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="w-full h-12 xl:h-[64px] bg-[#b88e2f] hover:bg-[#a67d28] text-white font-['Poppins'] font-normal text-lg xl:text-xl rounded-md"
                        >
                          Add To Cart
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Product Selector Modal */}
        {showProductSelector && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-['Poppins'] font-medium text-black">
                    Select Product to Compare
                  </h3>
                  <Button
                    onClick={() => setShowProductSelector(false)}
                    variant="ghost"
                    size="icon"
                  >
                    <XIcon className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allProducts
                    .filter(product => !comparisonProducts.find(cp => cp._id === product._id))
                    .map((product) => (
                    <div key={product._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-medium text-black mb-2 line-clamp-2">
                        {product.name}
                      </h4>
                      <p className="text-[#b88e2f] font-medium mb-3">
                        {formatPrice(product.price)}
                      </p>
                      <Button
                        onClick={() => handleAddProduct(product)}
                        className="w-full bg-[#b88e2f] hover:bg-[#a67d28] text-white text-sm"
                        disabled={comparisonProducts.length >= 4}
                      >
                        Add to Compare
                      </Button>
                    </div>
                  ))}
                </div>
                
                {allProducts.filter(product => !comparisonProducts.find(cp => cp._id === product._id)).length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">All available products are already in comparison</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};