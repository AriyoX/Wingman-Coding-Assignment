import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrentPage } from '../store/productSlice';
import { usePagination } from '../hooks/usePagination';

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { pagination } = useSelector((state: RootState) => state.products);
  const { currentPage, itemsPerPage, totalItems } = pagination;

  const paginationRange = usePagination({
    currentPage,
    totalItems,
    itemsPerPage,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <nav className="flex items-center justify-center space-x-2 mt-8">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg border ${
          currentPage === 1
            ? 'text-gray-400 border-gray-200 cursor-not-allowed'
            : 'text-gray-700 border-gray-300 hover:bg-gray-50'
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === '...') {
          return (
            <span
              key={`dots-${index}`}
              className="px-4 py-2 text-gray-400"
            >
              &#8230;
            </span>
          );
        }

        return (
          <button
            key={pageNumber}
            onClick={() => dispatch(setCurrentPage(pageNumber as number))}
            className={`px-4 py-2 rounded-lg border ${
              pageNumber === currentPage
                ? 'bg-blue-500 text-white border-blue-500'
                : 'text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={onNext}
        disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        className={`p-2 rounded-lg border ${
          currentPage === Math.ceil(totalItems / itemsPerPage)
            ? 'text-gray-400 border-gray-200 cursor-not-allowed'
            : 'text-gray-700 border-gray-300 hover:bg-gray-50'
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </nav>
  );
};

export default Pagination;