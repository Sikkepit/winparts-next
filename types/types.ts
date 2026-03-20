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
	details: {
		info?: string;
		lengtemm?: string;
		monteerwijze?: string;
		type?: string;
		aantal?: string;
		garantie?: string;
		ruitenwisserbladuitvoering?: string;
		typeruitenwisser?: string;
		lengteinch?: string;
		inbouwplaats?: string;
		hoeveelheid?: string;
		product?: string;
		linksrechtsbesturing?: string;
	};
};

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
