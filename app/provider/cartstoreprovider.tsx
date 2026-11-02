// "use client";
// import { createContext, useContext, useState, type ReactNode } from "react";

// import { useStore } from "zustand";
// import { createCartStore } from "../stores/cartStore";

// const CartContext = createContext<ReturnType<typeof createCartStore> | null>(
//   null,
// );

// export function CartStoreProvider({ children }: { children: ReactNode }) {
//   const [store] = useState(() => createCartStore());

//   return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
// }

// export function useCart() {
//   const store = useContext(CartContext);

//   if (store === null) {
//     throw new Error("useCart must be used inside CartStoreProvider");
//   }

//   return useStore(store);
// }

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { useStore } from "zustand";
import { createCartStore, type CartStore } from "../stores/cartStore";

type CartStoreApi = ReturnType<typeof createCartStore>;

const CartContext = createContext<CartStoreApi | null>(null);

export function CartStoreProvider({ children }: { children: ReactNode }) {
  const [store] = useState(() => createCartStore());

  useEffect(() => {
    void store.persist.rehydrate();
  }, [store]);

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}

export function useCart<T>(selector: (state: CartStore) => T): T {
  const store = useContext(CartContext);

  if (!store) {
    throw new Error("useCart must be used inside CartStoreProvider");
  }

  return useStore(store, selector);
}
