"use client";

import { getCategoryDetails } from "@/data/categories";
import { getFilterDto, getFilteredProducts } from "@/utils/categoryUtil";
import { useState } from "react";
import { getProductsByCategory } from "@/data/products";

import OverviewContainer from "./container/OverviewContainer";
import "./overview.css";

export default function Overview({ categoryId = 469 }: { categoryId?: number }) {
	const category = getCategoryDetails(categoryId);
	const products = getProductsByCategory(categoryId);

	const [filterObject, setFilterObject] = useState<Record<string, string[]>>(getFilterDto(category?.filters));

	const clearFilters = () => {
		setFilterObject(getFilterDto(category?.filters));
	};

	return (
		<OverviewContainer
			category={category}
			filterObject={filterObject}
			products={getFilteredProducts(products, filterObject)}
			clearFilters={clearFilters}
			setFilterObject={setFilterObject}
		/>
	);
}
