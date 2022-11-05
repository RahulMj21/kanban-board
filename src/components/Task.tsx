import { ITask } from "@/utils/interface";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, Textarea } from "@chakra-ui/react";

interface Props {
	index: number;
	task: ITask;
}

const Task = ({ task }: Props) => {
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
			/>
			<Textarea
				value={task.title}
				fontWeight="semibold"
				cursor="inherit"
				border="none"
				padding={0}
				resize="none"
				minH={70}
				maxH={200}
				focusBorderColor="none"
				color="gray.700"
			/>
		</Box>
	);
};

export default Task;
