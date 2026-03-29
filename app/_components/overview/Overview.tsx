import { getCategoryDetails } from "@/data/categories";
import { getFilteredProducts, getFilterObject } from "@/utils/categoryUtil";
import { getProductsByCategory } from "@/data/products";

import OverviewContainer from "./container/OverviewContainer";
import "./overview.css";

type OverviewProps = {
	categoryId?: number;
	searchParams: { [key: string]: string | string[] | undefined };
};

export default function Overview({ categoryId = 469, searchParams }: OverviewProps) {
	const category = getCategoryDetails(categoryId);
	const filterObject = getFilterObject(searchParams);

	const products = getProductsByCategory(categoryId);
	const filteredProducts = getFilteredProducts(products, filterObject);

	return <OverviewContainer category={category} products={filteredProducts} />;
}
