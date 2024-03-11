"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";


const ProductDisplayPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Product Display Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md">
            <div className="image-container h-52 sm:h-64 mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="font-simplon-norm text-black font-semibold text-lg leading-6">
                  {product.title.length > 18
                    ? product.title.slice(0, 18) + "..."
                    : product.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2 mb-2">
                  <span className="underline text-blue-400">Sign In</span>
                  <span>  Create an account to see pricing</span>
                </p>
              </div>
              <div>
                <Image
                  src="/images/heart.png"
                  alt="heart"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplayPage;
