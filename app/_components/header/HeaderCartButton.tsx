"use client";

import Icon from "@/components/icon/Icon";
import { useCartStore } from "@/store/cartStore";

export default function HeaderCartButton({ onClick }: { onClick: () => void }) {
	const { cart } = useCartStore();

	const countItems = () => {
		return cart.reduce((acc, item) => (acc += item.quantity), 0);
	};

	const count = countItems();

	return (
		<button type="button" className="flex items-center gap-1" onClick={onClick}>
			<Icon variant={"cart"} className="size-6" />
			<span className="font-bold">{count}</span>
		</button>
	);
}
