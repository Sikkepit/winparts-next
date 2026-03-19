"use client";

import SearchBar from "@/components/searchbar/SearchBar";

export default function HeaderSearch() {
	const handleSubmit = (searchValue: string) => {
		console.log(searchValue);
	};

	return <SearchBar onSubmit={handleSubmit} placeholder="Zoekterm, OEM, EAN of artikelnummer" />;
}
