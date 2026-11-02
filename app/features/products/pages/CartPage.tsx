// "use client";
// import Link from "next/link";
// import { useCartStore } from "../../../stores/cartStore";

// export default function CartPage() {
//   const cart = useCartStore((state) => state.cart);
//   const increaseQuantity = useCartStore((state) => state.increaseQuantity);
//   const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
//   const removeFromCart = useCartStore((state) => state.removeFromCart);
//   const clearCart = useCartStore((state) => state.clearCart);

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <div className="min-h-screen bg-amber-50">
//       <header className="sticky top-0 z-50 flex items-center justify-between bg-amber-50 px-5 py-5 shadow-sm sm:px-8">
//         <Link href="/products" className="text-2xl font-bold text-black">
//           ShopNow
//         </Link>

//         <span className="flex items-center gap-2 font-semibold">
//           Your Cart ({cartCount})
//         </span>
//       </header>

//       <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
//         <h1 className="text-3xl font-bold text-gray-900">Your Shopping Cart</h1>

//         {cart.length === 0 ? (
//           <div className="mt-8 rounded-xl bg-white p-8 text-center shadow-sm">
//             <p className="text-gray-600">Your cart is empty.</p>

//             <Link
//               href="/products"
//               className="mt-5 inline-block rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
//             >
//               Browse Products
//             </Link>
//           </div>
//         ) : (
//           <div className="mt-8 grid gap-8 lg:grid-cols-3">
//             <div className="space-y-4 lg:col-span-2">
//               {cart.map((item) => (
//                 <article
//                   key={item.id}
//                   className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center"
//                 >
//                   <Link
//                     href={`/products/${item.id}`}
//                     className="flex h-28 w-full shrink-0 items-center justify-center rounded-lg bg-gray-50 p-2 sm:w-28"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="h-full w-full object-contain"
//                     />
//                   </Link>

//                   <div className="min-w-0 flex-1">
//                     <Link
//                       href={`/products/${item.id}`}
//                       className="font-semibold text-gray-900 hover:text-black"
//                     >
//                       {item.name}
//                     </Link>

//                     <p className="mt-1 text-sm text-gray-500">
//                       ₹{item.price.toLocaleString("en-IN")} each
//                     </p>

//                     <div className="mt-3 flex items-center gap-3">
//                       <button
//                         onClick={() => decreaseQuantity(item.id)}
//                         disabled={item.quantity === 1}
//                         className="h-8 w-8 rounded-md border font-bold disabled:opacity-30"
//                         aria-label={`Decrease ${item.name} quantity`}
//                       >
//                         −
//                       </button>

//                       <span>{item.quantity}</span>

//                       <button
//                         onClick={() => increaseQuantity(item.id)}
//                         className="h-8 w-8 rounded-md border font-bold"
//                         aria-label={`Increase ${item.name} quantity`}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
//                     <p className="font-bold text-black">
//                       ₹{(item.price * item.quantity).toLocaleString("en-IN")}
//                     </p>

//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="text-sm font-medium text-red-600 hover:text-red-800"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </article>
//               ))}

//               <button
//                 onClick={clearCart}
//                 className="text-sm font-medium text-red-600 hover:text-red-800"
//               >
//                 Clear Cart
//               </button>
//             </div>

//             <aside className="h-fit rounded-xl bg-white p-6 shadow-sm">
//               <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

//               <div className="mt-5 flex justify-between text-gray-600">
//                 <span>Items</span>
//                 <span>{cartCount}</span>
//               </div>

//               <div className="mt-4 flex justify-between border-t pt-4">
//                 <span className="font-semibold">Total</span>
//                 <span className="text-xl font-bold text-black">
//                   ₹{total.toLocaleString("en-IN")}
//                 </span>
//               </div>

//               <button
//                 onClick={() =>
//                   alert("Checkout functionality is not implemented yet.")
//                 }
//                 className="mt-6 w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800"
//               >
//                 Proceed to Checkout
//               </button>

//               <Link
//                 href="/products"
//                 className="mt-4 block text-center text-sm text-gray-600 hover:text-black"
//               >
//                 Continue Shopping
//               </Link>
//             </aside>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useCart } from "@/app/provider/cartstoreprovider";
import Image from "next/image";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-amber-50 px-5 py-5 shadow-sm sm:px-8">
        <Link href="/products" className="text-2xl font-bold text-black">
          ShopNow
        </Link>

        <span className="flex items-center gap-2 font-semibold">
          Your Cart ({cartCount})
        </span>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="mt-8 rounded-xl bg-white p-8 text-center shadow-sm">
            <p className="text-gray-600">Your cart is empty.</p>

            <Link
              href="/products"
              className="mt-5 inline-block rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center"
                >
                  <Link
                    href={`/products/${item.id}`}
                    className="flex h-28 w-full shrink-0 items-center justify-center rounded-lg bg-gray-50 p-2 sm:w-28"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={112}
                      height={112}
                      className="h-full w-full object-contain"
                    />
                  </Link>

                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/products/${item.id}`}
                      className="font-semibold text-gray-900 hover:text-black"
                    >
                      {item.name}
                    </Link>

                    <p className="mt-1 text-sm text-gray-500">
                      ₹{item.price.toLocaleString("en-IN")} each
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity === 1}
                        className="h-8 w-8 rounded-md border font-bold disabled:opacity-30"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="h-8 w-8 rounded-md border font-bold"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <p className="font-bold text-black">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm font-medium text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}

              <button
                onClick={clearCart}
                className="text-sm font-medium text-red-600 hover:text-red-800"
              >
                Clear Cart
              </button>
            </div>

            <aside className="h-fit rounded-xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

              <div className="mt-5 flex justify-between text-gray-600">
                <span>Items</span>
                <span>{cartCount}</span>
              </div>

              <div className="mt-4 flex justify-between border-t pt-4">
                <span className="font-semibold">Total</span>

                <span className="text-xl font-bold text-black">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                onClick={() =>
                  alert("Checkout functionality is not implemented yet.")
                }
                className="mt-6 w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800"
              >
                Proceed to Checkout
              </button>

              <Link
                href="/products"
                className="mt-4 block text-center text-sm text-gray-600 hover:text-black"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}
