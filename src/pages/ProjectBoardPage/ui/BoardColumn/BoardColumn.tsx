import { memo, FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { BoardColumnHeader } from '../BoardColumnHeader/BoardColumnHeader';

import type { BoardColumnHeaderTheme } from '../../model/types/projectBoard';

import { TaskCard, TaskSchema } from '@/entities/Task';

interface BoardColumnProps {
  className?: string;
  name: string;
  tasks?: TaskSchema[];
  theme: BoardColumnHeaderTheme;
  droppableId: string;
}

export const BoardColumn: FC<BoardColumnProps> = memo(
  ({ className, name, tasks, theme, droppableId }) => {
    if (!tasks) {
      return null;
    }

    return (
      <div className={`w-72 ${className}`}>
        <BoardColumnHeader title={name} countTasks={tasks.length} theme={theme} />
        <Droppable droppableId={droppableId}>
          {(provided, snapshot) => (
            <ul className='space-y-3' ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={`dr-${task.id}`} index={index}>
                  {(provided, snapshot) => (
                    <TaskCard
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
  },
);
