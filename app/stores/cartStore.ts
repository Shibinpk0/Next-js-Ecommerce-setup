// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import type { Product } from "../products/data/products";

// export type CartItem = Product & {
//   quantity: number;
// };

// type CartState = {
//   cart: CartItem[];

//   addToCart: (product: Product) => void;
//   increaseQuantity: (id: number) => void;
//   decreaseQuantity: (id: number) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
// };

// export const useCartStore = create<CartState>()(
//   persist(
//     (set) => ({
//       cart: [],

//       addToCart: (product) =>
//         set((state) => {
//           const existingItem = state.cart.find(
//             (item) => item.id === product.id,
//           );

//           if (existingItem) {
//             return {
//               cart: state.cart.map((item) =>
//                 item.id === product.id
//                   ? { ...item, quantity: item.quantity + 1 }
//                   : item,
//               ),
//             };
//           }

//           return {
//             cart: [...state.cart, { ...product, quantity: 1 }],
//           };
//         }),

//       increaseQuantity: (id) =>
//         set((state) => ({
//           cart: state.cart.map((item) =>
//             item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
//           ),
//         })),

//       decreaseQuantity: (id) =>
//         set((state) => ({
//           cart: state.cart.map((item) =>
//             item.id === id
//               ? {
//                   ...item,
//                   quantity: Math.max(1, item.quantity - 1),
//                 }
//               : item,
//           ),
//         })),

//       removeFromCart: (id) =>
//         set((state) => ({
//           cart: state.cart.filter((item) => item.id !== id),
//         })),

//       clearCart: () => set({ cart: [] }),
//     }),
//     {
//       name: "shopnow-cart",
//       storage: createJSONStorage(() => localStorage),
//       partialize: (state) => ({ cart: state.cart }),
//     },
//   ),
// );

// import { createStore } from "zustand/vanilla";
// import { persist, createJSONStorage } from "zustand/middleware";
// import type { Product } from "../products/data/products";

// export type CartItem = Product & {
//   quantity: number;
// };

// export type CartState = {
//   cart: CartItem[];
//   addToCart: (product: Product) => void;
//   increaseQuantity: (id: number) => void;
//   decreaseQuantity: (id: number) => void;
//   removeFromCart: (id: number) => void;
//   clearCart: () => void;
// };

// export const createCartStore = () =>
//   createStore<CartState>()(
//     persist(
//       (set) => ({
//         cart: [],

//         addToCart: (product) =>
//           set((state) => {
//             const existingItem = state.cart.find(
//               (item) => item.id === product.id,
//             );

//             if (existingItem) {
//               return {
//                 cart: state.cart.map((item) =>
//                   item.id === product.id
//                     ? { ...item, quantity: item.quantity + 1 }
//                     : item,
//                 ),
//               };
//             }

//             return {
//               cart: [...state.cart, { ...product, quantity: 1 }],
//             };
//           }),

//         increaseQuantity: (id) =>
//           set((state) => ({
//             cart: state.cart.map((item) =>
//               item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
//             ),
//           })),

//         decreaseQuantity: (id) =>
//           set((state) => ({
//             cart: state.cart.map((item) =>
//               item.id === id
//                 ? { ...item, quantity: Math.max(1, item.quantity - 1) }
//                 : item,
//             ),
//           })),

//         removeFromCart: (id) =>
//           set((state) => ({
//             cart: state.cart.filter((item) => item.id !== id),
//           })),

//         clearCart: () => set({ cart: [] }),
//       }),
//       {
//         name: "shopnow-cart",
//         storage: createJSONStorage(() => localStorage),
//       },
//     ),
//   );

import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Product } from "../products/data/products";

export type CartItem = Product & {
  quantity: number;
};

export type CartState = {
  cart: CartItem[];
  hasHydrated: boolean;
};

export type CartActions = {
  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  setHasHydrated: (value: boolean) => void;
};

export type CartStore = CartState & CartActions;

export const createCartStore = () =>
  createStore<CartStore>()(
    persist(
      (set) => ({
        cart: [],
        hasHydrated: false,

        addToCart: (product) =>
          set((state) => {
            const existingItem = state.cart.find(
              (item) => item.id === product.id,
            );

            if (existingItem) {
              return {
                cart: state.cart.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
                ),
              };
            }

            return {
              cart: [...state.cart, { ...product, quantity: 1 }],
            };
          }),

        increaseQuantity: (id) =>
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          })),

        decreaseQuantity: (id) =>
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                : item,
            ),
          })),

        removeFromCart: (id) =>
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
          })),

        clearCart: () => set({ cart: [] }),

        setHasHydrated: (value) => set({ hasHydrated: value }),
      }),
      {
        name: "shopnow-cart",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ cart: state.cart }),
        skipHydration: true,

        onRehydrateStorage: () => (state, error) => {
          if (error) {
            console.error("Cart hydration failed:", error);
          }

          state?.setHasHydrated(true);
        },
      },
    ),
  );
