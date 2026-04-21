// Constants
export const minYear = 1900;
export const maxYear = 2100;
export const minCalendarWidth = 266;
export const maxCalendarWidth = 300;

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

/**
 * Returns number of days in a certain month for a certain (leap)year.
 * Valid month input is a number ranging from 1 (January) till 12 (December)
 */
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

/**
 * Validates manual date input. Checks for valid month ranging from 1 (January) till 12 (December).
 * Valid years are between 1900 and 2100. Takes in account the available number of days withing a
 * month in a certain (leap)year.
 *
 * @returns true or false
 */
export const getIsValid = (day: number, month: number, year: number): boolean => {
	if (month > 12) return false;
	if (year < minYear || year > maxYear) return false;

	const maxDays = getNumberOfDaysInMonth(month, year);
	if (day > maxDays) return false;

	return true;
};

/**
 * Helper function to add automatic dashes when user inputs a date field with
 * the keyboard. Outputs string in dd-mm-yyyy
 */
export const getFormattedOutput = (inputValue: string) => {
	const cleaned = inputValue.replace(/\D/g, "");
	const truncated = cleaned.slice(0, 8);

	const day = truncated.substring(0, 2);
	const month = truncated.substring(2, 4);
	const year = truncated.substring(4, 8);

	let output = day;

	if (month) {
		output += `-${month}`;
	}

	if (year) {
		output += `-${year}`;
	}

	return output;
};
