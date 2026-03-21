"use client";

import { getCategoryDetails } from "@/data/categories";
import "./overview.css";
import { getFilterDto } from "@/utils/categoryUtil";
import { useState } from "react";
import { getProductsByCategory } from "@/data/products";
import OverviewContainer from "./container/OverviewContainer";

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
			products={products}
			clearFilters={clearFilters}
			setFilterObject={setFilterObject}
		/>
	);
}
