import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
      <div className="flex items-end justify-end h-56 w-full bg-cover mt-10" style={{ backgroundImage: `url(${product.image})` }}>
      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase">{product.title}</h3>
        <span className="text-gray-500 mt-2">${product.price}</span>
      </div>
    </Link>
  );
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://fakestoreapi.com/products');
        setProducts(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;