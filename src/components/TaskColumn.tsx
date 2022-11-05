import { COLUMN_COLOR_SCHEMA } from "@/utils/const";
import { EColumnType } from "@/utils/enums";
import { ITask } from "@/utils/interface";
import { AddIcon } from "@chakra-ui/icons";
import {
	Box,
	Badge,
	Heading,
	IconButton,
	Stack,
	useColorModeValue,
} from "@chakra-ui/react";
import Task from "@/components/Task";

interface Props {
	column: EColumnType;
}

const mockTasks: ITask[] = [
	{
		id: "1",
		title: "Task 1",
		column: EColumnType.TO_DO,
		color: "red.300",
	},
	{
		id: "2",
		title: "Task 2",
		column: EColumnType.TO_DO,
		color: "blue.300",
	},
	{
		id: "3",
		title: "Task 3",
		column: EColumnType.TO_DO,
		color: "green.300",
	},
];

const TaskColumn = ({ column }: Props) => {
	const ColumnTasks = mockTasks.map((task, index) => (
		<Task key={task.id} task={task} index={index} />
	));

	return (
		<Box minW={{ base: 250, lg: 280 }}>
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
				color={useColorModeValue("gray.500", "gray.400")}
				bgColor={useColorModeValue("gray.100", "gray.700")}
				py={2}
				colorScheme="black"
				aria-label="add-task"
				icon={<AddIcon />}
			/>
			<Stack
				h={600}
				mt={2}
				spacing={4}
				bgColor={useColorModeValue("gray.50", "gray.900")}
				rounded="lg"
				boxShadow="md"
				overflow="auto"
			>
				{ColumnTasks}
			</Stack>
		</Box>
	);
};

export default TaskColumn;
