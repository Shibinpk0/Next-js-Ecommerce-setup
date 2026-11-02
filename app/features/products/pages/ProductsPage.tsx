// // // import { Link, useParams, useSearchParams } from "react-router";
// // "use client";
// // import { products } from "../../../products/data/products";
// // import { useCartStore } from "../../../stores/cartStore";

// import Image from "next/image";

// // import React from "react";
// // import { parseAsInteger, useQueryStates } from "nuqs";
// // import Link from "next/link";

// // export default function ProductsPage() {
// //   const cart = useCartStore((state) => state.cart);
// //   const addToCart = useCartStore((state) => state.addToCart);
// //   const increaseQuantity = useCartStore((state) => state.increaseQuantity);
// //   const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
// //   const removeFromCart = useCartStore((state) => state.removeFromCart);

// //   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

// //   const [{ page, size }, setPagination] = useQueryStates({
// //     page: parseAsInteger.withDefault(1),
// //     size: parseAsInteger.withDefault(5),
// //   });

// //   // const [searchParams, setSearchParams] = useSearchParams();
// //   // const limitPage = 5;
// //   // const currentPage = searchParams?.get("page") ?? 1;

// //   const handleset = (newpage: number) => {
// //     setPagination({ page: newpage });
// //   };

// //   const FilteredArray = React.useMemo(() => {
// //     let startIndex = 0;
// //     const endIndex = page * size;

// //     if (page !== 1) {
// //       startIndex = endIndex - size;
// //     }

// //     return products.slice(startIndex, endIndex);
// //   }, [page, size]);

// //   return (
// //     <div className="min-h-screen bg-amber-50">
// //       <header className="sticky top-0 z-50 flex items-center justify-between bg-amber-50 px-5 py-5 shadow-sm sm:px-8">
// //         <Link href="/products" className="text-2xl font-bold text-black">
// //           ShopNow
// //         </Link>

// //         <Link
// //           href="/cart"
// //           className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-semibold text-white transition hover:bg-gray-800"
// //         >
// //           <span>Cart ({cartCount})</span>
// //         </Link>
// //       </header>

// //       <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
// //         <h1 className="text-3xl font-bold text-gray-900">Discover Products</h1>

// //         <p className="mt-2 text-gray-500">Find something you'll love.</p>

// //         <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
// //           {FilteredArray.map((product) => {
// //             const cartItem = cart.find((item) => item.id === product.id);

// //             return (
// //               <article
// //                 key={product.id}
// //                 className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
// //               >
// //                 <Link href={`/products/${product.id}`} className="block">
// //                   <div className="flex h-48 items-center justify-center bg-white p-4">
// //                     <img
// //                       src={product.image}
// //                       alt={product.name}
// //                       loading="lazy"
// //                       className="h-full w-full object-contain"
// //                     />
// //                   </div>

// //                   <div className="px-5 pt-4">
// //                     <h2 className="text-lg font-semibold text-gray-900 hover:text-black">
// //                       {product.name}
// //                     </h2>

// //                     <p className="mt-2 line-clamp-2 text-sm text-gray-500">
// //                       {product.description}
// //                     </p>
// //                   </div>
// //                 </Link>

// //                 <div className="p-5 pt-3">
// //                   <p className="text-xl font-bold text-black">
// //                     ₹{product.price.toLocaleString("en-IN")}
// //                   </p>

// //                   {cartItem ? (
// //                     <div className="mt-4 space-y-3">
// //                       <div className="flex items-center justify-between rounded-lg border p-2">
// //                         <span className="text-sm font-medium">Quantity</span>

// //                         <div className="flex items-center gap-3">
// //                           <button
// //                             onClick={() => decreaseQuantity(product.id)}
// //                             disabled={cartItem.quantity === 1}
// //                             className="h-8 w-8 rounded-md border font-bold hover:bg-gray-100 disabled:opacity-30"
// //                             aria-label={`Decrease ${product.name} quantity`}
// //                           >
// //                             −
// //                           </button>

// //                           <span className="font-semibold">
// //                             {cartItem.quantity}
// //                           </span>

// //                           <button
// //                             onClick={() => increaseQuantity(product.id)}
// //                             className="h-8 w-8 rounded-md border font-bold hover:bg-gray-100"
// //                             aria-label={`Increase ${product.name} quantity`}
// //                           >
// //                             +
// //                           </button>
// //                         </div>
// //                       </div>

