import TaskColumn from "@/components/TaskColumn";
import { EColumnType } from "@/utils/enums";
import { Box, Flex, Heading } from "@chakra-ui/react";

export default function Home() {
	return (
		<Box w="1600px" maxW="95%" m="auto">
			<Heading
				fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
				fontWeight="bold"
				textAlign="center"
				bgGradient="linear(to-l, #7928CA,#FF0080)"
				bgClip="text"
				mt={4}
			>
				D&D Kanban Board
			</Heading>
			<Flex align="center" py="10" overflow="auto" gap={2}>
				<TaskColumn column={EColumnType.TO_DO} />
				<TaskColumn column={EColumnType.BLOCKED} />
				<TaskColumn column={EColumnType.IN_PROGRESS} />
				<TaskColumn column={EColumnType.TEST} />
				<TaskColumn column={EColumnType.COMPLETED} />
			</Flex>
		</Box>
	);
}
