import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Params {
  id: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface ProductDetailProps {
  onAddToCart: (item: { id: number; title: string; price: number; image: string }) => void;
  isLoggedIn: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart, isLoggedIn }) => {
  const { id } = useParams<Params>();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCartClick = () => {
    onAddToCart({ id: parseInt(id, 10), title: product?.title || '', price: product?.price || 0, image: product?.image || '' });
    navigate('/cart');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 flex items-center justify-center flex-col">
      <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
      <img src={product.image} alt={product.title} className="w-1/2 mb-4" />
      <p className="text-gray-700">{product.description}</p>
      <p className="text-gray-800 mt-4">${product.price}</p>
      <button onClick={handleAddToCartClick} disabled={!isLoggedIn} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        Comprar
      </button>
    </div>
  );
};

export default ProductDetail;
