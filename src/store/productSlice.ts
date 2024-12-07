import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/product';
import type { PaginationState } from '../types/pagination';

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  searchTerm: string;
  loading: boolean;
  error: string | null;
  sortBy: 'price' | 'rating' | null;
  sortOrder: 'asc' | 'desc';
  pagination: PaginationState;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  searchTerm: '',
  loading: false,
  error: null,
  sortBy: null,
  sortOrder: 'asc',
  pagination: {
    currentPage: 1,
    itemsPerPage: 8,
    totalItems: 0,
  },
};

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data as Product[];
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredProducts = state.products.filter(product =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.pagination.currentPage = 1;
      state.pagination.totalItems = state.filteredProducts.length;
    },
    setSortBy: (state, action: PayloadAction<{ sortBy: 'price' | 'rating' | null; order: 'asc' | 'desc' }>) => {
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.order;
      
      if (action.payload.sortBy === 'price') {
        state.filteredProducts.sort((a, b) => 
          action.payload.order === 'asc' ? a.price - b.price : b.price - a.price
        );
      } else if (action.payload.sortBy === 'rating') {
        state.filteredProducts.sort((a, b) => 
          action.payload.order === 'asc' ? a.rating.rate - b.rating.rate : b.rating.rate - a.rating.rate
        );
      }
      state.pagination.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.pagination.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.pagination.itemsPerPage = action.payload;
      state.pagination.currentPage = 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
        state.pagination.totalItems = action.payload.length;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const { setSearchTerm, setSortBy, setCurrentPage, setItemsPerPage } = productSlice.actions;
export default productSlice.reducer;