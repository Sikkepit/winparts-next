type SelectedFilterProps = {
	filterObject: Record<string, string[]>;
	clearFilters: () => void;
};

export default function SelectedFilters({ filterObject, clearFilters }: SelectedFilterProps) {
	const getSelectedFilters = () => {
		const filterArr: string[] = [];
		Object.entries(filterObject).map(([, value]) =>
			value.map((v) => {
				filterArr.push(v);
			}),
		);

		return filterArr;
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
