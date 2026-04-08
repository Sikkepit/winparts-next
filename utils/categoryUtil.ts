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
export const getValueForFilterKey = (obj: unknown, path: string): unknown => {
	const nestedKeys = path.split("/");

	// Start: acc = product
	// Step 1: acc = product["category"]
	// Step 2: acc = product["category"]["name"]
	// return "Shoes"
	return nestedKeys.reduce((acc, part) => (acc as Record<string, unknown>)?.[part], obj);
};

/**
 * Filter products by the user's chosen filters
 */
export const getFilteredProducts = (products: ProductType[], filterObj: Record<string, string[]>) => {
	const filteredProducts = products.filter((product) => {
		// The product should have at least one option of EVERY defined filter
		// e.g. should have one of the brands that are selected, one of the colors, etc.
		return Object.entries(filterObj).every(([filterKey, arrayOfSelectedOptions]) => {
			// Skip if the filter option has no checkboxes checked
			if (arrayOfSelectedOptions.length === 0) return true;

			// Finds the value for the filterkey e.g brand or something
			// nested like details/width
			const valueForFilterKey = getValueForFilterKey(product, filterKey);
			return arrayOfSelectedOptions.includes(valueForFilterKey as string);
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
