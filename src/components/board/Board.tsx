import { EColumnType } from "@/utils/enums";
import { Box, Heading, Flex } from "@chakra-ui/react";
import TaskColumn from "@/components/board/TaskColumn";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DarkModeToggleButton from "@/components/layout/DarkModeToggleButton";

const Board = () => {
	return (
		<Box as="section" w="1600px" maxW="95%" m="auto">
			<DarkModeToggleButton aria-label="dark-mode-toggle" />
			<Heading
				fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
				fontWeight="bold"
				textAlign="center"
				bgGradient="linear(to-l, #7928CA,#FF0080)"
				bgClip="text"
				mt={4}
			>
				D-2-D Kanban Board
			</Heading>
			<DndProvider backend={HTML5Backend}>
				<Flex
					minW="100%"
					align="center"
					py="10"
					overflow="auto"
					gap={5}
					sx={{
						"&::-webkit-scrollbar": {
							width: 0,
						},
						"&::-webkit-scrollbar-thumb": {
							display: "none",
						},
					}}
				>
					<TaskColumn column={EColumnType.TO_DO} />
					<TaskColumn column={EColumnType.BLOCKED} />
					<TaskColumn column={EColumnType.IN_PROGRESS} />
					<TaskColumn column={EColumnType.TEST} />
					<TaskColumn column={EColumnType.COMPLETED} />
				</Flex>
			</DndProvider>
		</Box>
	);
};

export default Board;
