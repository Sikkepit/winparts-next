import OverviewFilters from "../filters/OverviewFilters";
import OverviewMain from "../main/OverviewMain";

import { CategoryType, ProductType } from "@/types/types";

type OverviewContainerProps = {
	category: CategoryType | undefined;
	products: ProductType[];
};

export default function OverviewContainer({ category, products }: OverviewContainerProps) {
	if (!category) {
		return (
			<div className="py-16 text-center">
				<h1>Oeps, we zijn uit de bocht gevlogen</h1>
				<span>Gebruik de navigatie om verder te gaan</span>
			</div>
		);
	}

	return (
		<section className="grid grid-cols-12 gap-8 overview">
			<div className="col-span-3">
				<OverviewFilters category={category} />
			</div>

			<div className="col-span-9">
				<OverviewMain category={category} products={products} />
			</div>
		</section>
	);
}
