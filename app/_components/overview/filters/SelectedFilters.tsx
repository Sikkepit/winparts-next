"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function SelectedFilters() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const getSelectedFilters = () => {
		const params = new URLSearchParams(searchParams.toString());
		const filters: string[] = [];

		params.forEach((value) => {
			filters.push(value);
		});

		return filters;
	};

	const clearFilters = () => {
		router.push(pathname, { scroll: false });
	};

	const filters = getSelectedFilters();

	return (
		<ul className="overview__active-filters">
			{filters.length > 0 && (
				<li>
					<button
						type="button"
						className="truncate overview__delete-filters"
						onClick={clearFilters}
					>
						Wis Filters
					</button>
				</li>
			)}

			{filters.map((filter) => (
				<li className="overview__filter truncate" key={filter} title={filter}>
					{filter}
				</li>
			))}
		</ul>
	);
}
