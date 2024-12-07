import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { fetchProducts } from './store/productSlice';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import Pagination from './components/Pagination';
import ThemeToggle from './components/ThemeToggle';
import { Loader2 } from 'lucide-react';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts, loading, error, pagination } = useSelector(
    (state: RootState) => state.products
  );

  const { currentPage, itemsPerPage } = pagination;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
        <Loader2 className="animate-spin dark:text-white" size={48} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <SearchBar />
            <ThemeToggle />
          </div>
          <SortControls />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getCurrentPageItems().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No products found</p>
          </div>
        ) : (
          <Pagination />
        )}
      </div>
    </div>
  );
}

export default App;