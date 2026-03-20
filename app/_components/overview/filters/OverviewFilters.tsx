"use client";

import { CategoryType, FilterType } from "@/types/types";
import { getFilterDto } from "@/utils/categoryUtil";
import Image from "next/image";
import { useState } from "react";
import { Filter } from "./Filter";

export default function OverviewFilters({ category }: { category: CategoryType }) {
	const [filterObject, setFilterObject] = useState(getFilterDto(category.filters));

	const getValue = (id: string) => {
		if (filterObject[id as keyof typeof filterObject]) {
			return filterObject[id as keyof typeof filterObject];
		}

		setFilterObject({ ...filterObject, [id]: [] });
		return [];
	};

	const handleChange = (newValue: string[], filter: FilterType) => {
		const newFilterObject = { ...filterObject, [filter.id]: newValue };
		setFilterObject(newFilterObject);
	};

	return (
		<div className="overview__filters">
			<Image
				src="/filters-toepassen.png"
				alt="Filters toepassen"
				width={175}
				height={32}
				loading="eager"
			/>

			<div className="w-full">
				{category.filters.map((filter) => (
					<Filter
						key={filter.id}
						filter={filter}
						value={getValue(filter.id)}
						onChange={handleChange}
					/>
				))}
			</div>
		</div>
	);
}
