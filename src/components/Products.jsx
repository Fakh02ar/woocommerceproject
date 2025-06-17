import React from "react";
import { Heart, Eye } from "lucide-react";
import dog from "../assets/dog.jpeg";
import camra from "../assets/camra.png";
import laptop from "../assets/laptop.png";
import wash from "../assets/wash.png";

const products = [
  {
    id: 1,
    title: "Breed Dry Dog Food",
    price: 100,
    discount: 40,
    rating: 4.5,
    reviews: 88,
    image: dog,
  },
  {
    id: 2,
    title: "CANON EOS DSLR Camera",
    price: 360,
    discount: 35,
    rating: 4.2,
    reviews: 75,
    image: camra,
  },
  {
    id: 3,
    title: "ASUS FHD Gaming Laptop",
    price: 700,
    discount: 30,
    rating: 5,
    reviews: 99,
    image: laptop,
  },
  {
    id: 4,
    title: "Curology Product Set ",
    price: 250,
    discount: 25,
    rating: 4.5,
    reviews: 99,
    image: wash,
  },
];

const Products = () => {
  return (
    <div className="py-6 xl:max-w-[1200px] m-auto px-3 mt-20 pb-5">
      <div className="flex items-center gap-2 text-red-500 mb-2">
        <div className="w-3 h-6 bg-[#DB4444] rounded-sm"></div>
        <span className="font-semibold text-[#DB4444]">Products</span>
      </div>
      <h1 className="text-[36px] font-bold mb-10">Explore Our Products</h1>
      {/* Product grid section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg overflow-hidden"
          >
            <div className="absolute top-2 right-3">
              <Heart className="w-8 h-8 p-2 text-gray-500 bg-white hover:bg-[#DB4444] rounded-full hover:text-white" />
              <Eye className="w-8 h-8 p-2 text-gray-500 bg-white rounded-full mt-3 hover:bg-[#DB4444] hover:text-white" />
            </div>

            <div className="flex justify-center bg-[#F5F5F5]">
              <img
                src={product.image}
                alt={product.title}
                className="w-[200px] h-50  p-4"
              />
            </div>

            <a href="/cart">
              <button className="mt-1 w-full bg-[#000] text-white py-2 rounded hover:bg-[#DB4444] cursor-pointer">
                Add To Cart
              </button>
            </a>

            <div className="pt-2">
              <h3 className="text-sm font-semibold mb-1">{product.title}</h3>

              {/* Price and Rating Flex layout */}
              <div className="flex gap-2 items-center mb-1">
                <span className="text-red-500 font-semibold">${product.price}</span>
                <div className="text-[#FFAD33] text-xl">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                </div>
                {/* Review count with gray color */}
                <span className="text-gray-400 text-sm">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
