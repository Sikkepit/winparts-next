export const daysOfTheWeek = ["ma", "di", "wo", "do", "vr", "za", "zo"];
export const months = [
	"januari",
	"februari",
	"maart",
	"april",
	"mei",
	"juni",
	"juli",
	"augustus",
	"september",
	"oktober",
	"november",
	"december",
];

export const getNumberOfDaysInMonth = (month: number, year: number) => {
	const months30 = [4, 6, 9, 11];
	const leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

	if (month === 2) {
		return leapYear ? 29 : 28;
	}

	return months30.includes(month) ? 30 : 31;
};

export const getDayOfTheWeek = (date: Date) => {
	const newDate = new Date(date.getFullYear(), date.getMonth(), 1);
	const dayOfTheWeek = newDate.getDay();

	return dayOfTheWeek;
};

export const formatDate = (date: Date | null): string => {
	if (!date) return "";

	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();

	return `${day}-${month}-${year}`;
};

export const getIsValid = (day: number, month: number, year: number) => {
	if (month > 11) return false;
	if (year < 1900 || year > 2100) return false;

	const maxDays = getNumberOfDaysInMonth(month + 1, year);
	if (day > maxDays) return false;

	return true;
};
