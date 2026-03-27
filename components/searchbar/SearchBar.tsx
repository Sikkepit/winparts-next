import { useState } from "react";
import "./searchbar.css";
import Icon from "../icon/Icon";

type SearchBarProps = {
	placeholder?: string;
	onSubmit: (newValue: string) => void;
};

export default function SearchBar({ placeholder, onSubmit }: SearchBarProps) {
	const [searchValue, setSearchValue] = useState("");

	const handleSubmit = () => {
		onSubmit(searchValue);
		setSearchValue("");
	};

	return (
		<div className="searchbar">
			<input
				type="text"
				value={searchValue}
				placeholder={placeholder}
				onChange={(e) => setSearchValue(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleSubmit();
					}
				}}
				className="searchbar__input"
			/>

			<SubmitButton onClick={() => handleSubmit()} />
		</div>
	);
}

function SubmitButton({ onClick }: { onClick: () => void }) {
	return (
		<button type="button" onClick={onClick}>
			<Icon variant="magnifyingGlass" className="text-black" />
		</button>
	);
}
