import { memo, FC, ReactNode } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';

import type { PriorityType, TaskType } from '../../model/types/task';

import AvatarIcon from '@/shared/assets/avatar.svg';
import CheckMarkIcon from '@/shared/assets/check-mark.svg';
import ErrorBugIcon from '@/shared/assets/error-bug.svg';
import InfoIcon from '@/shared/assets/info.svg';

const types: Record<TaskType, ReactNode> = {
  task: <CheckMarkIcon fill='#4ade5b' />,
  error: <ErrorBugIcon fill='#F87171' />,
};

const themes: Record<PriorityType, string> = {
  0: 'border-t-green-400 bg-slate-50/20',
  1: 'border-t-yellow-400 bg-slate-50/20',
  2: 'border-t-red-400 bg-red-300/20',
};

interface TaskCardProps {
  className?: string;
  name: string;
  description?: string;
  category?: string;
  author: string;
  executor?: string;
  type: TaskType;
  priority: PriorityType;
  provided?: DraggableProvided;
  innerRef?: (element: HTMLElement | null) => void;
}

export const TaskCard: FC<TaskCardProps> = memo(
  ({
    className,
    name,
    description,
    category,
    author,
    executor,
    type,
    priority,
    provided,
    innerRef,
  }) => (
    <li
      className={`space-y-2 rounded-lg border-t-4 px-4 py-2 shadow-sm hover:shadow-md ${themes[priority]} ${className}`}
      ref={innerRef}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
    >
      <p className='font-medium text-gray-700'>{name}</p>
      {description && <InfoIcon fill='#374151' opacity='0.6' />}
      <div className='flex justify-between'>
        <div className='flex items-center space-x-1'>
          {types[type]}
          {category && <p className='opacity-60'>{category}</p>}
        </div>
        <div className='flex space-x-1'>
          <AvatarIcon fill='#374151' opacity='0.6' />
          {executor && <AvatarIcon fill='#374151' opacity='0.6' />}
        </div>
      </div>
    </li>
  ),
);
