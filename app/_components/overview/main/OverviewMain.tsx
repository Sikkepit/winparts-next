import { CategoryType, ProductType } from "@/types/types";
import ProductCard from "../product/ProductCard";
import SelectedFilters from "../filters/SelectedFilters";
import Toast, { ToastRefType } from "@/components/toast/Toast";
import { useRef } from "react";

type OverviewMainProps = {
	category: CategoryType;
	products: ProductType[];
	filterObject: Record<string, string[]>;
};

export default function OverviewMain({ category, products, filterObject }: OverviewMainProps) {
	const toastRef = useRef<ToastRefType>(null);

	const handleAddToCart = (product: ProductType) => {
		console.log(product);
		toastRef.current?.showMessage(`${product.title} is toegevoegd aan je winkelwagentje`);
	};

	return (
		<div className="overview__main">
			<h1>{category.title}</h1>
			<p>{category.intro}</p>
			<span className="overview__result-count">{products.length} product(en)</span>

			<SelectedFilters filterObject={filterObject} />

			<Toast ref={toastRef} />

			<div className="flex flex-col gap-4">
				{products.map((product) => (
					<ProductCard
						product={product}
						key={product.id}
						onAddToCart={() => handleAddToCart(product)}
					/>
				))}

				{products.length === 0 && (
					<div className="text-center mt-8">
						Er zijn geen producten die voldoen aan de combinatie van gekozen
						filterinstellingen
					</div>
				)}
			</div>
		</div>
	);
}
