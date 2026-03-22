import "./checkbox.css";

type CheckboxProps = {
	onChange: (checked: boolean) => void;
	label: string;
	value: boolean;
};

export default function Checkbox({ onChange, label, value }: CheckboxProps) {
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
