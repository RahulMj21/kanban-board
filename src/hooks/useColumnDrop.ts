import { EColumnType, EItemType } from "@/utils/enums";
import { IDragItem, ITask } from "@/utils/interface";
import { useDrop } from "react-dnd";

interface Props {
	column: EColumnType;
	handleDrop: (fromColumn: EColumnType, taskId: ITask["id"]) => void;
}

function useColumnDrops({ column, handleDrop }: Props) {
	const [{ isOver }, dropRef] = useDrop<IDragItem, void, { isOver: boolean }>(
		{
			accept: EItemType.TASK,
			drop: (dragItem) => {
				if (!dragItem || dragItem.from === column) {
					return;
				}
				handleDrop(dragItem.from, dragItem.id);
			},
			collect: (monitor) => ({
				isOver: monitor.isOver(),
			}),
		}
	);

	return { isOver, dropRef };
}

export default useColumnDrops;
