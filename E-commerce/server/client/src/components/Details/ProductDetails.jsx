  import React, { useState, useEffect } from "react";
  import { useParams , useNavigate} from "react-router-dom";
  import { getProductById } from "../../api/api";

  const ProductDetails = () => {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const productData = await getProductById(id);
          setData(productData);
          setLoader(false);
          console.log(productData);
        } catch (error) {
          console.error("Error fetching product:", error.message);
        }
      };

      fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
      const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const isProductInCart = existingCartItems.some((item) => item.id === data.id);

    if (!isProductInCart) {
      const updatedCartItems = [...existingCartItems, data];
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      console.log("Product added to cart:", data);
    }
      navigate("/cart");
    };

    return (
      <>
        {loader && <p>Loading...</p>}
        {data && (
          <div className="mx-auto mt-6 max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-auto max-w-md rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                  {data.title}
                </h1>
                <p className="text-gray-500 mb-4">{data.description}</p>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-extrabold text-gray-900">
                    ${data.price}
                  </span>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  export default ProductDetails;
