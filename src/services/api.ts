import { Product, Cart, ApiResponse, ApiError } from '../types';

const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiError(errorData.error || response.statusText, response.status);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError('Network error occurred', 500);
    }
  }

  // Products API
  async getAllProducts(): Promise<Product[]> {
    return this.makeRequest<Product[]>('/products');
  }

  async getProductById(id: string): Promise<Product> {
    return this.makeRequest<Product>(`/products/${id}`);
  }

  async createProduct(product: Omit<Product, '_id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    return this.makeRequest<Product>('/products', {
      method: 'POST',
      body: JSON.stringify(product),
    });
  }

  async updateProduct(id: string, product: Partial<Product>): Promise<Product> {
    return this.makeRequest<Product>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
    });
  }

  async deleteProduct(id: string): Promise<{ message: string }> {
    return this.makeRequest<{ message: string }>(`/products/${id}`, {
      method: 'DELETE',
    });
  }

  // Cart API
  async getCart(cartId: string): Promise<Cart> {
    return this.makeRequest<Cart>(`/cart/${cartId}`);
  }

  async createCart(items: { product: string; quantity: number }[] = []): Promise<Cart> {
    return this.makeRequest<Cart>('/cart', {
      method: 'POST',
      body: JSON.stringify({ items }),
    });
  }

  async addItemToCart(cartId: string, productId: string, quantity: number = 1): Promise<Cart> {
    return this.makeRequest<Cart>(`/cart/${cartId}/items`, {
      method: 'POST',
      body: JSON.stringify({ product: productId, quantity }),
    });
  }

  async updateItemQuantity(cartId: string, productId: string, quantity: number): Promise<Cart> {
    return this.makeRequest<Cart>(`/cart/${cartId}/items`, {
      method: 'PUT',
      body: JSON.stringify({ product: productId, quantity }),
    });
  }

  async removeItemFromCart(cartId: string, productId: string): Promise<Cart> {
    return this.makeRequest<Cart>(`/cart/${cartId}/items`, {
      method: 'DELETE',
      body: JSON.stringify({ product: productId }),
    });
  }

  async deleteCart(cartId: string): Promise<{ message: string }> {
    return this.makeRequest<{ message: string }>(`/cart/${cartId}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();