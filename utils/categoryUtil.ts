import { FilterType, ProductType } from "@/types/types";

/**
 * Get empty filter object that takes in account configured category filters
 */
export const getFilterDto = (filters: FilterType[] | undefined): Record<string, string[]> => {
	let returnObj = {};
	if (!filters) return returnObj;

	filters.map((filter) => (returnObj = { ...returnObj, [filter.id]: [] }));

	return returnObj;
};

/**
 * Retrieves a nested value from an object using a string path
 */
export const getPath = (obj: unknown, path: string): unknown => {
	const nestedKeys = path.split(/[/]/);

	// Start: acc = product
	// Step 1: acc = product["category"]
	// Step 2: acc = product["category"]["name"]
	// return "Shoes"
	return nestedKeys.reduce((acc, part) => (acc as Record<string, unknown>)?.[part], obj);
};

export const getFilteredProducts = (products: ProductType[], filterObj: Record<string, string[]>) => {
	const filteredProducts = products.filter((product) => {
		return Object.entries(filterObj).every(([key, value]) => {
			// Skip if the filter option has no checkboxes checked
			if (value.length === 0) return true;

			const target = getPath(product, key);
			return value.includes(target as string);
		});
	});

	return filteredProducts;
};
