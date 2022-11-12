import { useDrag } from "react-dnd";
import { EItemType } from "@/utils/enums";
import { IDragItem, ITask } from "@/utils/interface";
import { useRef } from "react";

interface Props {
	task: ITask;
	index: number;
}

export function useTaskDrag<T extends HTMLElement>({ task, index }: Props) {
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

	drag(ref);

	return { ref, isDragging } as const;
}
