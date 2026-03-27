import "./checkbox.css";

type CheckboxProps = {
	onChange: (checked: boolean) => void;
	label: string;
	checked: boolean;
};

export default function Checkbox({ onChange, label, checked }: CheckboxProps) {
	return (
		<label className="checkbox">
			<input
				type="checkbox"
				onChange={(e) => onChange(e.target.checked)}
				checked={checked ?? false}
				autoComplete="off"
			/>

			<span>{label}</span>
		</label>
	);
}
