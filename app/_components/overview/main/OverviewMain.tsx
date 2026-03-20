import { CategoryType, ProductType } from "@/types/types";
import ProductCard from "../product/ProductCard";

export default function OverviewMain({ category, products }: { category: CategoryType; products: ProductType[] }) {
	return (
		<div className="overview__main">
			<h1>{category.title}</h1>
			<p>{category.intro}</p>

			<div className="flex flex-col gap-4 mt-4">
				{products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	);
}
