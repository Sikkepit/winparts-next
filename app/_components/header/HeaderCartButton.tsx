"use client";

import Icon from "@/components/icon/Icon";
import { useCartStore } from "@/store/cartStore";

export default function HeaderCartButton({ onClick }: { onClick: () => void }) {
	const { cart } = useCartStore();

	const countItems = () => {
		return cart.reduce((acc, item) => (acc += item.quantity), 0);
	};

	const handleClick = (e: React.MouseEvent) => {
		onClick();
	};

	const count = countItems();

	return (
		<button type="button" className="flex items-center gap-1" onClick={handleClick}>
			<Icon variant={"cart"} className="size-6" />
			<span className="font-bold">{count}</span>
		</button>
	);
}
