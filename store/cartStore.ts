import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CartItem = {
	id: number;
	quantity: number;
};

type CartStore = {
	cart: CartItem[];

	addToCart: (id: number) => void;
	removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			cart: [],
			addToCart: (id: number) => {
				const { cart } = get();
				const existingItem = cart.find((item) => item.id === id);

				if (existingItem) {
					set({
						cart: cart.map((item) =>
							item.id === id
								? { ...item, quantity: item.quantity + 1 }
								: item,
						),
					});
				} else {
					set({ cart: [...cart, { id: id, quantity: 1 }] });
				}
			},
			removeFromCart: (id: number) =>
				set((state) => ({
					cart: state.cart.filter((item) => item.id !== id),
				})),
		}),
		{
			name: "shopping-cart-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
);
