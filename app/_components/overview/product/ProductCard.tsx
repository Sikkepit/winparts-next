import Image from "next/image";
import "./productcard.css";
import { ProductType } from "@/types/types";
import PriceContainer from "./PriceContainer";
import ProductInfo from "./ProductInfo";

export default function ProductCard({ product }: { product: ProductType }) {
	return (
		<div className="product-card">
			<div className="product-card__image">
				{/* <img src={product.image} alt={product.title} loading="lazy" height={210} width={147} /> */}
				<Image src="/product.jpg" height={210} width={147} alt={product.title} loading="lazy" />
			</div>

			<ProductInfo product={product} />
			<PriceContainer product={product} />
		</div>
	);
}
