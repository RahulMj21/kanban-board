import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import { EColumnType } from "@/utils/enums";
import { ITask } from "@/utils/interface";
import useTasksCollection from "@/hooks/useTasksCollection";
import { MAX_TASKS_PER_COLUMN } from "@/utils/const";
import { AlertIcon, useToast } from "@chakra-ui/react";
import { pickChakraRandomColor } from "@/utils/helpers";
import { CheckIcon } from "@chakra-ui/icons";

const useColumnTasks = (column: EColumnType) => {
	const [tasks, setTasks] = useTasksCollection();
	const toast = useToast();

	const addEmptyTask = useCallback(() => {
		setTasks((allTasks) => {
			const columnTasks = allTasks[column];
			if (columnTasks.length >= MAX_TASKS_PER_COLUMN) {
				toast({
					icon: <AlertIcon />,
					isClosable: true,
					title: "Too many tasks",
					status: "error",
				});
				return allTasks;
			}
			const newTask: ITask = {
				id: uuid(),
				title: `New ${column} task.`,
				color: pickChakraRandomColor(".300"),
				column,
			};

			toast({
				icon: <CheckIcon />,
				isClosable: true,
				title: "New task added",
				status: "success",
			});

			return {
				...allTasks,
				[column]: [newTask, ...columnTasks],
			};
		});
	}, [column, setTasks, toast]);

	const updateTask = useCallback(
		(id: ITask["id"], updatedTask: Omit<Partial<ITask>, "id">) => {
			setTasks((allTasks) => {
				const columnTasks = allTasks[column];
				return {
					...allTasks,
					[column]: columnTasks.map((task) => {
						return task.id === id
							? { ...task, ...updatedTask }
							: task;
					}),
				};
			});
		},
		[column, setTasks]
	);

	const deleteTask = useCallback(
		(id: ITask["id"]) => {
			setTasks((allTasks) => {
				const columnTasks = allTasks[column];

				toast({
					icon: <CheckIcon />,
					isClosable: true,
					title: "Task removed",
					status: "success",
				});

				return {
					...allTasks,
					[column]: columnTasks.filter((task) => task.id !== id),
				};
			});
		},
		[setTasks, column, toast]
	);

	const dropTaskFrom = useCallback(
		(from: EColumnType, id: ITask["id"]) => {
			setTasks((allTasks) => {
				const fromColumnTasks = allTasks[from];
				const toColumnTasks = allTasks[column];
				const movingTask = fromColumnTasks.find(
					(task) => task.id === id
				);

				if (!movingTask) return allTasks;

				return {
					...allTasks,
					[from]: fromColumnTasks.filter((task) => task.id !== id),
					[column]: [{ ...movingTask, column }, ...toColumnTasks],
				};
			});
		},
		[setTasks, column]
	);

	return {
		tasks: tasks[column],
		addEmptyTask,
		updateTask,
		deleteTask,
		dropTaskFrom,
	} as const;
};

export default useColumnTasks;
