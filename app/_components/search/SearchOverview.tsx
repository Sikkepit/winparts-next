import { products } from "@/data/products";
import { CategoryType, ProductType } from "@/types/types";
import { getFilteredProducts, getSearchResults } from "@/utils/categoryUtil";

import OverviewContainer from "../overview/container/OverviewContainer";
import "../overview/overview.css";

type SearchOverviewProps = {
	category: CategoryType;
	searchQuery: string;
	searchParams: { [key: string]: string | string[] | undefined };
};

export default function SearchOverview({ category, searchQuery, searchParams }: SearchOverviewProps) {
	const getArray = (value: string | string[] | undefined) => {
		if (!value) return [];
		if (typeof value === "string") return [value];
		return value;
	};

	const searchResults = getSearchResults(products, searchQuery);
	const filterObject = { brand: getArray(searchParams.brand) };
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

	return <OverviewContainer category={searchCategory} products={filteredProducts} />;
}
