import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
	return (
		<Box as="section" h="100vh" w="100%" background="gray.800">
			<Heading textAlign="center" color="teal.200">
				Kanban Board
			</Heading>
		</Box>
	);
}
