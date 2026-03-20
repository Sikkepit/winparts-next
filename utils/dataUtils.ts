export function displayAsCurrency(amount: number) {
	return amount.toLocaleString("nl-NL", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
	});
}
