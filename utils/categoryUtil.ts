import { FilterType } from "@/types/types";

export const getFilterDto = (filters: FilterType[]) => {
	let returnObj = {};
	filters.map((filter) => (returnObj = { ...returnObj, [filter.id]: [] }));

	return returnObj;
};
