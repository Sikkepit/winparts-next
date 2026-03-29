import "./checkbox.css";

type CheckboxProps = {
	label: string;
	checked: boolean;

	onChange: (checked: boolean) => void;
};

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
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
