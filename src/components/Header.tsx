import React from 'react';
import { Wine } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import SortControls from './SortControls';

export const Header: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Wine className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                WINGMAN CHALLENGE
              </h1>
            </div>
            <ThemeToggle />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <SearchBar />
            <SortControls />
          </div>
        </div>
      </div>
    </div>
  );
}