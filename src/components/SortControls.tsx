import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../store/productSlice';
import { RootState } from '../store/store';

const SortControls: React.FC = () => {
  const dispatch = useDispatch();
  const { sortBy, sortOrder } = useSelector((state: RootState) => state.products);

  const handleSortChange = (value: string) => {
    const [sort, order] = value.split('-');
    dispatch(setSortBy({ 
      sortBy: sort as 'price' | 'rating' | null,
      order: order as 'asc' | 'desc'
    }));
  };

  return (
    <select
      value={sortBy ? `${sortBy}-${sortOrder}` : ''}
      onChange={(e) => handleSortChange(e.target.value)}
      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Sort by</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating-desc">Highest Rated</option>
      <option value="rating-asc">Lowest Rated</option>
    </select>
  );
};

export default SortControls;