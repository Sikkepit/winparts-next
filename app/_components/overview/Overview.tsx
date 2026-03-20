"use client";

import { getCategoryDetails } from "@/data/categories";
import OverviewFilters from "./filters/OverviewFilters";
import OverviewMain from "./main/OverviewMain";
import "./overview.css";
import { getFilterDto, getFilteredProducts } from "@/utils/categoryUtil";
import { useState } from "react";
import { getProductsByCategory } from "@/data/products";

export default function Overview() {
	const categoryId = 469; // TODO Dynamisch maken;
	const category = getCategoryDetails(categoryId);
	const products = getProductsByCategory(categoryId);

	const [filterObject, setFilterObject] = useState<Record<string, string[]>>(getFilterDto(category?.filters));

	if (!category) {
		return <>Categorie niet gevonden</>;
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
				<OverviewMain
					category={category}
					products={getFilteredProducts(products, filterObject)}
				/>
			</div>
		</section>
	);
}
