"use client";

import { getProductById } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { CartItemType } from "@/types/types";
import { displayAsCurrency } from "@/utils/dataUtils";

export default function HeaderCart() {
	const { cart } = useCartStore();

	return (
		<table>
			<tbody>
				{cart.map((item) => (
					<CartProduct item={item} key={item.id} />
				))}
			</tbody>
		</table>
	);
}

function CartProduct({ item }: { item: CartItemType }) {
	const { removeFromCart } = useCartStore();
	const product = getProductById(item.id);

	if (!product) return <></>;

	return (
		<tr>
			<td>{item.quantity}</td>
			<td>{product.title}</td>
			<td>{displayAsCurrency(item.quantity * product.retailPrice)}</td>
			<td>
				<button type="button" onClick={() => removeFromCart(product.id)}>
					Remove
				</button>
			</td>
		</tr>
	);
}
