"use client";

import { getProductById } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { CartProductType } from "@/types/types";
import { displayAsCurrency } from "@/utils/dataUtils";
import { RefObject } from "react";

import Icon from "@/components/icon/Icon";
import "./headercart.css";

export default function HeaderCart({ ref }: { ref: RefObject<HTMLDivElement | null> }) {
	const { cart } = useCartStore();

	const getItems = () => {
		let totalAmount = 0;
		const products: CartProductType[] = [];

		cart.map((item) => {
			const product = getProductById(item.id);

			if (product) {
				totalAmount += item.quantity * product.retailPrice;
				products.push({ product: product, quantity: item.quantity });
			}
		});

		return { totalAmount, products };
	};

	const { totalAmount, products } = getItems();

	return (
		<div className="header-cart relative">
			<div className="header-cart__body shadow-lg" ref={ref}>
				<div className="header-cart__title">Winkelwagen</div>

				{products.length > 0 ? (
					<>
						<table>
							<tbody>
								{products.map((product) => (
									<CartProduct
										product={product}
										key={product.product.id}
									/>
								))}
							</tbody>
						</table>

						<div className="font-medium mt-4 text-right">
							Totaal: {displayAsCurrency(totalAmount)}
						</div>
					</>
				) : (
					<span>Je winkelwagentje is leeg</span>
				)}
			</div>
		</div>
	);
}

function CartProduct({ product }: { product: CartProductType }) {
	const { removeFromCart } = useCartStore();

	const { product: item, quantity } = product;

	return (
		<tr>
			<td>{quantity}</td>

			<td className="truncated" title={item.title}>
				{item.title}
			</td>

			<td>{displayAsCurrency(quantity * item.retailPrice)}</td>

			<td>
				<button
					type="button"
					className="header-cart__delete"
					title="Verwijder uit mandje"
					onClick={() => removeFromCart(item.id)}
				>
					<Icon variant="trash" className="icon" />
				</button>
			</td>
		</tr>
	);
}
