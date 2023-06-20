import { FC } from 'react';

import { BoardColumn } from '../BoardColumn/BoardColumn';

import type { BoardColumnSchema } from '../../model/types/projectBoard';

const boardColumns: Array<BoardColumnSchema> = [
  {
    name: 'Сделать',
    theme: 'blue',
  },
  {
    name: 'В процессе',
    theme: 'yellow',
  },
  {
    name: 'На проверке',
    theme: 'purple',
  },
  {
    name: 'Принято',
    theme: 'green',
  },
];

interface ProjectBoardPageProps {
  className?: string;
}

const ProjectBoardPage: FC<ProjectBoardPageProps> = ({ className }) => (
  <div className={`flex flex-wrap space-x-4 ${className}`}>
    {boardColumns.map(item => (
      <BoardColumn key={item.name} name={item.name} theme={item.theme} />
    ))}
  </div>
);

export default ProjectBoardPage;
