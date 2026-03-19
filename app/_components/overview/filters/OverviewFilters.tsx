"use client";

import Accordion from "@/components/accordion/Accordion";
import Checkbox from "@/components/checkbox/Checkbox";
import Image from "next/image";
import { useState } from "react";

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
	const [isChecked, setIsChecked] = useState(false);
	return (
		<Accordion title={title}>
			<div className="flex flex-col gap-2">
				<Checkbox label="Boss" onChange={setIsChecked} value={isChecked} />
				<Checkbox label="Boss" onChange={setIsChecked} value={isChecked} />
				<Checkbox label="Boss" onChange={setIsChecked} value={isChecked} />
			</div>
		</Accordion>
	);
}
