// import Link from "next/link";
// import { useParams } from "next/navigation";

// import { products } from "@/app/products/data/products";
// import { useCart } from "@/app/provider/cartstoreprovider";

// export default function ProductDetailsPage() {
//   const params = useParams<{ id: string }>();
//   const id = Number(params.id);

//   const product = products.find((item) => item.id === id);

//   const cart = useCartStore((state) => state.cart);
//   const addToCart = useCartStore((state) => state.addToCart);
//   const increaseQuantity = useCartStore((state) => state.increaseQuantity);
//   const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
//   const removeFromCart = useCartStore((state) => state.removeFromCart);

//   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-amber-50 p-8">
//         <h1 className="text-2xl font-bold">Product not found</h1>

//         <Link
//           href="/products"
//           className="mt-4 inline-block text-black hover:underline"
//         >
//           Back to Products
//         </Link>
//       </div>
//     );
//   }

//   const cartItem = cart.find((item) => item.id === product.id);

//   return (
//     <div className="min-h-screen bg-amber-50">
//       <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-5 py-5 shadow-sm sm:px-8">
//         <Link href="/products" className="text-2xl font-bold text-black">
//           ShopNow
//         </Link>

//         <Link
//           href="/cart"
//           className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800"
//         >
//           Cart ({cartCount})
//         </Link>
//       </header>

//       <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
//         <Link
//           href="/products"
//           className="text-sm font-medium text-black hover:underline"
//         >
//           ← Back to Products
//         </Link>

//         <article className="mt-6 grid gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
//           <div className="flex min-h-72 items-center justify-center rounded-xl bg-gray-50 p-6">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
//             />
//           </div>

//           <div className="flex flex-col justify-center">
//             <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

//             <p className="mt-4 leading-7 text-gray-600">
//               {product.description}
//             </p>

//             <p className="mt-6 text-3xl font-bold text-black">
//               ₹{product.price.toLocaleString("en-IN")}
//             </p>

//             {cartItem ? (
//               <div className="mt-6 space-y-4">
//                 <div className="flex items-center gap-4">
//                   <span className="font-medium">Quantity</span>

//                   <button
//                     onClick={() => decreaseQuantity(product.id)}
//                     disabled={cartItem.quantity === 1}
//                     className="h-9 w-9 rounded-md border font-bold disabled:opacity-30"
//                   >
//                     −
//                   </button>

//                   <span className="font-semibold">{cartItem.quantity}</span>

//                   <button
//                     onClick={() => increaseQuantity(product.id)}
//                     className="h-9 w-9 rounded-md border font-bold"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <button
//                   onClick={() => removeFromCart(product.id)}
//                   className="w-full rounded-lg border border-red-200 py-3 font-medium text-red-600 hover:bg-red-50"
//                 >
//                   Remove from Cart
//                 </button>

//                 <Link
//                   href="/cart"
//                   className="block rounded-lg bg-black py-3 text-center font-semibold text-white hover:bg-gray-800"
//                 >
//                   View Cart
//                 </Link>
//               </div>
//             ) : (
//               <button
//                 onClick={() => addToCart(product)}
//                 className="mt-6 w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800"
//               >
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         </article>
//       </main>
//     </div>
//   );
// // }

// "use client";

// import Link from "next/link";
// import { useParams } from "next/navigation";

// import { products } from "@/app/products/data/products";
// import { useCart } from "@/app/provider/cartstoreprovider";
// import Image from "next/image";

// export default function ProductDetailsPage() {
//   const params = useParams<{ id: string }>();
//   const id = Number(params.id);

//   const product = products.find((item) => item.id === id);

//   const {
//     cart,
//     addToCart,
//     increaseQuantity,
//     decreaseQuantity,
//     removeFromCart,
//   } = useCart();

//   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

//   if (!product) {
//     return (
//       <div className="min-h-screen bg-amber-50 p-8">
//         <h1 className="text-2xl font-bold">Product not found</h1>

//         <Link
//           href="/products"
//           className="mt-4 inline-block text-black hover:underline"
//         >
//           Back to Products
//         </Link>
//       </div>
//     );
//   }

//   const cartItem = cart.find((item) => item.id === product.id);

