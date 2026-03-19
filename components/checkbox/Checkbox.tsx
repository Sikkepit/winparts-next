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
			<input type="checkbox" onChange={(e) => onChange(e.target.checked)} value={value.toString()} />
			<span className="checkbox__checkmark"></span>
			<span>{label}</span>
		</label>
	);
}
