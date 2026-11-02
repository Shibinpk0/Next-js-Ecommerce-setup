// import ProductPage from "./[id]/page";

// export type Product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
// };

// type ProductResponse = {
//   data: Product[];
// };

// export default async function Page() {
//   const response = await fetch(`${process.env.API_BASE_URL}/products`);
//   const products: ProductResponse = await response.json;
//   return (
//     <section>
//       <h1 className="text-3xl font-bold text-gray-900">Discover Products</h1>
//       <p className="mt-2 text-gray-500">Find something you love.</p>
//       <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {products?.data?.map((product) => (
//           <ProductPage key={product.id} product={product} />
//         ))}
//         ;
//       </div>
//     </section>
//   );
// }

// import ProductsPage from "../features/products/pages/ProductsPage";

// export type Product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
// };

// export default async function Page() {
//   const response = await fetch(`${process.env.API_BASE_URL}/products`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   const products: Product[] = await response.json();

//   return <ProductsPage products={products} />;
//(
//   <section>
//     <h1 className="text-3xl font-bold text-gray-900">Discover Products</h1>

//     <p className="mt-2 text-gray-500">Find something you love.</p>

//     <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//       {products.map((product) => (
//         <ProductsPage products={products} />
//       ))}
//     </div>
//   </section>
// );
// // }

// import { Suspense } from "react";
// import ProductsPage from "@/app/features/products/pages/ProductsPage";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   category?: string;
// };

// type ProductsResponse = {
//   data: Product[];
//   pagination: {
//     page: number;
//     limit: number;
//     total: number;
//   };
// };

// async function ProductList() {
//   const response = await fetch(`${process.env.API_BASE_URL}/products`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   const result: ProductsResponse = await response.json();

//   const products = result.data;

//   return <ProductsPage products={products} />;
// }

// export default function Page() {
//   return (
//     <Suspense fallback={<div className="p-6">Loading products...</div>}>
//       <ProductList />
//     </Suspense>
//   );
// }

import { Suspense } from "react";
import ProductsPage from "@/app/features/products/pages/ProductsPage";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category?: string;
};

type ProductsResponse = {
  data: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
};

async function ProductList({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page) || 1);
  const limit = 5;

  const response = await fetch(
    `${process.env.API_BASE_URL}/products?page=${page}&limit=${limit}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result: ProductsResponse = await response.json();

  console.log("API result:", result);

  return (
    <ProductsPage
      products={result.data}
      page={page}
      limit={limit}
      total={result.pagination.total}
    />
  );
}

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  return (
    <Suspense fallback={<div className="p-6">Loading products...</div>}>
      <ProductList searchParams={searchParams} />
    </Suspense>
  );
}
