"use client";

import { products } from "@/data/products";
import { CategoryType, ProductType } from "@/types/types";
import { getFilteredProducts, getSearchResults } from "@/utils/categoryUtil";
import OverviewMain from "../overview/main/OverviewMain";

import "../overview/overview.css";
import { useState } from "react";
import OverviewFilters from "../overview/filters/OverviewFilters";

type SearchOverviewProps = { category: CategoryType; searchQuery: string };

export default function SearchOverview({ category, searchQuery }: SearchOverviewProps) {
	const [filterObject, setFilterObject] = useState<Record<string, string[]>>({
		brand: [],
	});

	const searcResults = getSearchResults(products, searchQuery);
	const brands = getUniqiueBrands(searcResults);

	const filteredProducts = getFilteredProducts(searcResults, filterObject);

	const searchCategory = {
		...category,
		filters: [
			{
				id: "brand",
				title: "Merk",
				opties: brands,
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
				<OverviewFilters
					category={searchCategory}
					filterObject={filterObject}
					setFilterObject={setFilterObject}
				/>
			</div>

			<div className="col-span-9">
				<OverviewMain
					category={searchCategory}
					filterObject={filterObject}
					products={filteredProducts}
				/>
			</div>
		</section>
	);
}
