import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../store/productSlice';
import SearchBar from '../components/SearchBar';

const createTestStore = () => {
  return configureStore({
    reducer: {
      products: productReducer,
    },
  });
};

describe('SearchBar', () => {
  it('updates search term on input change', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    
    const input = screen.getByPlaceholderText('Search products...');
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(store.getState().products.searchTerm).toBe('test');
  });
});