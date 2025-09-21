import { FacebookIcon, LinkedinIcon, MinusIcon, PlusIcon, StarIcon, TwitterIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { useApp } from "../../../../context/AppContext";
import { formatPrice } from "../../../../utils";
import { apiService } from "../../../../services/api";
import { Product } from "../../../../types";
import { ProductImage } from "../../../../components/ProductImage/ProductImage";
import { getRandomSofaImage } from "../../../../utils/imageLibrary";

export const ProductDetailsSection = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { actions } = useApp();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);

  // Generate carousel images
  const generateCarouselImages = (baseImage?: string): string[] => {
    const images = [];
    if (baseImage) images.push(baseImage);
    for (let i = 0; i < 4; i++) {
      images.push(getRandomSofaImage());
    }
    return images;
  };

  useEffect(() => {
    if (product?.image) {
      const images = generateCarouselImages(product.image);
      setCarouselImages(images);
      setCurrentImageIndex(0);
    }
  }, [product?.image]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) {
        setError('Product ID not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const productData = await apiService.getProductById(id);
        setProduct(productData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (product) {
      await actions.addToCart(product, quantity);
    }
  };

  const handleCompare = () => {
    navigate('/comparison');
  };

  if (loading) {
    return (
      <section className="w-full bg-white py-6 md:py-8 lg:py-[35px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64 md:h-80 lg:h-96">
            <div className="text-base md:text-lg text-gray-500">Loading product details...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="w-full bg-white py-6 md:py-8 lg:py-[35px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64 md:h-80 lg:h-96">
            <div className="text-center">
              <div className="text-base md:text-lg text-red-500 mb-4">
                {error || 'Product not found'}
              </div>
              <Button onClick={() => navigate('/shop')} className="px-6 py-2">
                Back to Shop
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-6 md:py-8 lg:py-[35px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[105px]">
          {/* Product Images */}
          <div className="w-full lg:w-auto">
            {/* Mobile Carousel */}
            <div className="lg:hidden relative">
              <div className="relative overflow-hidden rounded-lg bg-[#f9f1e7]">
                <ProductImage
                  src={carouselImages[currentImageIndex] || product?.image}
                  alt={product?.name || 'Product'}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                
                {/* Navigation Arrows */}
                {carouselImages.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-30 w-8 h-8 md:w-10 md:h-10"
                    >
                      <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-30 w-8 h-8 md:w-10 md:h-10"
                    >
                      <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </>
                )}
                
                {/* Dots Indicator */}
                {carouselImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-[#b88e2f]' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Thumbnail Strip */}
              {carouselImages.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {carouselImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 ${
                        index === currentImageIndex ? 'border-[#b88e2f]' : 'border-transparent'
                      }`}
                    >
                      <ProductImage
                        src={image}
                        alt={`${product?.name || 'Product'} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex gap-[31px]">
              <div className="flex flex-col gap-8">
                {carouselImages.slice(0, 4).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-[76px] h-20 rounded-[10px] overflow-hidden border-2 transition-all duration-200 ${
                      index === currentImageIndex ? 'border-[#b88e2f] scale-105' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <ProductImage
                      src={image}
                      alt={`${product?.name || 'Product'} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="relative">
                <ProductImage
                  src={carouselImages[currentImageIndex] || product?.image}
                  alt={product?.name || 'Product'}
                  className="w-[481px] h-[500px] object-cover rounded-[10px] bg-[#f9f1e7]"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 max-w-none lg:max-w-[606px]">
            <h1 className="font-['Poppins'] font-normal text-black text-2xl md:text-3xl lg:text-[42px] mb-3 md:mb-4 leading-tight">
              {product?.name || 'Unknown Product'}
            </h1>
            
            <p className="font-['Poppins'] font-medium text-[#9f9f9f] text-xl md:text-2xl mb-3 md:mb-4">
              {formatPrice(product?.price || 0)}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-[18px] mb-4 md:mb-[13px]">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 md:w-5 md:h-5 ${
                      i < 4 ? "fill-[#ffc700] text-[#ffc700]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="hidden sm:block w-px h-[30px] bg-[#9f9f9f]" />
              <span className="font-['Poppins'] font-normal text-[#9f9f9f] text-xs md:text-[13px]">
                5 Customer Review
              </span>
            </div>

            <p className="font-['Poppins'] font-normal text-black text-sm md:text-[13px] mb-6 md:mb-[22px] leading-relaxed">
              {product?.description || 'No description available'}
            </p>

            {/* Stock Info */}
            <div className="mb-6 md:mb-[22px] p-3 md:p-4 bg-gray-50 rounded-lg">
              <p className="font-['Poppins'] font-normal text-[#9f9f9f] text-sm mb-2">
                Availability: {(product?.stock || 0) > 0 ? (
                  <span className="text-green-600 font-medium">{product?.stock || 0} in stock</span>
                ) : (
                  <span className="text-red-500 font-medium">Out of stock</span>
                )}
              </p>
              {(product?.stock || 0) <= 5 && (product?.stock || 0) > 0 && (
                <p className="font-['Poppins'] font-medium text-red-500 text-sm animate-pulse">
                  ⚠️ Only {product?.stock || 0} left in stock!
                </p>
              )}
            </div>

            {/* Size Selection */}
            <div className="mb-6 md:mb-[22px]">
              <p className="font-['Poppins'] font-medium text-gray-700 text-sm mb-3">
                Size
              </p>
              <div className="flex gap-3">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg font-['Poppins'] font-medium text-sm transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-[#b88e2f] text-white shadow-lg scale-105"
                        : "bg-[#f9f1e7] text-black hover:bg-[#b88e2f] hover:text-white hover:scale-105"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6 md:mb-8">
              <p className="font-['Poppins'] font-medium text-gray-700 text-sm mb-3">
                Color
              </p>
              <div className="flex gap-3">
                {[
                  { name: "purple", color: "#816dfa" },
                  { name: "black", color: "#000000" },
                  { name: "brown", color: "#b88e2f" },
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-3 transition-all duration-200 ${
                      selectedColor === color.name
                        ? "border-gray-400 scale-110 shadow-lg"
                        : "border-transparent hover:border-gray-300 hover:scale-105"
                    }`}
                    style={{ backgroundColor: color.color }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-[18px] mb-8 md:mb-[60px]">
              <div className="flex items-center border border-[#9f9f9f] rounded-xl w-full sm:w-[123px] h-12 md:h-16 bg-white">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 md:w-10 md:h-10 hover:bg-gray-100 rounded-lg"
                  disabled={(product?.stock || 0) === 0}
                >
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <span className="flex-1 text-center font-['Poppins'] font-medium text-black text-base md:text-lg">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product?.stock || 0, quantity + 1))}
                  className="w-8 h-8 md:w-10 md:h-10 hover:bg-gray-100 rounded-lg"
                  disabled={(product?.stock || 0) === 0}
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>

              <Button 
                onClick={handleAddToCart}
                disabled={(product?.stock || 0) === 0}
                className="w-full sm:w-[215px] h-12 md:h-16 bg-[#b88e2f] hover:bg-[#9a7729] text-white font-['Poppins'] font-medium text-base md:text-xl rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {(product?.stock || 0) === 0 ? 'Out of Stock' : 'Add To Cart'}
              </Button>

              <Button 
                variant="outline"
                onClick={handleCompare}
                className="w-full sm:w-[215px] h-12 md:h-16 border-2 border-[#b88e2f] text-[#b88e2f] hover:bg-[#b88e2f] hover:text-white font-['Poppins'] font-medium text-base md:text-xl rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                + Compare
              </Button>
            </div>

            {/* Product Meta */}
            <div className="space-y-4 border-t border-[#d9d9d9] pt-6 md:pt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col sm:flex-row">
                  <span className="w-full sm:w-20 font-['Poppins'] font-medium text-gray-600 text-sm md:text-base">
                    SKU
                  </span>
                  <span className="font-['Poppins'] font-normal text-[#9f9f9f] text-sm md:text-base">
                    {product?._id?.slice(-6).toUpperCase() || 'N/A'}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="w-full sm:w-20 font-['Poppins'] font-medium text-gray-600 text-sm md:text-base">
                    Category
                  </span>
                  <span className="font-['Poppins'] font-normal text-[#9f9f9f] text-sm md:text-base">
                    {product?.category || 'General'}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="w-full sm:w-20 font-['Poppins'] font-medium text-gray-600 text-sm md:text-base">
                    Stock
                  </span>
                  <span className="font-['Poppins'] font-normal text-[#9f9f9f] text-sm md:text-base">
                    {product?.stock || 0} items
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center pt-4 border-t border-gray-200">
                <span className="w-full sm:w-20 font-['Poppins'] font-medium text-gray-600 text-sm md:text-base mb-3 sm:mb-0">
                  Share
                </span>
                <div className="flex items-center gap-4 md:gap-6">
                  <FacebookIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:text-[#b88e2f] transition-colors hover:scale-110" />
                  <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:text-[#b88e2f] transition-colors hover:scale-110" />
                  <TwitterIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600 cursor-pointer hover:text-[#b88e2f] transition-colors hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};