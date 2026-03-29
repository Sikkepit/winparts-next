import { ProductType } from "@/types/types";

/**
 * Get an object from the search params in the URL. Keys without values are deleted,
 * Keys that have a string value or a string[] get a string[]
 */
export const getFilterObject = (searchParams: { [key: string]: string | string[] | undefined }) => {
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

/**
 * Retrieves a nested value from an object using a string path
 */
export const getPath = (obj: unknown, path: string): unknown => {
	const nestedKeys = path.split("/");

	// Start: acc = product
	// Step 1: acc = product["category"]
	// Step 2: acc = product["category"]["name"]
	// return "Shoes"
	return nestedKeys.reduce((acc, part) => (acc as Record<string, unknown>)?.[part], obj);
};

/**
 * FIlter products by the user's chosen filters
 */
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

/**
 * Get products filtered by search query.
 * Checks for (partial) matches on id, title, description and brand.
 */
export const getSearchResults = (products: ProductType[], searchQuery: string) => {
	if (!searchQuery) return products;

	return products.filter((product) => {
		searchQuery = searchQuery.toLowerCase();

		if (
			product.id.toString().includes(searchQuery) ||
			product.title.toLowerCase().includes(searchQuery) ||
			product.description.toLowerCase().includes(searchQuery) ||
			product.brand.toLowerCase().includes(searchQuery)
		) {
			return true;
		}

		return false;
	});
};
