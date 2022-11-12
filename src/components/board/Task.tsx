import { ITask } from "@/utils/interface";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, Textarea } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface Props {
	index: number;
	task: ITask;
	updateTask: (id: ITask["id"], updatedTask: ITask) => void;
	deleteTask: (id: ITask["id"]) => void;
}

const Task = ({ task, updateTask, deleteTask }: Props) => {
	const handleUpdate = (e: ChangeEvent<HTMLTextAreaElement>) => {
		updateTask(task.id, { ...task, title: e.target.value });
	};

	const handleDelete = () => {
		deleteTask(task.id);
	};

	return (
		<Box
			role="group"
			position="relative"
			rounded="lg"
			w="full"
			pt={3}
			pr={7}
			pb={1}
			pl={3}
			boxShadow="xl"
			cursor="grab"
			bgColor={task.color}
		>
			<IconButton
				position="absolute"
				top={0}
				right={0}
				zIndex={100}
				aria-label="delete task"
				size="md"
				colorScheme="solid"
				color="gray.700"
				icon={<DeleteIcon />}
				opacity={0}
				_groupHover={{ opacity: 1 }}
				onClick={handleDelete}
			/>
			<Textarea
				fontWeight="semibold"
				cursor="inherit"
				border="none"
				padding={0}
				resize="none"
				minH={70}
				maxH={200}
				focusBorderColor="none"
				color="gray.700"
				value={task.title}
				onChange={handleUpdate}
			/>
		</Box>
	);
};

export default Task;
