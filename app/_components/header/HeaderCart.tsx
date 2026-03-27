"use client";

import { useCartStore } from "@/store/cartStore";

export default function HeaderCart() {
	const { cart } = useCartStore();

	return <>{JSON.stringify(cart)}</>;
}
