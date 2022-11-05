import { EColumnType } from "@/utils/enums";

export const COLUMN_COLOR_SCHEMA: Record<EColumnType, string> = {
	Todo: "gray",
	Blocked: "red",
	"In Progress": "blue",
	Test: "orange",
	Completed: "green",
};
