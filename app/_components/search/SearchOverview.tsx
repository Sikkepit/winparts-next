"use client";

import { products } from "@/data/products";
import { CategoryType, ProductType } from "@/types/types";
import { getFilteredProducts, getSearchResults } from "@/utils/categoryUtil";
import { useState } from "react";

import OverviewMain from "../overview/main/OverviewMain";
import OverviewFilters from "../overview/filters/OverviewFilters";
import "../overview/overview.css";
import SelectedFilters from "../overview/filters/SelectedFilters";

type SearchOverviewProps = { category: CategoryType; searchQuery: string };

export default function SearchOverview({ category, searchQuery }: SearchOverviewProps) {
	const [filterObject, setFilterObject] = useState<Record<string, string[]>>({
		brand: [],
	});

	const clearFilters = () => {
		setFilterObject({
			brand: [],
		});
	};

	const searchResults = getSearchResults(products, searchQuery);
	const filteredProducts = getFilteredProducts(searchResults, filterObject);

	const searchCategory = {
		...category,
		filters: [
			{
				id: "brand",
				title: "Merk",
				opties: getUniqiueBrands(searchResults),
			},
		],
	};

	function getUniqiueBrands(products: ProductType[]) {
		const brands: string[] = [];

		products.forEach((p) => {
			if (p.brand && !brands.includes(p.brand)) brands.push(p.brand);
		});

		return brands.sort();
	}

	return (
		<section className="grid grid-cols-12 gap-8 overview">
			<div className="col-span-3">
				{filteredProducts.length > 0 && (
					<OverviewFilters
						category={searchCategory}
						filterObject={filterObject}
						setFilterObject={setFilterObject}
					/>
				)}
			</div>

			<div className="col-span-9">
				<OverviewMain category={searchCategory} products={filteredProducts}>
					<SelectedFilters filterObject={filterObject} clearFilters={clearFilters} />
				</OverviewMain>
			</div>
		</section>
	);
}
