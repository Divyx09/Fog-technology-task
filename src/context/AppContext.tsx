import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product, FrontendCartItem } from '../types';
import { apiService } from '../services/api';
import { convertToFrontendCartItem, getCartId, setCartId } from '../utils';

// State interface
interface AppState {
  products: Product[];
  cartItems: FrontendCartItem[];
  cartId: string | null;
  pagination: {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
  };
  loading: {
    products: boolean;
    cart: boolean;
  };
  error: string | null;
}

// Action types
type AppAction =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'SET_CART_ITEMS'; payload: FrontendCartItem[] }
  | { type: 'SET_CART_ID'; payload: string }
  | { type: 'SET_LOADING'; payload: { type: 'products' | 'cart'; loading: boolean } }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'ADD_TO_CART'; payload: FrontendCartItem }
  | { type: 'UPDATE_CART_ITEM'; payload: { id: string; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'SET_CURRENT_PAGE'; payload: number }
  | { type: 'SET_TOTAL_ITEMS'; payload: number };

// Initial state
const initialState: AppState = {
  products: [],
  cartItems: [],
  cartId: null,
  pagination: {
    currentPage: 1,
    itemsPerPage: 12,
    totalItems: 0,
  },
  loading: {
    products: false,
    cart: false,
  },
  error: null,
};

// Reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_CART_ITEMS':
      return { ...state, cartItems: action.payload };
    case 'SET_CART_ID':
      return { ...state, cartId: action.payload };
    case 'SET_LOADING':
      return {
        ...state,
        loading: { ...state.loading, [action.payload.type]: action.payload.loading },
      };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        pagination: { ...state.pagination, currentPage: action.payload },
      };
    case 'SET_TOTAL_ITEMS':
      return {
        ...state,
        pagination: { ...state.pagination, totalItems: action.payload },
      };
    default:
      return state;
  }
};

// Context interface
interface AppContextType {
  state: AppState;
  actions: {
    loadProducts: () => Promise<void>;
    loadCart: () => Promise<void>;
    addToCart: (product: Product, quantity?: number) => Promise<void>;
    updateCartItemQuantity: (productId: string, quantity: number) => Promise<void>;
    removeFromCart: (productId: string) => Promise<void>;
    setCurrentPage: (page: number) => void;
    clearError: () => void;
  };
}

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Initialize cart ID from localStorage
  useEffect(() => {
    const savedCartId = getCartId();
    if (savedCartId) {
      dispatch({ type: 'SET_CART_ID', payload: savedCartId });
    }
  }, []);

  // Load products
  const loadProducts = async () => {
    dispatch({ type: 'SET_LOADING', payload: { type: 'products', loading: true } });
    dispatch({ type: 'SET_ERROR', payload: null });
    
    try {
      const products = await apiService.getAllProducts();
      dispatch({ type: 'SET_PRODUCTS', payload: products });
      dispatch({ type: 'SET_TOTAL_ITEMS', payload: products.length });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to load products' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: { type: 'products', loading: false } });
    }
  };

  // Load cart
  const loadCart = async () => {
    if (!state.cartId) return;
    
    dispatch({ type: 'SET_LOADING', payload: { type: 'cart', loading: true } });
    dispatch({ type: 'SET_ERROR', payload: null });
    
    try {
      const cart = await apiService.getCart(state.cartId);
      const frontendCartItems = cart.items
        .map(convertToFrontendCartItem)
        .filter((item): item is FrontendCartItem => item !== null);
      dispatch({ type: 'SET_CART_ITEMS', payload: frontendCartItems });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to load cart' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: { type: 'cart', loading: false } });
    }
  };

  // Add to cart
  const addToCart = async (product: Product, quantity: number = 1) => {
    // Validate product before adding to cart
    if (!product || !product._id) {
      dispatch({ type: 'SET_ERROR', payload: 'Invalid product data' });
      return;
    }
    
    try {
      let cartId = state.cartId;
      
      // Create cart if it doesn't exist
      if (!cartId) {
        const newCart = await apiService.createCart();
        cartId = newCart._id;
        dispatch({ type: 'SET_CART_ID', payload: cartId });
        setCartId(cartId);
      }
      
      await apiService.addItemToCart(cartId, product._id, quantity);
      
      // Update local state
      const frontendCartItem: FrontendCartItem = {
        id: product._id,
        name: product.name || 'Unknown Product',
        price: product.price || 0,
        quantity,
        image: product.image || '',
      };
      
      dispatch({ type: 'ADD_TO_CART', payload: frontendCartItem });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to add to cart' });
    }
  };

  // Update cart item quantity
  const updateCartItemQuantity = async (productId: string, quantity: number) => {
    if (!state.cartId) return;
    
    try {
      await apiService.updateItemQuantity(state.cartId, productId, quantity);
      dispatch({ type: 'UPDATE_CART_ITEM', payload: { id: productId, quantity } });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to update cart' });
    }
  };

  // Remove from cart
  const removeFromCart = async (productId: string) => {
    if (!state.cartId) return;
    
    try {
      await apiService.removeItemFromCart(state.cartId, productId);
      dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Failed to remove from cart' });
    }
  };

  // Set current page
  const setCurrentPage = (page: number) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: 'SET_ERROR', payload: null });
  };

  const contextValue: AppContextType = {
    state,
    actions: {
      loadProducts,
      loadCart,
      addToCart,
      updateCartItemQuantity,
      removeFromCart,
      setCurrentPage,
      clearError,
    },
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Hook to use context
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};