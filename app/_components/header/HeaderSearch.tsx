"use client";

import SearchBar from "@/components/searchbar/SearchBar";
import { useRouter } from "next/navigation";

export default function HeaderSearch() {
	const router = useRouter();

	const handleSubmit = (searchValue: string) => {
		if (!searchValue) return;
		router.push(`/zoeken/${searchValue.toLowerCase()}`);
	};

	return <SearchBar onSubmit={handleSubmit} placeholder="Zoekt op titel, merk, beschrijving of artikelnummer" />;
}
