import { getCategoryDetails } from "@/data/categories";
import OverviewFilters from "./filters/OverviewFilters";
import OverviewMain from "./main/OverviewMain";
import "./overview.css";

export default function Overview() {
	const categoryId = 469; // TODO Dynamisch maken;
	const category = getCategoryDetails(categoryId);

	if (!category) {
		return <>Categorie Niet gevonden</>;
	}

	return (
		<section className="grid grid-cols-12 gap-8 overview">
			<div className="col-span-3">
				<OverviewFilters category={category} />
			</div>
			<div className="col-span-9">
				<OverviewMain category={category} />
			</div>
		</section>
	);
}
