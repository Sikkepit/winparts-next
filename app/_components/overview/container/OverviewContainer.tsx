import OverviewFilters from "../filters/OverviewFilters";
import SelectedFilters from "../filters/SelectedFilters";
import OverviewMain from "../main/OverviewMain";
import { CategoryType, ProductType } from "@/types/types";
import { Dispatch, SetStateAction } from "react";

type OverviewContainerProps = {
	category: CategoryType | undefined;
	filterObject: Record<string, string[]>;
	products: ProductType[];

	setFilterObject: Dispatch<SetStateAction<Record<string, string[]>>>;
	clearFilters: () => void;
};

export default function OverviewContainer({
	category,
	filterObject,
	products,

	setFilterObject,
	clearFilters,
}: OverviewContainerProps) {
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
				<OverviewFilters
					category={category}
					filterObject={filterObject}
					setFilterObject={setFilterObject}
				/>
			</div>

			<div className="col-span-9">
				<OverviewMain category={category} products={products}>
					<SelectedFilters filterObject={filterObject} clearFilters={clearFilters} />
				</OverviewMain>
			</div>
		</section>
	);
}
