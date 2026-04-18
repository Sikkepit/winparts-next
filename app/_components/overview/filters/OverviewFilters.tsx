"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { CategoryType, FilterType } from "@/types/types";
import { Filter } from "./Filter";

import Image from "next/image";
import DatePicker from "@/components/date-picker/DatePicker";

type OverviewFiltersProps = {
	category: CategoryType;
};

export default function OverviewFilters({ category }: OverviewFiltersProps) {
	const [date, setDate] = useState<Date | null>(null);

	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const handleChange = (newValue: string[], filter: FilterType) => {
		const params = new URLSearchParams(searchParams);
		params.delete(filter.id);
		newValue.forEach((v) => (v ? params.append(filter.id, v) : ""));

		// Update the URL without a full refresh
		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	};

	return (
		<>
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
							value={searchParams.getAll(filter.id)}
							onChange={handleChange}
						/>
					))}
				</div>
			</div>

			<DatePicker date={date} onChange={(date) => setDate(date)} />
		</>
	);
}
