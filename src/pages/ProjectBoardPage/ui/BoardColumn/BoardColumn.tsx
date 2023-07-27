import { memo, FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { BoardColumnHeader } from '../BoardColumnHeader/BoardColumnHeader';

import { StatusType, TaskCard, TaskSchema } from '@/entities/Task';

interface BoardColumnProps {
  className?: string;
  statusTypeTask: StatusType;
  tasks?: TaskSchema[];
}

export const BoardColumn: FC<BoardColumnProps> = memo(({ className, statusTypeTask, tasks }) => {
  if (!tasks) {
    return null;
  }

  return (
    <div className={`w-72 ${className}`}>
      <BoardColumnHeader title={statusTypeTask} countTasks={tasks.length} />
      <Droppable droppableId={statusTypeTask}>
        {(provided, snapshot) => (
          <ul
            className={`space-y-3 ${snapshot.isDraggingOver ? 'bg-slate-200/30' : undefined}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(provided, snapshot) => (
                  <TaskCard
                    className={snapshot.isDragging ? 'backdrop-blur-sm' : undefined}
                    name={task.name}
                    description={task.description}
                    category={task.category}
                    author={task.author}
                    executor={task.executor}
                    type={task.type}
                    priority={task.priority}
                    innerRef={provided.innerRef}
                    provided={provided}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
});
