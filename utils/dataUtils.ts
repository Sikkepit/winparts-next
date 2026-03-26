/**
 * Converts a number to a string representing an amount in euros with two fraction digits
 */
export function displayAsCurrency(amount: number) {
	return amount.toLocaleString("nl-NL", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
	});
}
