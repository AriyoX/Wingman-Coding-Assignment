import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="text-gray-800 dark:text-gray-200" size={20} />
      ) : (
        <Moon className="text-gray-800 dark:text-gray-200" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;