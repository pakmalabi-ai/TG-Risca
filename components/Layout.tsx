import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Printer, BookOpen, Heart } from 'lucide-react';
import { NAV_ITEMS } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="p-2.5 bg-primary-600 rounded-xl shadow-lg shadow-primary-200 group-hover:bg-primary-700 transition-all duration-300">
                  <Printer className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xl font-extrabold text-slate-900 leading-tight tracking-tight">Teknik Grafika</span>
                  <span className="text-xs text-primary-700 font-bold tracking-wide uppercase">SMK Negeri 1 Kaligondang</span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-primary-600 text-white shadow-md shadow-primary-200'
                      : 'text-slate-600 hover:text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-slate-700 hover:text-primary-700 hover:bg-primary-50 focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-primary-100 absolute w-full shadow-xl z-50">
            <div className="px-4 pt-2 pb-4 space-y-2 max-h-[70vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-bold ${
                    location.pathname === item.path
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden min-h-[60vh] border border-slate-100">
           {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="flex items-center space-x-2 text-slate-700 font-medium">
               <BookOpen className="h-5 w-5 text-primary-600" />
               <span className="text-sm">
                 Dibuat oleh <strong className="text-slate-900">Risca Damayanti, M.Pd.</strong> – SMK Negeri 1 Kaligondang
               </span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-500 text-sm font-medium">
              <span>Supported by</span>
              <span className="font-bold text-primary-700">MWS AI Studio</span>
              <Heart className="h-4 w-4 text-primary-500 fill-current animate-pulse" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;