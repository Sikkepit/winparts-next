"use client";

import Icon from "@/components/icon/Icon";
import Toast from "@/components/toast/Toast";
import { useCartStore } from "@/store/cartStore";
import { ProductType } from "@/types/types";
import { useRef, useState } from "react";

export default function AddToCardButton({ product }: { product: ProductType }) {
	const [showToast, setShowToast] = useState(false);
	const timer = useRef<NodeJS.Timeout | null>(null);
	const { addToCart } = useCartStore();

	const handleOpen = () => {
		setShowToast(true);
		addToCart(product.id);

		if (timer.current) {
			clearTimeout(timer.current);
			timer.current = null;
		}

		setShowToast(false);

		setTimeout(() => {
			setShowToast(true);

			// Nested timeout so the second assignment of setShowToast gets called on the next tick
			timer.current = setTimeout(() => {
				setShowToast(false);
				timer.current = null;
			}, 4000);
		}, 0);
	};
	return (
		<>
			<button className="product-card__add-button" type="button" onClick={handleOpen}>
				<Icon variant="cartArrow" className="icon" />
			</button>

			{showToast && <Toast message={`${product.title} is toegevoegd aan je winkelwagentje`} />}
		</>
	);
}
