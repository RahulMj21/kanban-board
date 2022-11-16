import { useDrag, useDrop, XYCoord } from "react-dnd";
import { EItemType } from "@/utils/enums";
import { IDragItem, ITask } from "@/utils/interface";
import { useRef } from "react";

interface Props {
	task: ITask;
	index: number;
	handleDropHover: (i: number, j: number) => void;
}

export function useTaskDragAndDrop<T extends HTMLElement>({
	task,
	index,
	handleDropHover,
}: Props) {
	const ref = useRef<T>(null);

	const [{ isDragging }, drag] = useDrag<
		IDragItem,
		void,
		{ isDragging: boolean }
	>({
		type: EItemType.TASK,
		item: { from: task.column, id: task.id, index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [, drop] = useDrop<IDragItem, void, unknown>({
		accept: EItemType.TASK,
		hover: (item, monitor) => {
			if (!ref.current) return;

			const draggedItemIndex = item.index;
			const hoveredItemIndex = index;

			if (
				draggedItemIndex === hoveredItemIndex &&
				task.column === item.from
			)
				return;

			const isDraggedItemAboveHovered =
				draggedItemIndex < hoveredItemIndex;
			const isDraggedItemBelowHovered = !isDraggedItemAboveHovered;

			const { y: mouseY } = monitor.getClientOffset() as XYCoord;

			const hoveredBoundingRect = ref.current.getBoundingClientRect();

			const hoveredMiddleHeight =
				(hoveredBoundingRect.bottom - hoveredBoundingRect.top) / 2;

			const mouseYRelativeToHovered = mouseY - hoveredBoundingRect.top;
			const isMouseYAboveHoveredMiddleHeight =
				mouseYRelativeToHovered < hoveredMiddleHeight;
			const isMouseYBelowHoveredMiddleHeight =
				mouseYRelativeToHovered > hoveredMiddleHeight;

			if (isDraggedItemAboveHovered && isMouseYAboveHoveredMiddleHeight)
				return;
			if (isDraggedItemBelowHovered && isMouseYBelowHoveredMiddleHeight)
				return;

			handleDropHover(draggedItemIndex, hoveredItemIndex);

			item.index = hoveredItemIndex;
		},
	});

	drag(drop(ref));

	return { ref, isDragging } as const;
}
