import RatingStars from "@/components/rating/RatingStars";
import { ProductType } from "@/types/types";

export default function ProductInfo({ product }: { product: ProductType }) {
	return (
		<div className="product-card__info">
			<h2>{product.title}</h2>

			<RatingStars rating={product.rating} />

			<p dangerouslySetInnerHTML={{ __html: product.description }} />
		</div>
	);
}
