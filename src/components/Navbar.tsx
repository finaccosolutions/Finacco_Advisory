import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  currentPage: 'home' | 'about' | 'contact';
  setCurrentPage: (page: 'home' | 'about' | 'contact') => void;
}

export default function Navbar({ theme, toggleTheme, currentPage, setCurrentPage }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center h-24 sm:h-16 py-2 sm:py-0">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setCurrentPage('home');
              }}
              className="flex items-center gap-2 text-lg sm:text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                </svg>
              </span>
              <span className="hidden sm:inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text font-extrabold">
                Finacco Advisory
              </span>
              <span className="sm:hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text font-extrabold">
                Finacco Advisory
              </span>
            </button>
            <button
              onClick={toggleTheme}
              className="sm:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center w-full sm:flex-1 sm:justify-end gap-2 sm:gap-4 mt-2 sm:mt-0">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setCurrentPage('about');
              }}
              className={`relative group px-2 sm:px-3 py-2 text-sm sm:text-base transition-colors ${
                currentPage === 'about'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="relative group px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Services
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setCurrentPage('contact');
              }}
              className={`relative group px-3 py-2 transition-colors ${
                currentPage === 'contact'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Contact Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button
              className="hidden sm:block p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}