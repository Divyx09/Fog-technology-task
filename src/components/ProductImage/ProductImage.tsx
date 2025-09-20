import React, { useState } from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

// Default fallback image - a professional furniture placeholder
const DEFAULT_FALLBACK_IMAGE = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop";

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = "",
  fallbackSrc = DEFAULT_FALLBACK_IMAGE,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasErrored, setHasErrored] = useState(false);

  const handleImageError = () => {
    if (!hasErrored) {
      setCurrentSrc(fallbackSrc);
      setHasErrored(true);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleImageError}
      loading="lazy"
    />
  );
};