import Accordion from "@/components/accordion/Accordion";
import Checkbox from "@/components/checkbox/Checkbox";
import { FilterType } from "@/types/types";

type FilterProps = {
	filter: FilterType;
	value: string[];
	onChange: (newValue: string[], filter: FilterType) => void;
};

export function Filter({ filter, value, onChange }: FilterProps) {
	const handleChange = (newValue: boolean, optie: string) => {
		const returnValue = value.filter((v) => v !== optie);

		if (newValue) {
			onChange([...returnValue, optie], filter);
			return;
		}

		onChange(returnValue, filter);
	};

	return (
		<Accordion title={filter.title}>
			<div className="flex flex-col gap-2">
				{filter.opties.map((optie) => (
					<Checkbox
						key={optie}
						label={optie}
						onChange={(checked) => handleChange(checked, optie)}
						value={value.includes(optie)}
					/>
				))}
			</div>
		</Accordion>
	);
}
