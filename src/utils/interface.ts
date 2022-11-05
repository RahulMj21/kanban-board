import { EColumnType } from "@/utils/enums";

export interface ITask {
	id: string;
	title: string;
	column: EColumnType;
	color: string;
}
