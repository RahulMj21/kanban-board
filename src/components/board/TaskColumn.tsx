import Task from "@/components/board/Task";
import useColumnDrops from "@/hooks/useColumnDrop";
import useColumnTasks from "@/hooks/useColumnTasks";
import { COLUMN_COLOR_SCHEMA } from "@/utils/const";
import { EColumnType } from "@/utils/enums";
import { AddIcon } from "@chakra-ui/icons";
import {
	Badge,
	Box,
	Heading,
	IconButton,
	Stack,
	useColorModeValue,
} from "@chakra-ui/react";

interface Props {
	column: EColumnType;
}

const TaskColumn = ({ column }: Props) => {
	const { tasks, addEmptyTask, updateTask, deleteTask, dropTaskFrom } =
		useColumnTasks(column);
	const { isOver, dropRef } = useColumnDrops({
		column,
		handleDrop: dropTaskFrom,
	});

	const iconColor = useColorModeValue("gray.500", "gray.400");
	const iconBgColor = useColorModeValue("gray.100", "gray.700");

	const ColumnTasks = tasks.map((task, index) => (
		<Task
			key={task.id}
			task={task}
			index={index}
			updateTask={updateTask}
			deleteTask={deleteTask}
		/>
	));

	return (
		<Box w={250}>
			<Heading fontSize="md" mb={4} letterSpacing="wide">
				<Badge
					px={2}
					py={1}
					rounded="lg"
					colorScheme={COLUMN_COLOR_SCHEMA[column]}
				>
					{column}
				</Badge>
			</Heading>
			<IconButton
				size="xs"
				w="full"
				color={iconColor}
				bgColor={iconBgColor}
				py={2}
				colorScheme="black"
				aria-label="add-task"
				icon={<AddIcon />}
				onClick={addEmptyTask}
			/>
			<Stack
				ref={dropRef}
				h={600}
				mt={2}
				spacing={3}
				bgGradient={`linear(to-b, ${useColorModeValue(
					"gray.50",
					"gray.900"
				)},${useColorModeValue("white", "gray.800")})`}
				rounded="lg"
				overflow="auto"
				opacity={isOver ? 0.8 : 1}
				transition="0.4s ease"
				p="4"
			>
				{ColumnTasks}
			</Stack>
		</Box>
	);
};

export default TaskColumn;
