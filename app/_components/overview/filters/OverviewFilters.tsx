"use client";

import Accordion from "@/components/accordion/Accordion";
import Checkbox from "@/components/checkbox/Checkbox";
import { CategoryType, FilterType } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

export default function OverviewFilters({ category }: { category: CategoryType }) {
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
					<Filter key={filter.id} filter={filter} />
				))}
			</div>
		</div>
	);
}

function Filter({ filter }: { filter: FilterType }) {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = (newValue: boolean, optie: string) => {
		setIsChecked(newValue);
		console.log(optie, newValue);
	};

	return (
		<Accordion title={filter.title}>
			<div className="flex flex-col gap-2">
				{filter.opties.map((optie) => (
					<Checkbox
						key={optie}
						label={optie}
						onChange={(checked) => handleChange(checked, optie)}
						value={isChecked}
					/>
				))}
			</div>
		</Accordion>
	);
}
