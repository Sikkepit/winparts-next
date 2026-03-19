import Accordion from "@/components/accordion/Accordion";
import Image from "next/image";

export default function OverviewFilters() {
	return (
		<>
			<Image
				src="/filters-toepassen.png"
				alt="Filters toepassen"
				width={175}
				height={32}
				loading="eager"
			/>

			<Filter title="Merk" />
			<Filter title="Merk" />
		</>
	);
}

function Filter({ title }: { title: string }) {
	return <Accordion title={title}>Filter</Accordion>;
}
