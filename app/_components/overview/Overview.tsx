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
		return Object.entries(searchParams).reduce(
			(acc, [key, value]) => {
				if (!value) {
					return acc;
				}

				acc[key] = Array.isArray(value) ? value : [value];

				return acc;
			},
			{} as Record<string, string[]>,
		);
	};

	const category = getCategoryDetails(categoryId);
	const products = getProductsByCategory(categoryId);
	const filterObject = getFilterObject();

	return <OverviewContainer category={category} products={getFilteredProducts(products, filterObject)} />;
}
