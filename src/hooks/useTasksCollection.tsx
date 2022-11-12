import { v4 as uuid } from "uuid";
import { EColumnType } from "@/utils/enums";
import { ITask } from "@/utils/interface";
import { useLocalStorage } from "usehooks-ts";

const useTasksCollection = () => {
	return useLocalStorage<{ [key in EColumnType]: ITask[] }>("tasks", {
		Todo: [
			{
				id: uuid(),
				color: "blue.300",
				column: EColumnType.TO_DO,
				title: "Task 1",
			},
		],
		Blocked: [
			{
				id: uuid(),
				color: "yellow.300",
				column: EColumnType.BLOCKED,
				title: "Task 2",
			},
		],
		"In Progress": [
			{
				id: uuid(),
				color: "red.300",
				column: EColumnType.IN_PROGRESS,
				title: "Task 3",
			},
		],
		Test: [
			{
				id: uuid(),
				color: "green.300",
				column: EColumnType.TEST,
				title: "Task 4",
			},
		],
		Completed: [
			{
				id: uuid(),
				color: "purple.300",
				column: EColumnType.TO_DO,
				title: "Task 5",
			},
		],
	});
};

export default useTasksCollection;
