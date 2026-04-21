"use client";

import { useState, Dispatch, SetStateAction, useRef, createContext, useContext } from "react";
import { createPortal } from "react-dom";
import { useKeydown } from "@/hooks/useKeydown";
import { useClickOutside } from "@/hooks/useClickOutside";
import {
	daysOfTheWeek,
	formatDate,
	getDayOfTheWeek,
	getFormattedOutput,
	getIsValid,
	getNumberOfDaysInMonth,
	maxYear,
	minYear,
	months,
} from "./utils";

import "./date-picker.css";

type CoordinatesType = {
	left: number;
	top: number;
	width: number;
};

type DatePickerContextValue = {
	date: Date | null;
	onChange: (date: Date | null) => void;

	showCalendar: boolean;
	setShowCalendar: Dispatch<SetStateAction<boolean>>;

	month: number;
	setMonth: Dispatch<SetStateAction<number>>;

	year: number;
	setYear: Dispatch<SetStateAction<number>>;

	currentValue: string;
	setCurrentValue: Dispatch<SetStateAction<string>>;

	coordinates: CoordinatesType;
	setCoordinates: Dispatch<SetStateAction<CoordinatesType>>;
};

const DatePickerContext = createContext<DatePickerContextValue | undefined>(undefined);

const useDatePicker = (): DatePickerContextValue => {
	const context = useContext(DatePickerContext);

	if (!context) throw new Error("useDatePicker must be used within a DatePickerProvider");

	return context;
};

export default function DatePicker({ date, onChange }: { date: Date | null; onChange: (date: Date | null) => void }) {
	const [showCalendar, setShowCalendar] = useState(false);
	const [coordinates, setCoordinates] = useState({ left: 0, top: 0, width: 0 });
	const [currentValue, setCurrentValue] = useState(formatDate(date));

	const [year, setYear] = useState(date?.getFullYear() ?? new Date().getFullYear());
	const [month, setMonth] = useState(date?.getMonth() ?? new Date().getMonth());

	const providerValue = {
		date,
		onChange,

		showCalendar,
		setShowCalendar,

		year,
		setYear,

		month,
		setMonth,

		currentValue,
		setCurrentValue,

		coordinates,
		setCoordinates,
	};

	return (
		<DatePickerContext value={providerValue}>
			<div className="date-picker">
				<CalendarInput />
				{showCalendar && <Calendar date={date ?? new Date()} />}
			</div>
		</DatePickerContext>
	);
}

function CalendarInput() {
	const {
		setShowCalendar,
		showCalendar,
		date,
		onChange,
		setMonth,
		setYear,
		currentValue,
		setCurrentValue,
		setCoordinates,
	} = useDatePicker();

	const ref = useRef<HTMLInputElement>(null);

	const handleChange = (inputValue: string) => {
		setCurrentValue(getFormattedOutput(inputValue));

		if (inputValue.length !== 10) return;

		const day = Number(inputValue.substring(0, 2));
		const month = Number(inputValue.substring(3, 5)) - 1;
		const year = Number(inputValue.substring(6, 10));

		const isValid = getIsValid(day, month + 1, year);
		if (!isValid) return;

		const selectedDate = new Date(Date.UTC(year, month, day));
		if (isNaN(selectedDate.getTime())) return;

		onChange(selectedDate);
		setMonth(month);
		setYear(year);
	};

	const updateCoordinates = () => {
		if (ref?.current) {
			const position = ref?.current.getBoundingClientRect();

			setCoordinates({
				left: position.left + window.scrollX,
				top: position.bottom + window.scrollY,
				width: position.width <= 266 ? 266 : position.width,
			});
		}
	};

	const handleOpenCalendar = () => {
		setShowCalendar(!showCalendar);
		updateCoordinates();

		if (!showCalendar) {
			window.addEventListener("resize", updateCoordinates);
			window.addEventListener("scroll", updateCoordinates);
		} else {
			window.removeEventListener("resize", updateCoordinates);
			window.removeEventListener("scroll", updateCoordinates);
		}
	};

	return (
		<div className="date-picker__input-wrapper" onClick={handleOpenCalendar} ref={ref}>
			<input
				type="text"
				value={currentValue}
				onChange={(e) => handleChange(e.target.value)}
				onBlur={() => setCurrentValue(formatDate(date))}
				placeholder="dd-mm-jjjj"
			/>

			<Icon variant="calendar" />
		</div>
	);
}

type HeaderProps = {
	prevFn: () => void;
	nextFn: () => void;

	children: React.ReactNode;
	prevDisabled?: boolean;
	nextDisabled?: boolean;
};

function Header({ prevFn, nextFn, children, prevDisabled = false, nextDisabled = false }: HeaderProps) {
	return (
		<div className="date-picker__header">
			{!prevDisabled ? (
				<button onClick={prevFn} type="button">
					<Icon variant="chevronLeft" />
				</button>
			) : (
				<div />
			)}

			<span className="font-bold">{children}</span>

			{!nextDisabled ? (
				<button onClick={nextFn} type="button">
					<Icon variant="chevronRight" />
				</button>
			) : (
				<div />
			)}
		</div>
	);
}

