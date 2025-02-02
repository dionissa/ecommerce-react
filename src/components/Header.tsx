import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isLoggedIn: boolean;
  userName?: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, userName, onLogout }) => {
  return (
    <header>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            Loja do Dio
          </div>
          {isLoggedIn && (
            <div className="text-right">
              <p className="text-gray-700 text-sm">Welcome, {userName}</p>
              <button
                className="text-gray-600 hover:underline sm:mx-3"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
        <nav>
          <div className="flex flex-col sm:flex-row">
            <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" to="/products">Produtos</Link>
            {!isLoggedIn && (
              <>
                <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" to="/login">Entrar</Link>
                <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" to="/signup">Cadastro</Link>
              </>
            )}
            <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" to="/cart">Carrinho</Link>
          </div>
        </nav>
        <div className="relative mt-6 max-w-lg mx-auto">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Pesquisar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
