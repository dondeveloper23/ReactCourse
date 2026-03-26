"use client";

import { searchProductByQuery } from "@/services/productService";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  console.log(searchResults);

  useEffect(() => {
    if (!searchTerm) return;

    const timer = setTimeout(async () => {
      search();
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const search = async () => {
    const response = await fetch(
      `http://localhost:3000/api/search?q=${searchTerm}`,
    );
    const data = await response.json();
    setSearchResults(data.products);
  };

  return (
    <div>
      <form>
        <input
          placeholder="Search product"
          type="text"
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
        ></input>
        <button>Search</button>
      </form>
      {searchResults && (
        <div className='products-wrapper'>
          {searchResults.map((product, index) => (
            <a
              key={product.id}
              className="single-product"
              href={`/products/${product.id}`}
            >
              <h2 className="product-title">{product.title}</h2>
              <Image
                src={product.images[0]}
                width="300"
                height="150"
                alt={product.title}
                key={crypto.randomUUID()}
                className="product-image"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
