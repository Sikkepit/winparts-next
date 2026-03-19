import OverviewFilters from "./filters/OverviewFilters";
import OverviewMain from "./main/OverviewMain";
import "./overview.css";

export default function Overview() {
	return (
		<section className="grid grid-cols-12 gap-8 overview">
			<div className="col-span-3">
				<OverviewFilters />
			</div>
			<div className="col-span-9">
				<OverviewMain />
			</div>
		</section>
	);
}
