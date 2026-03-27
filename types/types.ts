export type ProductType = {
	image: string;
	brand: string;
	title: string;
	rating: number;
	description: string;
	id: number;
	category: number;
	deliveryInfo: string;
	suggestedPrice: number | null;
	retailPrice: number;
	details: ProductDetailsType;
};

type ProductDetailsType = Record<string, string>;

export type FilterType = {
	id: string;
	title: string;
	opties: string[];
};

export type CategoryType = {
	id: number;
	title: string;
	intro: string;
	filters: FilterType[];
};

export type CartItemType = {
	id: number;
	quantity: number;
};
