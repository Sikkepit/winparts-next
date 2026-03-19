import Accordion from "@/components/accordion/Accordion";
import Image from "next/image";

export default function OverviewFilters() {
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
				<Filter title="Merk" />
				<Filter title="Merk" />
			</div>
		</div>
	);
}

function Filter({ title }: { title: string }) {
	return (
		<Accordion title={title}>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi veniam reprehenderit error
			quaerat consequuntur qui molestias animi dignissimos, minus, possimus magni aliquam nulla natus
			ipsam minima enim, sunt commodi non!
		</Accordion>
	);
}
