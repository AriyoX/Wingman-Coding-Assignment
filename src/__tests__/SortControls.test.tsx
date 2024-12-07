import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../store/productSlice';
import SortControls from '../components/SortControls';

const createTestStore = () => {
  return configureStore({
    reducer: {
      products: productReducer,
    },
  });
};

describe('SortControls', () => {
  it('changes sort option correctly', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <SortControls />
      </Provider>
    );
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'price-asc' } });
    
    const state = store.getState().products;
    expect(state.sortBy).toBe('price');
    expect(state.sortOrder).toBe('asc');
  });
});