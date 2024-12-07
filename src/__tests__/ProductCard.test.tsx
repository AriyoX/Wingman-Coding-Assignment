import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProductCard from '../components/ProductCard';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  description: 'Test description',
  category: 'test',
  image: 'test.jpg',
  rating: {
    rate: 4.5,
    count: 100
  }
};

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Test Product')).toBeDefined();
    expect(screen.getByText('$99.99')).toBeDefined();
    expect(screen.getByText('(100 reviews)')).toBeDefined();
    expect(screen.getByAltText('Test Product')).toBeDefined();
  });
});