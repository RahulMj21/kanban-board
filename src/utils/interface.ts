import { EColumnType } from "@/utils/enums";

export interface ITask {
	id: string;
	title: string;
	column: EColumnType;
	color: string;
}

export interface IDragItem {
	index: number;
	id: ITask["id"];
	from: EColumnType;
}