//   return (
//     <div className="min-h-screen bg-amber-50">
//       <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-5 py-5 shadow-sm sm:px-8">
//         <Link href="/products" className="text-2xl font-bold text-black">
//           ShopNow
//         </Link>

//         <Link
//           href="/cart"
//           className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800"
//         >
//           Cart ({cartCount})
//         </Link>
//       </header>

//       <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
//         <Link
//           href="/products"
//           className="text-sm font-medium text-black hover:underline"
//         >
//           ← Back to Products
//         </Link>

//         <article className="mt-6 grid gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
//           <div className="flex min-h-72 items-center justify-center rounded-xl bg-gray-50 p-6">
//             <Image
//               src={product.image}
//               alt={product.name}
//               className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
//             />
//           </div>

//           <div className="flex flex-col justify-center">
//             <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

//             <p className="mt-4 leading-7 text-gray-600">
//               {product.description}
//             </p>

//             <p className="mt-6 text-3xl font-bold text-black">
//               ₹{product.price.toLocaleString("en-IN")}
//             </p>

//             {cartItem ? (
//               <div className="mt-6 space-y-4">
//                 <div className="flex items-center gap-4">
//                   <span className="font-medium">Quantity</span>

//                   <button
//                     onClick={() => decreaseQuantity(product.id)}
//                     disabled={cartItem.quantity === 1}
//                     className="h-9 w-9 rounded-md border font-bold disabled:opacity-30"
//                   >
//                     −
//                   </button>

//                   <span className="font-semibold">{cartItem.quantity}</span>

//                   <button
//                     onClick={() => increaseQuantity(product.id)}
//                     className="h-9 w-9 rounded-md border font-bold"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <button
//                   onClick={() => removeFromCart(product.id)}
//                   className="w-full rounded-lg border border-red-200 py-3 font-medium text-red-600 hover:bg-red-50"
//                 >
//                   Remove from Cart
//                 </button>

//                 <Link
//                   href="/cart"
//                   className="block rounded-lg bg-black py-3 text-center font-semibold text-white hover:bg-gray-800"
//                 >
//                   View Cart
//                 </Link>
//               </div>
//             ) : (
//               <button
//                 onClick={() => addToCart(product)}
//                 className="mt-6 w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800"
//               >
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         </article>
//       </main>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";

import { products } from "@/app/products/data/products";
import { useCart } from "@/app/provider/cartstoreprovider";

export default function ProductDetailsPage({ id }: { id: string }) {
  const productId = Number(id);
  const product = products.find((item) => item.id === productId);

  const cart = useCart((state) => state.cart);
  const addToCart = useCart((state) => state.addToCart);
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const hasHydrated = useCart((state) => state.hasHydrated);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  if (!hasHydrated) {
    return <div className="min-h-screen bg-amber-50 p-8">Loading cart...</div>;
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-amber-50 p-8">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link
          href="/products"
          className="mt-4 inline-block text-black hover:underline"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-5 py-5 shadow-sm sm:px-8">
        <Link href="/products" className="text-2xl font-bold text-black">
          ShopNow
        </Link>

        <Link
          href="/cart"
          className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800"
        >
          Cart ({cartCount})
        </Link>
      </header>

      <main className="mx-  auto max-w-6xl px-5 py-10 sm:px-8">
        <Link
          href="/products"
          className="text-sm font-medium text-black hover:underline"
        >
          ← Back to Products
        </Link>

        <article className="mt-6 grid gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="flex min-h-72 items-center justify-center rounded-xl bg-gray-50 p-6">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

            <p className="mt-4 leading-7 text-gray-600">
              {product.description}
            </p>

            <p className="mt-6 text-3xl font-bold text-black">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            {cartItem ? (
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantity</span>

                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    disabled={cartItem.quantity === 1}
                    className="h-9 w-9 rounded-md border font-bold disabled:opacity-30"
                  >
                    −
                  </button>

                  <span className="font-semibold">{cartItem.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="h-9 w-9 rounded-md border font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="w-full rounded-lg border border-red-200 py-3 font-medium text-red-600 hover:bg-red-50"
                >
                  Remove from Cart
                </button>

                <Link
                  href="/cart"
                  className="block rounded-lg bg-black py-3 text-center font-semibold text-white hover:bg-gray-800"
                >
                  View Cart
                </Link>
              </div>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="mt-6 w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800"
              >
                Add to Cart
              </button>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}
