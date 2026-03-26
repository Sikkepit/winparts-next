"use client";

import { products } from "@/data/products";
import { CategoryType, ProductType } from "@/types/types";
import { getFilteredProducts, getSearchResults } from "@/utils/categoryUtil";
import { useState } from "react";

import OverviewContainer from "../overview/container/OverviewContainer";
import "../overview/overview.css";

type SearchOverviewProps = { category: CategoryType; searchQuery: string };

export default function SearchOverview({ category, searchQuery }: SearchOverviewProps) {
	const [filterObject, setFilterObject] = useState<Record<string, string[]>>({
		brand: [],
	});

	const searchResults = getSearchResults(products, searchQuery);
	const filteredProducts = getFilteredProducts(searchResults, filterObject);

	const getUniqiueBrands = (products: ProductType[]) => {
		const brands: string[] = [];

		products.forEach((p) => {
			if (p.brand && !brands.includes(p.brand)) brands.push(p.brand);
		});

		return brands.sort();
	};

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

	const clearFilters = () => {
		setFilterObject({
			brand: [],
		});
	};

	return (
		<OverviewContainer
			category={searchCategory}
			filterObject={filterObject}
			products={filteredProducts}
			clearFilters={clearFilters}
			setFilterObject={setFilterObject}
		/>
	);
}