function Footer() {
	const { onChange, setShowCalendar, date, setMonth, setYear, setCurrentValue } = useDatePicker();

	const handleSelectToday = () => {
		const today = new Date();

		onChange(today);
		setMonth(today.getMonth());
		setYear(today.getFullYear());
		setCurrentValue(formatDate(today));
	};

	useKeydown("t", () => handleSelectToday());

	return (
		<div className="date-picker__footer">
			{!!date && (
				<button
					type="button"
					className="date-picker__delete"
					onClick={() => {
						onChange(null);
						setShowCalendar(false);
						setCurrentValue("");
					}}
				>
					Wissen
				</button>
			)}

			<button type="button" onClick={handleSelectToday} className="date-picker__today">
				Vandaag
			</button>
		</div>
	);
}

function Calendar({ date }: { date: Date }) {
	const [showYearPicker, setShowYearPicker] = useState(false);

	const { setShowCalendar, coordinates } = useDatePicker();
	const ref = useRef<HTMLDivElement>(null);

	useClickOutside(ref, () => setShowCalendar(false));

	return (
		<>
			{createPortal(
				<div
					ref={ref}
					className="date-picker__calendar"
					style={{
						top: coordinates.top,
						left: coordinates.left,
						width: coordinates.width,
					}}
				>
					{showYearPicker ? (
						<YearPicker setShowYearPicker={setShowYearPicker} />
					) : (
						<DayPicker date={date} setShowYearPicker={setShowYearPicker} />
					)}
				</div>,
				document.body,
			)}
		</>
	);
}

function YearPicker({ setShowYearPicker }: { setShowYearPicker: (show: boolean) => void }) {
	const [page, setPage] = useState(0);
	const { year, setYear, date, onChange, setCurrentValue } = useDatePicker();

	const pageSize = 16;
	const firstYear = year - 5 + pageSize * page;

	const years = Array.from({ length: pageSize });

	const handleClick = (year: number) => {
		setYear(year);

		if (date) {
			const newDate = new Date(Date.UTC(year, date.getMonth(), date.getDate()));
			onChange(newDate);
			setCurrentValue(formatDate(newDate));
		}

		setShowYearPicker(false);
	};

	return (
		<>
			<Header
				prevFn={() => setPage(page - 1)}
				nextFn={() => setPage(page + 1)}
				prevDisabled={firstYear <= minYear}
				nextDisabled={firstYear + pageSize >= maxYear}
			>
				<button type="button" onClick={() => setShowYearPicker(false)}>
					{firstYear} - {firstYear + pageSize - 1}
				</button>
			</Header>

			<div className="grid grid-cols-4">
				{years.map((__, index) => (
					<button
						key={firstYear + index}
						className={`date-picker__day ${firstYear + index === year ? "marked" : ""}`}
						onClick={() => handleClick(firstYear + index)}
						type="button"
						disabled={firstYear + index < minYear || firstYear + index > maxYear}
					>
						{firstYear + index}
					</button>
				))}
			</div>
		</>
	);
}

function DayPicker({ date, setShowYearPicker }: { date: Date; setShowYearPicker: (show: boolean) => void }) {
	const { onChange, setShowCalendar, year, month, setCurrentValue, setMonth, setYear } = useDatePicker();

	const range = new Date(Date.UTC(year, month, 1));
	const emptyCols = Array.from({ length: getDayOfTheWeek(range) - 1 });
	const days = Array.from({ length: getNumberOfDaysInMonth(month + 1, year) });

	const getIsMarkedDay = (day: number) => {
		return year === date.getFullYear() && month === date.getMonth() && day + 1 === date.getDate();
	};

	const handleClick = (day: number) => {
		const newValue = new Date(Date.UTC(year, month, day));

		onChange(newValue);
		setCurrentValue(formatDate(newValue));
		setShowCalendar(false);
	};

	const handleChangeMonth = (newValue: number) => {
		if (newValue < 0) {
			setMonth(11);
			setYear(year - 1);
			return;
		}

		if (newValue > 11) {
			setMonth(0);
			setYear(year + 1);
			return;
		}

		setMonth(newValue);
	};
	return (
		<>
			<Header prevFn={() => handleChangeMonth(month - 1)} nextFn={() => handleChangeMonth(month + 1)}>
				<button type="button" className="capitalize" onClick={() => setShowYearPicker(true)}>
					{months[month]} {year}
				</button>
			</Header>

			<div className="date-picker__container">
				{daysOfTheWeek.map((day) => (
					<div className="date-picker__day-name" key={day}>
						{day}
					</div>
				))}

				{emptyCols.map((__, index) => (
					<div key={index}></div>
				))}

				{days.map((__, index) => (
					<button
						key={index}
						className={`date-picker__day ${getIsMarkedDay(index) ? "marked" : ""}`}
						onClick={() => handleClick(index + 1)}
						type="button"
					>
						{index + 1}
					</button>
				))}
			</div>

			<Footer />
		</>
	);
}

const iconMap = {
	chevronRight: (
		<path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
	),
	chevronLeft: (
		<path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z" />
	),
	calendar: (
		<path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z" />
	),
};

function Icon({ variant }: { variant: keyof typeof iconMap }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="date-picker__icon">
			{iconMap[variant]}
		</svg>
	);
}
