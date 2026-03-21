import "./checkbox.css";

export default function Checkbox({
	onChange,
	label,
	value,
}: {
	onChange: (checked: boolean) => void;
	label: string;
	value: boolean;
}) {
	return (
		<label className="checkbox">
			<input
				type="checkbox"
				onChange={(e) => onChange(e.target.checked)}
				checked={value ?? false}
				autoComplete="off"
			/>
			<span>{label}</span>
		</label>
	);
}
