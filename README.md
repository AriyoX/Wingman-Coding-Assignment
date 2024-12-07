# Wingman E-commerce Challenge

A modern e-commerce application built with React, TypeScript, Redux Toolkit, and Tailwind CSS that showcases products with filtering, sorting, and dark mode capabilities.

## Demo
[Live Demo](https://wingman-coding-assignment.vercel.app/)

## Features
- **Product Listing:** View products with pagination.
- **Search Functionality:** Quickly find products.
- **Sorting Options:** Sort products by price and rating.
- **Responsive Design:** Optimized for all devices.
- **Dark Mode:** Toggle between light and dark themes.
- **Modern UI:** Smooth transitions for a better user experience.

## Tech Stack
- **Frontend:** React 18 with TypeScript
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Testing:** Vitest

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   git clone https://github.com/AriyoX/Wingman-Coding-Assignment
   cd Wingman-Coding-Assignment

2. Install dependencies:
    npm install

3. Start the development server:
    npm run dev

4. Open your browser and visit http://localhost:5173

### Running Tests

To run the test suite:
npm test

### Build for Production

To create a production build:
npm run build

The built files will be in the dist directory.

### Development Commands
- **npm run dev:** Start development server
- **npm run build:** Create production build
- **npm run preview:** Preview production build locally
- **npm run test:** Run test suite
- **npm run lint:** Run ESLint

### Project Structure
src/
├── components/      # React components
├── store/          # Redux store and slices
├── hooks/          # Custom React hooks
├── types/          # TypeScript type definitions
├── __tests__/      # Test files
└── App.tsx         # Root component

### Notes
- No login required - This is a demo application with public access
- Data is fetched from the Fake Store API
- The application uses local storage to persist theme preferences

### API Integration
The application uses the Fake Store API for product data. No authentication required for API access.