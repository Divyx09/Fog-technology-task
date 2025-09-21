// Default product image fallback
export const DEFAULT_PRODUCT_IMAGE = '/default-product.png';

// Collection of sofa images for fallback purposes
const SOFA_IMAGES = [
  '/meubel-house-logos-05.png', // Using the existing logo as fallback
  '/placeholder-sofa-1.jpg',
  '/placeholder-sofa-2.jpg',
  '/placeholder-sofa-3.jpg',
];

// Get a random sofa image for fallback
export const getRandomSofaImage = (): string => {
  const randomIndex = Math.floor(Math.random() * SOFA_IMAGES.length);
  return SOFA_IMAGES[randomIndex];
};

// Get product image with fallback
export const getProductImage = (imagePath?: string): string => {
  if (!imagePath || imagePath.trim() === '') {
    return DEFAULT_PRODUCT_IMAGE;
  }
  return imagePath;
};

// Validate if image URL is accessible (for future use)
export const validateImageUrl = async (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};