"use client";

import { getProductById } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { CartProductType } from "@/types/types";
import { displayAsCurrency } from "@/utils/dataUtils";
import { RefObject } from "react";

import Image from "next/image";
import Icon from "@/components/icon/Icon";
import "./headercart.css";

type HeaderCartProps = { ref: RefObject<HTMLDivElement | null>; hideCart: () => void };

export default function HeaderCart({ ref, hideCart }: HeaderCartProps) {
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
			<div className="header-cart__body" ref={ref}>
				<div className="header-cart__title">
					Winkelwagen
					<button type="button" title="Verberg winkelwagen" onClick={() => hideCart()}>
						<Icon variant="xmark" className="size-6" />
					</button>
				</div>

				{products.length > 0 ? (
					<>
						<div className="header-cart__contents">
							{products.map((product) => (
								<CartProduct
									product={product}
									key={product.product.id}
								/>
							))}
						</div>

						<div className="header-cart__footer">
							Totaal: {displayAsCurrency(totalAmount)}
						</div>
					</>
				) : (
					<div className="header-cart__contents pt-1 pb-6">
						Je winkelwagen is nog leeg...
					</div>
				)}
			</div>
		</div>
	);
}

function CartProduct({ product }: { product: CartProductType }) {
	const { removeFromCart } = useCartStore();

	const { product: item, quantity } = product;

	return (
		<div className="header-cart__product">
			<div className="shrink-0">
				<Image
					src={`/product_${item.category}.jpg`}
					height={62}
					width={88}
					alt={item.title}
					loading="lazy"
					style={{ width: "88px", height: "62px" }}
				/>
			</div>

			<div className="header-cart__product-title">
				<span>{item.title}</span>

				<span className="header-cart__quantity">{quantity} stuk(s)</span>
			</div>

			<div className="text-right">
				<span className="header-cart__price">
					{displayAsCurrency(item.retailPrice * quantity)}
				</span>

				<button
					type="button"
					className="header-cart__delete-btn"
					title="Verwijder uit mandje"
					onClick={() => removeFromCart(item.id)}
				>
					Verwijder
				</button>
			</div>
		</div>
	);
}
