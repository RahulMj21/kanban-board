import Board from "@/components/board/Board";
import useIsWindow from "@/hooks/useIsWindow";

export default function Home() {
	const { isWindow } = useIsWindow();

	return isWindow && <Board />;
}
