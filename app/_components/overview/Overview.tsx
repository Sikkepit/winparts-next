"use client";

import { getCategoryDetails } from "@/data/categories";
import { getFilteredProducts } from "@/utils/categoryUtil";
import { getProductsByCategory } from "@/data/products";

import OverviewContainer from "./container/OverviewContainer";
import "./overview.css";

export default function Overview({
	categoryId = 469,
	searchParams,
}: {
	categoryId?: number;
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const getFilterObject = () => {
		const params = new URLSearchParams(searchParams.toString());
		let obj = {};

		params.forEach((key) => {
			obj = { ...obj, [key]: params.getAll(key) };
		});

		return obj;
	};

	const category = getCategoryDetails(categoryId);
	const products = getProductsByCategory(categoryId);
	const filterObject = getFilterObject();

	return <OverviewContainer category={category} products={getFilteredProducts(products, filterObject)} />;
}
