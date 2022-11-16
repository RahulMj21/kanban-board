import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, IconButtonProps, useColorMode } from "@chakra-ui/react";

const DarkModeToggleButton = ({ ...props }: IconButtonProps) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";

	return (
		<IconButton
			onClick={toggleColorMode}
			icon={isDark ? <MoonIcon /> : <SunIcon />}
			position="absolute"
			top={0}
			right={4}
			{...props}
		/>
	);
};

export default DarkModeToggleButton;
