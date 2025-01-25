"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Product } from "@/app/multiy-components/productlistpage/shop-cart";

const getSearchResults = async (searchQuery: string) => {
  // Sanity query to fetch data matching the search term
  const query = `*[_type == "product" && title match "${searchQuery}*"] {
    _id,
    title,
    description,
    "imageUrl": productImage.asset->url,
    price,
    tags
  }`;

  const results = await client.fetch(query);
  return results;
};

const SearchingPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || ""; // Fetch query from URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        const results = await getSearchResults(query);
        setProducts(results);
      }
    };
    fetchResults();
  }, [query]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for "{query}"
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product: Product) => (
            <div
              key={product._id}
              className="border border-gray-200 p-4 rounded-md shadow hover:shadow-lg transition"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-bold text-blue-600">${product.price}</p>
            </div>
          ))
        ) : (
          <p>No results found for "{query}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchingPage;
