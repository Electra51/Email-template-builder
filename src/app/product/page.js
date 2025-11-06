// import React from "react";

// const ProductPage = async () => {
//   const res = await fetch(
//     "http://api.source.merchantbay.com/api/v1/products/",
//     {
//       cache: "no-store",
//     }
//   );
//   const { data: products } = await res.json();
//   console.log("products", products);

//     return <div className="p-5">

//   </div>;
// };

// export default ProductPage;

import Image from "next/image";
import React from "react";

const ProductPage = async () => {
  // Fetch products from API
  //   const res = await fetch("https://fakestoreapi.com/products", {
  //     cache: "no-store", // always fetch fresh data
  //   });
  //   const { data: products } = await res.json();
  //   //   console.log("products", res.json());

  //   const jsonData = await res.json(); // read body once
  //   console.log("products", jsonData.data); // now log safely

  // const products = jsonData.data;

  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const jsonData = await res.json(); // read body once
  console.log("products", jsonData); // now log safely

  const products = jsonData;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Product List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="p-4 border bg-gray-200 rounded-md shadow hover:shadow-lg transition">
              <Image
                src={product.image}
                alt="product-image"
                height={200}
                width={200}
              />
              <h2 className="font-semibold">{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductPage;
