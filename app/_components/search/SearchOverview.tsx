import { products } from "@/data/products";
import { CategoryType, ProductType } from "@/types/types";
import { getFilteredProducts, getFilterObject, getSearchResults } from "@/utils/categoryUtil";

import OverviewContainer from "../overview/container/OverviewContainer";
import "../overview/overview.css";

type SearchOverviewProps = {
	category: CategoryType;
	searchQuery: string;
	searchParams: { [key: string]: string | string[] | undefined };
};

export default function SearchOverview({ category, searchQuery, searchParams }: SearchOverviewProps) {
	const searchResults = getSearchResults(products, searchQuery);
	const filterObject = getFilterObject(searchParams);
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
