export default function SelectedFilters({ filterObject }: { filterObject: Record<string, string[]> }) {
	const getFilterArray = () => {
		const filterArr: string[] = [];
		Object.entries(filterObject).map(([, value]) =>
			value.map((v) => {
				filterArr.push(v);
			}),
		);

		return filterArr;
	};

	const filters = getFilterArray();
	return (
		<ul className="overview__active-filters">
			{filters.map((filter) => (
				<li className="truncate" key={filter} title={filter}>
					{filter}
				</li>
			))}
		</ul>
	);
}
