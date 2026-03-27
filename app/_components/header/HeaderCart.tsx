"use client";

import { getProductById } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { CartItemType } from "@/types/types";
import { displayAsCurrency } from "@/utils/dataUtils";

import "./headercart.css";
import Icon from "@/components/icon/Icon";

export default function HeaderCart() {
	const { cart } = useCartStore();

	return (
		<div className="header-cart">
			<table>
				<tbody>
					{cart.map((item) => (
						<CartProduct item={item} key={item.id} />
					))}
				</tbody>
			</table>
		</div>
	);
}

function CartProduct({ item }: { item: CartItemType }) {
	const { removeFromCart } = useCartStore();
	const product = getProductById(item.id);

	if (!product) return <></>;

	return (
		<tr>
			<td>{item.quantity}</td>
			<td className="truncated" title={product.title}>
				{product.title}
			</td>
			<td>{displayAsCurrency(item.quantity * product.retailPrice)}</td>
			<td>
				<button
					type="button"
					className="header-cart__delete"
					title="Verwijder uit mandje"
					onClick={() => removeFromCart(product.id)}
				>
					<Icon variant="trash" className="icon" />
				</button>
			</td>
		</tr>
	);
}