// //                       <p className="text-sm text-gray-500">
// //                         Subtotal: ₹
// //                         {(product.price * cartItem.quantity).toLocaleString(
// //                           "en-IN",
// //                         )}
// //                       </p>

// //                       <button
// //                         onClick={() => removeFromCart(product.id)}
// //                         className="w-full rounded-lg border border-red-200 py-2 font-medium text-red-600 hover:bg-red-50"
// //                       >
// //                         Remove
// //                       </button>
// //                     </div>
// //                   ) : (
// //                     <button
// //                       onClick={() => addToCart(product)}
// //                       className="mt-4 w-full rounded-lg bg-black py-3 font-medium text-white hover:bg-blue-700"
// //                     >
// //                       Add to Cart
// //                     </button>
// //                   )}
// //                 </div>
// //               </article>
// //             );
// //           })}
// //         </div>
// //         <div className="mt-8 flex justify-center gap-3">
// //           {Array.from({ length: 4 }, (_, index) => index + 1).map((pageno) => (
// //             <button
// //               key={pageno}
// //               onClick={() => handleset(pageno)}
// //               className={`rounded border px-4 py-2 ${
// //                 page === pageno ? "bg-black text-white" : "bg-white text-black"
// //               }`}
// //             >
// //               {pageno}
// //             </button>
// //           ))}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// "use client";

// import React from "react";
// import Link from "next/link";
// import { parseAsInteger, useQueryStates } from "nuqs";

// import { products } from "../../../products/data/products";
// import { useCart } from "@/app/provider/cartstoreprovider";
// import Image from "next/image";

// export default function ProductsPage() {
//   const {
//     cart,
//     addToCart,
//     increaseQuantity,
//     decreaseQuantity,
//     removeFromCart,
//   } = useCart();

//   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

//   const [{ page, size }, setPagination] = useQueryStates({
//     page: parseAsInteger.withDefault(1),
//     size: parseAsInteger.withDefault(5),
//   });

//   const handleset = (newpage: number) => {
//     setPagination({ page: newpage });
//   };

//   const FilteredArray = React.useMemo(() => {
//     const startIndex = (page - 1) * size;
//     const endIndex = page * size;

//     return products.slice(startIndex, endIndex);
//   }, [page, size]);

//   return (
//     <div className="min-h-screen bg-amber-50">
//       <header className="sticky top-0 z-50 flex items-center justify-between bg-amber-50 px-5 py-5 shadow-sm sm:px-8">
//         <Link href="/products" className="text-2xl font-bold text-black">
//           ShopNow
//         </Link>

//         <Link
//           href="/cart"
//           className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-semibold text-white transition hover:bg-gray-800"
//         >
//           <span>Cart ({cartCount})</span>
//         </Link>
//       </header>

//       <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
//         <h1 className="text-3xl font-bold text-gray-900">Discover Products</h1>

//         <p className="mt-2 text-gray-500">Find something you'll love.</p>

//         <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {FilteredArray.map((product) => {
//             const cartItem = cart.find((item) => item.id === product.id);

//             return (
//               <article
//                 key={product.id}
//                 className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
//               >
//                 <Link href={`/products/${product.id}`} className="block">
//                   <div className="flex h-48 items-center justify-center bg-white p-4">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       width={122}
//                       height={122}
//                       loading="lazy"
//                       className="h-full w-full object-contain"
//                     />
//                   </div>

//                   <div className="px-5 pt-4">
//                     <h2 className="text-lg font-semibold text-gray-900 hover:text-black">
//                       {product.name}
//                     </h2>

//                     <p className="mt-2 line-clamp-2 text-sm text-gray-500">
//                       {product.description}
//                     </p>
//                   </div>
//                 </Link>

//                 <div className="p-5 pt-3">
//                   <p className="text-xl font-bold text-black">
//                     ₹{product.price.toLocaleString("en-IN")}
//                   </p>

//                   {cartItem ? (
//                     <div className="mt-4 space-y-3">
//                       <div className="flex items-center justify-between rounded-lg border p-2">
//                         <span className="text-sm font-medium">Quantity</span>

//                         <div className="flex items-center gap-3">
//                           <button
//                             onClick={() => decreaseQuantity(product.id)}
//                             disabled={cartItem.quantity === 1}
//                             className="h-8 w-8 rounded-md border font-bold hover:bg-gray-100 disabled:opacity-30"
//                             aria-label={`Decrease ${product.name} quantity`}
//                           >
//                             −
//                           </button>

