import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src="https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif"
        alt="404 Not Found"
        className="mb-4 rounded-full shadow-md"
      />
      <h1 className="text-2xl font-bold text-gray-800">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600">
        Sorry, but the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
