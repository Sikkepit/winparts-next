import { CategoryType, ProductType } from "@/types/types";
import ProductCard from "../product/ProductCard";

export default function OverviewMain({ category, products }: { category: CategoryType; products: ProductType[] }) {
	return (
		<div className="overview__main">
			<h1>{category.title}</h1>
			<p>{category.intro}</p>
			<span className="overview__result-count">{products.length} product(en)</span>

			<div className="flex flex-col gap-4">
				{products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}

				{products.length === 0 && (
					<div className="text-center">
						Er zijn geen producten die voldoen aan de combinatie van gekozen
						filterinstellingen
					</div>
				)}
			</div>
		</div>
	);
}
