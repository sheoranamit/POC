import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../api/api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []); 

  const shortTitle = (text) => {
    if (text.length >= 25) {
      return text.substring(0, 25) + "...";
    }
    return text;
  };

  const handleProductClick = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) 
    {
      console.log(`Clicked on product: ${selectedProduct.title}`);
    } else 
    {
      console.error(`Product with ID ${productId} not found`);
    }

  };
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products && products.map((product) => (
            <div key={product.id} className="group relative" onClick={() => handleProductClick(product.id)}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {shortTitle(product.title)}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  $ {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