//                           <span className="font-semibold">
//                             {cartItem.quantity}
//                           </span>

//                           <button
//                             onClick={() => increaseQuantity(product.id)}
//                             className="h-8 w-8 rounded-md border font-bold hover:bg-gray-100"
//                             aria-label={`Increase ${product.name} quantity`}
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>

//                       <p className="text-sm text-gray-500">
//                         Subtotal: ₹
//                         {(product.price * cartItem.quantity).toLocaleString(
//                           "en-IN",
//                         )}
//                       </p>

//                       <button
//                         onClick={() => removeFromCart(product.id)}
//                         className="w-full rounded-lg border border-red-200 py-2 font-medium text-red-600 hover:bg-red-50"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ) : (
//                     <button
//                       onClick={() => addToCart(product)}
//                       className="mt-4 w-full rounded-lg bg-black py-3 font-medium text-white hover:bg-gray-800"
//                     >
//                       Add to Cart
//                     </button>
//                   )}
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         <div className="mt-8 flex justify-center gap-3">
//           {Array.from(
//             { length: Math.ceil(products.length / size) },
//             (_, index) => index + 1,
//           ).map((pageno) => (
//             <button
//               key={pageno}
//               onClick={() => handleset(pageno)}
//               className={`rounded border px-4 py-2 ${
//                 page === pageno ? "bg-black text-white" : "bg-white text-black"
//               }`}
//             >
//               {pageno}
//             </button>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// import Image from "next/image";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
// };

// type Props = {
//   products: Product[];
// };

// export default function ProductsPage({ products }: Props) {
//   return (
//     <section>
//       <h1 className="text-3xl font-bold text-gray-900">Discover Products</h1>

//       <p className="mt-2 text-gray-500">Find something you love.</p>

//       <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {products.map((product) => (
//           <article key={product.id} className="rounded-xl bg-white p-5 shadow">
//             <Image
//               src={product.image}
//               alt={product.title}
//               width={300}
//               height={200}
//               className="h-48 w-full object-contain"
//             />

//             <h2 className="mt-4 font-semibold">{product.title}</h2>

//             <p className="mt-2">₹{product.price}</p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
//

// import Image from "next/image";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   category?: string;
// };

// type Props = {
//   products: Product[];
// };

// export default function ProductsPage({ products }: Props) {
//   return (
//     <main className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold text-gray-900">Discover Products</h1>

//       <p className="mt-2 text-gray-500">Find something you love.</p>

//       <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {products.map((product) => (
//           <article
//             key={product.id}
//             className="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg"
//           >
//             <div className="relative h-56 w-full bg-white p-4">
//               <div className="h-56 w-full bg-white p-4">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="h-full w-full object-contain"
//                 />
//               </div>
//             </div>

//             <div className="p-5">
//               <h2 className="text-lg font-semibold text-gray-900">
//                 {product.title}
//               </h2>

//               <p className="mt-2 line-clamp-2 text-sm text-gray-600">
//                 {product.description}
//               </p>

//               {product.category && (
//                 <p className="mt-3 text-xs capitalize text-gray-500">
//                   {product.category}
//                 </p>
//               )}

//               <p className="mt-4 text-xl font-bold text-gray-900">
//                 ${product.price.toFixed(2)}
//               </p>
//             </div>
//           </article>
//         ))}
//       </div>
//     </main>
//   );
// }

import Image from "next/image";
import Pagination from "./Pagination";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category?: string;
};

type Props = {
  products: Product[];
  page: number;
  limit: number;
  total: number;
};

export default function ProductsPage({ products, page, limit, total }: Props) {
  const totalPages = Math.ceil(total / limit);

  return (
    <main className="min-h-screen bg-amber-50 p-6 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900">Discover Products</h1>

        <p className="mt-2 text-gray-500">Find something you love.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-48 items-center justify-center bg-white p-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-900">
                  {product.title}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                  {product.description}
                </p>

                {product.category && (
                  <p className="mt-3 text-xs capitalize text-gray-500">
                    {product.category}
                  </p>
                )}

                <p className="mt-4 text-xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && <Pagination page={page} totalPages={totalPages} />}
      </div>
    </main>
  );
}
