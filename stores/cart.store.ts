import { create } from "zustand"
import { ProductType } from "@/utils/types/types"

// type Product = {
//   id: string
//   name: string
//   price: number
//   quantity: number
//   color: string
//   image?: {
//     name: string
//   }
// }

export type CartStoreProps = {
  items: ProductType[]
  addItem: (product: ProductType) => void
  removeItem: (itemId: string) => void
  clearCart: () => void
  getTotalPrice: () => number
  getItemCount: () => number
}

export const useStoreCart = create<CartStoreProps>((set, get) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.id === item.id && i.color === item.color
      )

      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id && i.color === item.color
              ? {
                  ...i,
                  quantity: i.quantity + item.quantity,
                  price: i.price + item.price,
                }
              : i
          ),
        }
      }
      return { items: [...state.items, item] }
    }),
  removeItem: (itemId: string) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price, 0)
  },
  getItemCount: () => get().items.length,
}))
