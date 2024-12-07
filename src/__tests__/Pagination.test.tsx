import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../store/productSlice';
import Pagination from '../components/Pagination';

const createTestStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      products: productReducer,
    },
    preloadedState: {
      products: {
        pagination: {
          currentPage: 1,
          itemsPerPage: 8,
          totalItems: 20,
        },
        products: [],
        filteredProducts: [],
        searchTerm: '',
        loading: false,
        error: null,
        sortBy: null,
        sortOrder: 'asc' as 'asc' | 'desc',
        ...initialState,
      },
    },
  });
};

describe('Pagination', () => {
  it('renders pagination controls correctly', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
    
    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getByText('2')).toBeDefined();
  });

  it('handles page changes correctly', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
    
    fireEvent.click(screen.getByText('2'));
    expect(store.getState().products.pagination.currentPage).toBe(2);
  });
});